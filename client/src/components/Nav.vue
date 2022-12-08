<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    let isActive = ref(false);

</script>

<template>
    <nav class="navbar is-white" role="navigation" aria-label="main navigation">

        <div class="container">
        <div class="navbar-brand">
          <router-link class ="navbar-item" to="/">
            <img src="https://th.bing.com/th/id/R.7bb73d49be2710cc9aa8b99250f4e8a5?rik=oGhn7fMevffRmA&pid=ImgRaw&r=0&sres=1&sresct=1" width="112" height="28">
          </router-link>
      
          <a :class="{ 'is-active': isActive }" @click="isActive = !isActive" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu"  :class="{ 'is-active': isActive }">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">
              Home
            </router-link>
            <router-link class="navbar-item" to="/workouts">
              Workouts
            </router-link>
            <router-link class="navbar-item" to="/login">
              Login
            </router-link>
            <router-link class="navbar-item" to="/signup">
              Signup
            </router-link>
            <router-link class="navbar-item" to="/todo">
              List
            </router-link>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
            </div>
          </div>
        </div>
        </div>
      </nav>

</template>

<style>
    .router-link-active {
        
        border-bottom: #00AA00 5px solid;
    }
</style>