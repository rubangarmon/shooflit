// import express from 'express';
const express = require('express')
const port = 3002;

var app = express();

app.get('/', (req, res) => {
    res.send("Welcome to shooflit")
});

// app.use(cors());
var server = app.listen(port , () => {
    console.log(`LISTING AT http://localhost:${port}`);
})