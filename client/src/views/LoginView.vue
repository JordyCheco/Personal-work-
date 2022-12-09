<template>
 
 <article class="panel is-success">
  <p class="panel-heading">
    Welcome please login! 
  </p>  
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
</article>
  
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
        // Onced logged in, user is redirected to the home page
      const info = getAuth();
      signInWithEmailAndPassword(info, this.email, this.password)
        .then(() => {
          this.$router.push("/");


        })
        // this catches the error if user tries to login with an email that does not exist
        .catch((invalid) => {
          const errorCode = invaild.code;
          const errorMessage = invalid.message;
          console.log(errorCode);
          console.log(errorMessage);
          let mistake = document.querySelector("mistake");
          mistake.classList.remove("d-none");
          mistake.innerHTML = errorMessage;
          console.log(mistake);
        });
    },
    moveToSignup() {
      this.$router.push("/signup");
    },
  },
};




</script>
