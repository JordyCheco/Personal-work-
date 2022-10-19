<template>
    <div>
        <p>
  Enter your workout:
  <input v-model="question" />
</p>
<p>{{ answer }}</p>
    <Activity/>
</div>
<div>
    <article class="panel is-info">
  <p class="panel-heading">
    Workout log 
  </p>
  <p class="panel-tabs">
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input is-info" type="text" placeholder="Search">
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
</article>
</div>
</template>

<script lang="ts">
import Activity from "../components/Activity/Activity.vue";
export default {
    data() {
        return {
            question: "",
            answer: "Questions usually contain a question mark. ;-)"
        };
    },
    watch: {
        // whenever question changes, this function will run
        question(newQuestion, oldQuestion) {
            if (newQuestion.includes("?")) {
                this.getAnswer();
            }
        }
    },
    methods: {
        async getAnswer() {
            this.answer = "Thinking...";
            try {
                const res = await fetch("https://yesno.wtf/api");
                this.answer = (await res.json()).answer;
            }
            catch (error) {
                this.answer = "Error! Could not reach the API. " + error;
            }
        }
    },
    components: { Activity }
}

</script>

<style scoped>

</style>