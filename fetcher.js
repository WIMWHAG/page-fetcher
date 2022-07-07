const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {
  console.log('error: ', error);
  console.log('statusCode: ', response && response.statusCode);
  console.log('body: ', body);

  if (response.statusCode === 200) {
    fs.writeFile(path, body, 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Downloaded ${body.length} bytes to ${path}`);
    });
  }
});