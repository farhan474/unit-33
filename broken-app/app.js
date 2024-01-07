const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const { developers } = req.body;

    if (!developers || !Array.isArray(developers)) {
      return res.status(400).json({ error: 'Invalid input format' });
    }

    const developerInfoPromises = developers.map(async (username) => {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const { name, bio } = response.data;
      return { name, bio };
    });

    const developerInfo = await Promise.all(developerInfoPromises);

    res.json(developerInfo);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
