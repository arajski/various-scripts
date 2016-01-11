var fs          = require('fs');
var MongoClient = require('mongodb').MongoClient; 
var sh          = require('string-hash');
var HashTable   = require('hashtable');
var ProgressBar = require('progress');

var url    = 'mongodb://localhost:27017/db01';
var files  = fs.readdirSync('dataset');
var tracks = fs.readFileSync('unique_tracks.txt');

var index           = 0;
var batchNumber     = 5000;

var batchDocuments  = new Array();
var tracksHashTable = new HashTable();

function loadFile(fileName,db,collection) {

	var bar = new ProgressBar(fileName + ' [:bar] :percent elapsed: :elapsed left: :etas', {
      complete: '=',
      incomplete: ' ',
      width: 20,
      total: 1000000
    });

	var fileLines = fs.readFileSync('dataset/'+fileName).toString().split('\n');

	for(i in fileLines) {
		var dataFields = fileLines[i].split('<SEP>');
		if(dataFields.length!=3) 
			continue;

		var trackTitle 	 = '';
		var trackArtist  = '';
		var trackVersion = '';
		var trackId      = '';

		trackInfo = tracksHashTable.get(dataFields[1]);

		if(trackInfo) {
			var trackInfoData = trackInfo.split(';');
			trackVersion = parseInt(trackInfoData[0],10);
			trackId 	 = parseInt(trackInfoData[1],10);
			trackArtist  = trackInfoData[2];
			trackTitle   = trackInfoData[3];
		}
		else {
			trackId = sh(data[1]);
		}

		var date  = new Date(parseInt(dataFields[2],10)*1000);
		var year  = date.getFullYear(); 
		var month = date.getMonth();
		var dayOfTheWeek = date.getDay();

		var insertObject = { 
			user : {
				user_id : sh(dataFields[0])
			},
			track : {
				track_id :  trackId,
				track_version : trackVersion,
				track_artist : trackArtist,
				track_title : trackTitle
			},
			date : {
				date_year : year,
				date_month : month,
				date_day : dayOfTheWeek
			}
		 };

		batchDocuments[index % batchNumber] = insertObject;
	    if((index + 1) % batchNumber == 0) {
	    	//collection.insert(batchDocuments);
	    	batchDocuments = [];
	    }
	    index++;
	    bar.tick();
	}
	fileLines = [];
}

//Main program
//Create hashmap of tracks
var trackLines = tracks.toString().split('\n');
console.log('Creating hashmap...');
for(j in trackLines) {
	var trackFields = trackLines[j].split('<SEP>');

	if(trackFields.length !=4) 
		continue;
	tracksHashTable.put(trackFields[1], 
		sh(trackFields[0]).toString() + ';' 
		+ sh(trackFields[1]).toString() + ';' 
		+ trackFields[2] + ';' 
		+ trackFields[3]);
}
console.log('Done, processing files...');
trackLines = [];
tracks     = [];

//Load files to the database
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
  	var collection = db.collection('songs');
	var start = new Date();
	//loadFile(files[28],db,collection,tracks);
	//Jeśli nie wyrabia pamięć to powyższą metodą wrzucaj pojedyncze pliki
  	for(var i = 1; i<files.length; i++) {
  	 	loadFile(files[i],db,collection); 	
  	}
  	console.log((new Date() - start)/1000.0 + 's');
	db.close();
  }
});
