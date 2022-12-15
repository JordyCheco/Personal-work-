<template>
  <article class="panel is-success">
  <p class="panel-heading">
  Start your workout journey today!
  </p>
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
      <button type="submit" id="signup_button" class="button is-primary">
        Create Account
      </button>
    </form>
  </div>
</article>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  
  export default {
    data() {
      return {
        email: "",
        password: "test",
      };
    },
    methods: {
      signup(submitEvent) {
        
        this.email = submitEvent.target.elements.email.value;
        this.password = submitEvent.target.elements.password.value;
  
       
        const info = getAuth();
        createUserWithEmailAndPassword(info, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            console.log("Signed up");
            this.$router.push("/Login");
          })
          .catch((invalid) => {
            const errorCode = invalid.code;
            const errorMessage = invalid.message;
            console.log(errorCode);
            console.log(errorMessage);
            let error = document.querySelector("#error");
            error.classList.remove("d-none");
            error.innerHTML = errorMessage;
            console.log(error);
          });
      },
      moveToLogin() {
        this.$router.push("/Login");
      },
    },
  };
</script>
