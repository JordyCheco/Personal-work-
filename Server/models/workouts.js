const {connect} = require('./mongo');
const data= require('../data/workouts.json');


const COLLECTION = 'Workouts';

async function collection(){
    const client = await connect();
    return client.db('WorkoutTracker').collection(COLLECTION);
}

async function getWorkouts()
{
    const db = await collection();
    const workouts = await db.find({}).toArray();
    return workouts;
}

async function seed(){
    const db = await collection();
    await db.deleteMany({});
    await db.insertMany(data);
}

module.exports = {
    getWorkouts,
    seed,
};