<script setup lang="ts">
    import sessions, { login, logout } from '../stores/sessions'

</script>

<template>
    <div class="buttons" v-if="sessions.user == null">
        <a class="button is-primary">
            <strong>Sign up</strong>
        </a>
        <a class="button is-light" @click="login('Jordy', 'Checo')">
            Log in
        </a>
    </div>
    <div v-else>
        Welcome {{sessions.user.firstName}} {{sessions.user.lastName}}
        (<a @click="logout()">
            Log out
        </a>)
    </div>

</template>


<style scoped>

</style>