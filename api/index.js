#!/usr/bin/env node

/*!
 * YouTube Direct API
 * Copyright (c) 2023 to present. All rights reserved.
 *
 * @author Zubin
 * @username (GitHub) losparviero
 * @license AGPL-3.0
 */

// Add env vars as a preliminary

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ytdl = require("ytdl-core");
const https = require("https");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/video/:id", async (req, res) => {
  const videoId = req.params.id;
  const link = `https://www.youtube.com/watch?v=${videoId}`;
  try {
    let info = await ytdl.getInfo(link);
    let format = ytdl.chooseFormat(info.formats, { quality: "highestvideo" });

    const directDownloadUrl = format.url;

    https.get(directDownloadUrl, (response) => {
      res.setHeader("Content-Type", "video/mp4");
      response.pipe(res);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error processing link" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
