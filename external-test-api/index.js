const express = require('express');
const app = express();
const port = 3001;

app.get('/first-card', (req, res) => {
  const error = false;

  if(error) {
    res.status(500).send('Broken!');
  } else {
    res.status(200).json({
      message: 'Working First Card!'
    });
  }
});

app.get('/second-card', (req, res) => {
  const error = false;

  if(error) {
    res.status(500).send('Broken!');
  } else {
    res.status(200).json({
      message: 'Working Second Card!'
    });
  }
});

app.listen(port, () => {
  console.log('Start server in port', port)
})