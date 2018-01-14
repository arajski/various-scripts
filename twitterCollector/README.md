## Twitter Collector

Twitter Collector script is used to collect Tweets related to specific hashtags.

### Installing

To configure the script, first run the following commands:

```
git clone http://github.com/arajski/various-scripts/
cd various-scripts/twitterCollector
npm install
```
After installation is complete, edit `twitter.env` file and paste your Twitter API parameters.

### Running the script

Script requires hashtags as parameters:

```
npm start -- hashtag1 hashtag2
```
Example:

```
npm start -- twitter collector
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

