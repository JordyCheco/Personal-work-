<script setup lang="ts">
    import { reactive } from 'vue';

    const items = [
        { name: 'Chest press', reps: 10 },
        { name: 'Sit ups' , reps: 10 },
        { name: 'Squat', reps: 10  },
        { name: 'Dead lift', reps: 10 },
        { name: 'Incline Chest press', reps: 10  },
        { name: 'Push-ups' , reps: 10 },
        { name: 'jumping jacks   ', reps: 10  },
        { name: 'Bench press', reps: 10 },
        { name: 'Bicep curls' , reps: 10 },
        { name: 'Tricep extensions' , reps: 10 },
        { name: 'Shoulder press' , reps: 10 },
        { name: 'Lateral raises', reps: 10  },
        { name: 'Lunges' , reps: 10 },
        { name: 'Calf raises', reps: 10  },
        { name: 'Plank', reps: 10  },
        { name: 'Crunches' , reps: 10 },
        { name: 'Leg raises', reps: 10  }, 
        { name: 'Pull-ups' , reps: 10 },
        { name: 'Dips' , reps: 10 },
        { name: 'Bent over rows', reps: 10  }
    ]

    const cart = reactive( [
        { name: 'Chest press', reps: 10, sets: 1 },
        { name: 'Incline Chest press', reps: 10 , sets: 1 },
       
    ])

    function addToCart(item: any) {
        cart.push({ ...item, sets: 1 });
    }
</script>

<template>
    
  <div class="about box">
    <h1 class="title">Workouts</h1>

    <ul>
      <li v-for="item in items" :key="item.name" @click="addToCart(item)">
        <h3>{{ item.name }}</h3>
        
        <em>{{ item.reps }}</em>
      </li>
    </ul>

    <h2 class="title is-2">Workout Log</h2>
    <table class="table is-bordered">
        <tr>
            <th>Workouts</th>
            <th>Reps</th>
            <th>Sets</th>
            <th>Number of reps</th>
        </tr>
        <tr v-for="item in cart" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.reps }}</td>
            <td><input v-model="item.reps" /></td>
            <td>{{ item.reps * item.reps }}</td>
        </tr>
        <tr>
            <td colspan="3">Total # of reps</td>
            <td>{{ cart.reduce((total, item) => total + item.reps * item.reps, 0) }}</td>
        </tr>
    </table>

  </div>
</template>

<style lang="scss">
    ul {
        display: flex;

        li {
            width: 200px;
            padding: 5px;
            margin: 5px;
        }
    }
</style>