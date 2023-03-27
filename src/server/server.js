const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/build', express.static(path.join(__dirname, '../../build')));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  // fs.writeFile(path.join(__dirname, '../../database.json'), /* JSON.stringify(req.body) */ JSON.stringify({ hello: 'hi' }), function () {
  //   console.log('wrote file', path.join(__dirname, '../../database.json'));
  // });
  res.sendFile(path.resolve(__dirname, '../../public', 'index.html'));
});

// app.post('/paths', function(req, res) {
//   console.log('in /message post');

//   var fs = require('fs');
//   fs.writeFile(__dirname + '../../database.json', JSON.stringify(req.body), function(){
//       console.log('wrote file')
//       res.end();
//   });
// })

const listener = app.listen(3000, function () {
  console.log('Listening on port ' + listener.address().port);
});
