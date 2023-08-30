// client.js

const https = require("https");
const fs = require("fs");

const videoId = "l8fkUpoiVFE"; //
const url = `https://<domainUrl>/video/${videoId}`;

const file = fs.createWriteStream("video.mp4");

https.get(url, (response) => {
  response.pipe(file);
});
