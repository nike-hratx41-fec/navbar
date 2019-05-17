const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.get('/getData', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

let port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
