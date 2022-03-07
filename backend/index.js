const express = require("express")
const { MongoClient } = require("mongodb")


const PORT = 8080;


const app = express()


app.listen(PORT, () => {
    console.log('Server starting');
})