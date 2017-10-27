# Various scripts

As the name suggests - this repo contains some useful scripts, configs, dotfiles etc... Feel free to use them ;]

## Twitter Collector

Twitter Collector script is used to collect Tweets related to specific hashtags.

### Installing

To configure the script, first run the following commands:

```
git clone http://github.com/rjsk/various-scripts/
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

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
