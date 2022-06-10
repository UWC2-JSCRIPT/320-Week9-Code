const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3001;
// process.env.API_KEY

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.CLIENT_HOST);
    next();
});

// localhost:3001/
app.get('/', (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((response) => {
            res.json(response.data);
        })
        .catch(() => {
            res.status(500).send('Server error');
        });
});

app.listen(PORT, () => {
    console.log(`Now running test-api at localhost:${PORT}`);
});
