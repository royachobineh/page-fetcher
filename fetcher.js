const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

const fetcher = function (url, path) {
  request(url, (error, response, body) => {
    fs.writeFile(path, body, error => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Downloaded and saved " + body.length + " bytes to " + path);
    });
  });
}

fetcher(url, path);









