const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
const port = 3000;

app.use(cors());

app.get('/transactions', async (req, res) => {
  try {
    const response = await axios.get('https://interview.adpeai.com/api/v2/get-task');
    res.json(response.data);
  } catch (error) {
    console.error('Error on request');
    res.status(500).json({ error: error.message });
  }
});

app.post('/transactions', async (req, res) => {
  try {
    const requestBody = req.body;    
    const response = await axios.post('https://interview.adpeai.com/api/v2/submit-task', requestBody);
    console.log(response.data);
    res.json({status: response.status, message: response.data});
  } catch (error) {
    console.error('Error on request:', error.message);
    res.status(error.status).json({ status: error.status, message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});
