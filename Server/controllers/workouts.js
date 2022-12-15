const express = require('express');
const workouts = require('../models/workouts');

const app = express.Router();

app.get('/', async (req, res) => {
    const data = await workouts.getWorkouts();
    res.json(data);
});

module.exports = app;
