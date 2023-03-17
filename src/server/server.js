const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/build', express.static(path.join(__dirname, '../../build')));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../public', 'index.html'));
})

const listener = app.listen(3000, function () {
  console.log('Listening on port ' + listener.address().port);
});
