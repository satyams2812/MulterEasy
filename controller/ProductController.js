const express = require('express');
const router = express.Router();

const Product = require('../models/Product');
const path = require('path');



exports.imageuploading = async (req, res) => {
  try {

    Product({
      name: req.body.name,
      description: req.body.description,
      photos: req.files,
    }).save((err, data) => {
      if (err) throw err;
      else
        res.status(200).json(data);
    });

  }
  catch (err) {

    res.status(500).json(err)

  }
}

exports.imageretrivebyid = async (req, res) => {
  try {
    Product.findOne({
      _id: req.params.id
    }).then(
      (data) => {
        res.status(200).json(data);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }

}

exports.showalldata = async (req, res) => {
  try {
    Product.find().exec(function(err, product){
       
      return res.status(200).json(product);
     });
     
  } catch (err) {
    res.status(500).json(err)
  }
}


exports.home = async (req, res) => {
  res.send("hello world")
}