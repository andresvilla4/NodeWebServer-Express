const express = require('express');
const path = require('path');
const port = 3000;

const app = express();
const pathUI = path.join(__dirname, './UI');

app.use(express.static(pathUI, { extensions: ['html'] }));

app.use(function(req, res) {
    res.status(404).sendFile(pathUI + '/error.html');
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})