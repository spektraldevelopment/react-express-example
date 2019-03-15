const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

//Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// parse application/json
app.use(bodyParser.json())

//end point to return a short list of items
app.get(
    '/api/getList',
    (req, res) => {
        var list = ["item1", "item2", "item3"];
        res.json(list);
        console.log("Sent list of items");
    }
);

// Handles any request that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

const port = process.env.PORT || 5000;

app.listen(port);

console.log('The app is listening on port ', port);