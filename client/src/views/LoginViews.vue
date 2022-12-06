<script setup lang="ts">
import {ref} from 'vue';
//import router from '@/router';
//import session, {User} from '../stores/session';

const user_name = ref("")
const password = ref("")
const error = ref(false)

function submit() {
    if (user_name.value === "" || password.value === ""){
        error.value = true
        return
    }

    fetch(import.meta.env.VITE_API_ROOT + 'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            username: user_name.value,
            password: password.value
        })
    })
    .then(res => {
        if (res.status == 200) {
            // TODO : create User interface for user document, create fetch return User promise
            // TODO : craete post interface, create getch return post promise
            //session.user = res.json()
            //router.push('profile')
        } else {
            error.value = true
        }
    })
}

</script>

<template> 
   <br/>
    <br/>
    <div class="column is-4 is-offset-4">
        <div class="title">Login</div>
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
        <div v-if="error" class="has-text-danger">ERROR (wrong username or password)</div>

        <br/>
        <br/>
        <a href="">forgot password?</a>
    </div>
</template>