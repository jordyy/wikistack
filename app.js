const { application } = require("express");

app.get("/", (req, res) => {
    res.send(console.log('hello world'));
})