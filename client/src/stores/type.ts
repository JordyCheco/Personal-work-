// This file contains all the types used in the application
export type User = {
    username: string;
    password: string;
    workouts: Workout[];
    friends: String[];
}
export type Workout = {
    title: string;
    description: string;
}
