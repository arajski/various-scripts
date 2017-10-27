var Twitter = require('node-twitter');
var fs = require("fs");
var jsonminify = require("jsonminify");
var env = require('node-env-file');
var mkdirp = require('mkdirp');
env(__dirname + '/twitter.env');

console.log("Connecting to Twitter API...");

mkdirp('data', function(err){
    if(err){
        console.log("Could not create data folder");
        process.exit();
    } 
});

var twitterStreamClient = new Twitter.StreamClient(
  process.env.CONSUMER_KEY,
  process.env.CONSUMER_SECRET,
  process.env.TOKEN,
  process.env.TOKEN_SECRET
);

console.log("Connected!");
console.log("Listening...");
twitterStreamClient.on('close', function() {
    console.log('Connection closed.');
});
twitterStreamClient.on('end', function() {
    console.log('End of Line.');
    gatherData();
});
twitterStreamClient.on('error', function(error) {
    console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
});
twitterStreamClient.on('tweet', function(tweet) {
    var date = tweet.created_at.split(' ');
    console.log("Received tweet " + tweet.id);

    fs.appendFile('data/' + date[1]+date[2] + '.json', JSON.stringify(tweet) + '\n', function (err) {
        if(err){
            console.log("Couldn't save a tweet! " + err);
        }
    });

});
var args = process.argv.slice(2);
if (args.length === 0) {
    console.log("__________________________________________________");
    console.log("| Please specify hashtags in a following format: |");
    console.log("|        npm start -- hashtag1 hashtag2          |");
    console.log("| Example:                                       |");
    console.log("|        npm start -- twitter collector          |");
    console.log("__________________________________________________");
    process.exit();
}
args = args.map(arg => "#" + arg);

function gatherData() {
  twitterStreamClient.start(args);
};

gatherData();
