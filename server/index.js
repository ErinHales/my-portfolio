const express = require("express");
// const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../dist`));





const port = process.env.SERVER_PORT;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})