const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const indexPath = path.resolve('./index.html');
const buildPath = path.resolve('.');

app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(indexPath);
});

app.post('*', (req, res, next) => {
  res.send('Data was posted');
});

app.put('*', (req, res, next) => {
  res.send('Data was updated');
});

app.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
});
