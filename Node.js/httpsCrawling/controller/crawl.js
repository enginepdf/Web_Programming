const https = require('https');
var request = require("request");
const fs = require("fs");

async function crawl(url) {
  return new Promise((resolve, reject) => {
    request(url, function (err, res, body) {
      if (err) {
        reject(err)
      } else {
        resolve(body)
      }
    });
  })

  // return new Promise((resolve, reject) => {
  //   https.get(url, function (res) {
  //     // console.log("URL: ", url);
  //     let rawData = "";

  //     res.on("data", (chunk) => {
  //       rawData += chunk.toString();
  //       // console.log("raw : ", rawData);
  //     });
  //     res
  //       .on("end", () => {
  //         try {
  //           resolve(rawData);
  //         } catch (error) {
  //           reject(error);
  //         }
  //       })
  //       .on("error", (e) => {
  //         console.error("crawl function got error: " + e.message);
  //       });
  //   });
  // });


}

async function writeFile(filename, body) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, body, (err) => {
      if (err) {
        reject(err)
      } else {
        console.log('saved!');
        resolve(body)
      }
    });
  });
}

async function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    });
  })
}

module.exports = {
  crawl,
  writeFile,
  readFile
};
