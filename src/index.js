const express = require("express");
const app = express();

app.get("*", (req, res) => {
  const host = req.headers.host;
  const origin = req.headers.origin;
  const path = process.env.DOCKERCLOUD_CONTAINER_FQDN;
  res.send(`Hello world123! from ${path}`);
});

app.listen(4000, () => {
  console.log(`Listening to ${4000}`);
});
