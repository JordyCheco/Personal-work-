import {api} from "./sessions"
import type {User} from "./type"

// this is the login function that is called when the user clicks the login button
export const login = async (username: string, password: string) => {
    return api<User>(`/users/login`, {username, password}, 'POST');
    }

export const register = async (username: string, password: string) => {
    return api<User>(`/api/users`, {username, password}, 'POST');
    }
