<template>
    <div class="container">
      <form @submit.prevent="signup" class="box">
        <div class="input">
          <label for="email" class="label">Email</label>
          <input
            class=" input form-control"
            type="email"
            name="email"
            placeholder="e.g. alex@example.com"
          />
        </div>
        <div class="input">
          <label for="password" class="label">Password</label>
          <input
            class=" input form-control"
            type="password"
            name="password"
            placeholder="********"
          />
        </div>
  
        <div class="alternative-option mt-4">
          Have an account? <span @click="moveToLogin">Login</span>
        </div>
  
        <button type="submit" id="signup_button" class="button is-primary">
          Create Account
        </button>
        <div
          class="alert alert-warning alert-dismissible fade show mt-5 d-none"
          role="alert"
          id="alert_2"
        >
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  
  export default {
    data() {
      return {
        email: "",
        password: "123456",
      };
    },
    methods: {
      signup(submitEvent) {
        
        this.email = submitEvent.target.elements.email.value;
        this.password = submitEvent.target.elements.password.value;
  
       
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            console.log("Signed up");
            this.$router.push("/Login");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            let alert_2 = document.querySelector("#alert_2");
            alert_2.classList.remove("d-none");
            alert_2.innerHTML = errorMessage;
            console.log(alert_2);
          });
      },
      moveToLogin() {
        this.$router.push("/Login");
      },
    },
  };
  </script>

  