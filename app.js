require('dotenv').config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(process.env.HELLO);
});

app.get("/user", (req, res) => {
    res.send({name: process.env.NAME, age: process.env.AGE});
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
