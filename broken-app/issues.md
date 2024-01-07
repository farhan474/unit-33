# Broken App Issues

```js
const express = require('express');
// should be const here
let axios = require('axios');
// should be const here
var app = express();

app.post('/', function(req, res, next) {
    // need validation for the input
  try {
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
      // need to wait for all promises completion before processing to aggrate and send the result to the user
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch {
     // add error handling
    next(err);
  }
});

app.listen(3000);

```

