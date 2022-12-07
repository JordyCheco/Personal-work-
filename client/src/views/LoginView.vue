<template>
  <div class="container">
    <form @submit.prevent="login" class="box">
      <div class="input">
        <label for="email" class="label">Email</label>
        <input
          class="input form-control"
          type="email"
          name="email"
          placeholder="e.g. alex@example.com"
        />
      </div>
      <div class="input">
        <label for="password" class="label">Password</label>
        <input
          class="input form-control"
          type="password"
          name="password"
          placeholder="********"
        />
      </div>
      <div class="alternative-option mt-4">
        New account? <span @click="moveToSignup">Sign Up Here</span>
      </div>
      <button type="submit" class="button is-primary" id="login_button">
        Sign In
      </button>


      
      <div
        class="alert alert-warning alert-dismissible fade show mt-5 d-none"
        role="alert"
        id="alert_1"
      >
      </div>
    </form>
  </div>
  
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login(submitEvent) {
      this.email = submitEvent.target.elements.email.value;
      this.password = submitEvent.target.elements.password.value;

      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.push("/");


        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          let alert_1 = document.querySelector("#alert_1");
          alert_1.classList.remove("d-none");
          alert_1.innerHTML = errorMessage;
          console.log(alert_1);
        });
    },
    moveToSignup() {
      this.$router.push("/register");
    },
  },
};




</script>

