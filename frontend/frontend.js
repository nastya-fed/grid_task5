const axios = require('axios');
const express = require('express');
const app = express();
const port = 8080;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://backend:8081');
    res.send(`Frontend received: ${response.data}`);
  } catch (error) {
    res.status(500).send('Error connecting to backend');
  }
});

app.listen(port, () => {
  console.log(`Frontend is listening at http://localhost:${port}`);
});
