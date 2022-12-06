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
      username: user.username,
      password: user.password,
      workouts: [],
      following: [],
    });
    return getUser(user.username);
  };
// gets the user's information
const getUser = async (username) => {
    const db = await collection();
    const user = await db.findOne({username: username});
    return user;
}
// gets all the users using the database
const getUsers = async () => {
    const db = await collection();
    const users = await db.find({}).toArray();
    return users;
}
//deletes the user
const deleteUser = async (username) => {
    const db = await collection();
    const user = await db.deleteOne({username: username});
}
//gets their login information
const login = async (username, password) => {
    const db = await collection();
    const user = await db.findOne({username: username});
    if (user) {
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            return user;
        }
    }
}
// gets the user's followers
const getFollowers = async (username) => {
    const db = await collection();
    const user = await db.findOne({username: username});
    return user.followers;
}
// allows the user to unfollow another user
const unfollow = async (username, follower) => {
    const db = await collection();
    const user = await db.findOne({username: username});
    const index = user.followers.indexOf(follower);
    if (index > -1) {
        user.followers.splice(index, 1);
    }
    await db
        .updateOne(
            {username: username},
            {$set: {followers: user.followers}}
        );
}
const seed = async () => {
    const db = await collection();
    await db.deleteMany({});
    await db.insertMany([
        {
            username: 'user1',
            password: 'password1',
            followers: ['user2', 'user3'],
            workouts: []
        },
        {
            username: 'user2',
            password: 'password2',
            followers: ['user1'],
            workouts: []
        },
        {
            username: 'user3',
            password: 'password3',
            followers: ['user1'],
            workouts: []
        }
    ]);
} 
// exports the functions
module.exports = {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    login,
    getFollowers,
    unfollow,
    seed
}
