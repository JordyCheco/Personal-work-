<template>
    <article class="panel is-success">
  <p class="panel-heading">
    TO DO LIST 
  </p>
    <div class="box">
      <form @submit.prevent="add">
        <input v-model="todo" />
        <button class="button is-primary" type="submit">Add</button>
      </form>
  
      <div v-for="(todo, index) of todos" :key="todo.id">
        {{ todo.todo }}
        <button class="button is-primary" @click="deleteTodo(index)">delee</button>
      </div>
    </div>
</article>
  </template>
  
  <script>
  import { v4 as uuidv4 } from "uuid";
  
  export default {
    name: "App",
    data() {
      return {
        todo: "",
        todos: [],
      };
    },
    methods: {
      add() {
        const { todo } = this;
        this.todos.push({
          id: uuidv4(),
          todo,
        });
        this.todo = "";
      },
      deleteTodo(index) {
        this.todos.splice(index, 1);
      },
    },
  };
  </script>