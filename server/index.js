// import express from 'express';
const express = require('express');
const mongoose = require('mongoose');
// import { userModel } from './models/user.models';
const userModel = require('./models/user.models');
// import cors from 'cors';
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crud");

app.get('/getUsers', (req, res) => {
    userModel.find({}).then((users) => {
        res.json(users);
    }).catch((err) => {
        res.json(err);
    });
});

app.post('/createUser', async (req, res) => {
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();
    res.json(user);
});


app.listen(3001, () => {
    console.log("server is running");
})