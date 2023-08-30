# YouTube Direct API

API endpoint to get direct link to YouTube videos.

Currently only Shorts are supported.

### Install

1. Clone repo. Run ```npm i```
2. Run ```npm start```

### Usage

```
GET https://<domainUrl>:3000/video/<videoId>
```

### Client

An example client app is provided in ```client/client.js```.

### Mechanism

The API uses ytdl-core to proxy the video.

### License

AGPL-3.0 ©️ Zubin