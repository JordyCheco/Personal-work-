<script setup lang="ts">
    import {ref} from 'vue';
    import { RouterLink } from 'vue-router';

    const user_name = ref("");
    const password = ref("");
    const location   = ref(false);

    function submit() {
        console.log('submit hit')
        fetch(import.meta.env.VITE_API_ROOT + 'auth/register', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username: user_name.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(user => {
            if (user.acknowledged){
                location.value = true;
                user_name.value = "";
                password.value = "";
            }
            return user
        })
    }
</script>

<template>
    <br/>
    <br/>
    <div class="column is-4 is-offset-4">
        <div class="title">Sign Up</div>

        <div class="field">
            <label class="label">username</label>
            <div class="control">
                <input class="input" type="text" placeholder="username" v-model="user_name">
            </div>
        </div>

        <div class="field">
            <label class="label">password</label>
            <div class="control">
                <input class="input" type="password" placeholder="password" v-model="password">
            </div>
        </div>
        <div>
            <button class="button is-link" @click="submit">submit</button>
        </div>
        <br/>
        <div v-if="location">Created user with username: {{user_name}} and password: {{password}}</div>
        <div v-if="location">You can login in <router-link to="/login">Login</router-link></div>
        <br/>
        <br/>
    </div>
</template>