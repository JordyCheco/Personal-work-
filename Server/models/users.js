const { connect } = require('./mongo');
const bcrypt = require('bcrypt');

const DATABASE = 'WorkoutTracker';
const COLLECTION = 'Users';
//creates the collection that connects to the database
const collection = async() => {
    const client = await connect();
    return client.db(DATABASE).collection(COLLECTION);
}
// creates a new user
const createUser = async (user) => {
    const db = await collection();
    const salt = bcrypt.genSaltSync(10)
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash
    await db.insertOne({
      email: user.email,
      password: user.password,
      workouts: [],
      following: [],
    });
    return getUser(user.email);
  };
// gets the user's information
const getUser = async (email) => {
    const db = await collection();
    const user = await db.findOne({email: email});
    return user;
}
// gets all the users using the database
const getUsers = async () => {
    const db = await collection();
    const users = await db.find({}).toArray();
    return users;
}
//gets their login information
const login = async (email, password) => {
    const db = await collection();
    const user = await db.findOne({email: email});
    if (user) {
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            return user;
        }
    }
}


const seed = async () => {
    const db = await collection();
    await db.deleteMany({});
    await db.insertMany([
        {
            email: 'user1@gmail.com',
            password: 'password1',
        },
        {
            email: 'user2@gmail.com',
            password: 'password2',

        },
        {
            email: 'user3@gmail.com',
            password: 'password3',
        }
    ]);
} 
// exports the functions
module.exports = {
    createUser,
    getUser,
    getUsers,
    login,
    seed
}
