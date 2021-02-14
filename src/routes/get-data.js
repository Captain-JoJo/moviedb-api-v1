const express = require('express')
const app = express()
const router = express.Router()
const cors = require("cors")
const mongoose = require("mongoose")
const inventorySchema = require('../db/models/item')

//Inserts One all data
router.route("/insertData").get(function(req, res){
    res.header("Access-Control-Allow-Origin", "https://captain-jojo.github.io");
    const body = req.body
    console.log('get-data request body', req.body);

    const Item = mongoose.model("Item", inventorySchema)
    Item.create({name: 'CaptainMarvel'}, function(err, result) {
        if(err) {
            res.send(err)
            console.log('error to insert one', err);
        } else {
            res.send(result)
            console.log('trying to create one item', result);
        }
    })
})

//Gets all data
router.route("/getData").get(function(req, res){
    res.header("Access-Control-Allow-Origin", "https://captain-jojo.github.io");
    const Item = mongoose.model("Item", inventorySchema)
    Item.find({}, function(err, result) {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

//Deletes all data
router.route("/deleteAll").get(function(req, res){
    res.header("Access-Control-Allow-Origin", "https://captain-jojo.github.io");
    const Item = mongoose.model("Item", inventorySchema)
    Item.deleteMany({}, function(err, result) {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
            console.log('removed everything', result);
        }
    })
})

//Deletes one item
router.route("/deleteOne").get(function(req, res){
    res.header("Access-Control-Allow-Origin", "https://captain-jojo.github.io");
    const Item = mongoose.model("Item", inventorySchema)
    Item.deleteOne({}, function(err, result) {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
            console.log('deleted one result with an ID', result);
        }
    })
})

module.exports = router