<template>
  <h1>Home</h1>
  <h1>{{ a }}</h1>
  <button @click="increment">Increment</button>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
    };
  },
  methods: {
      increment() {
        this.a++;
      },
    },
};
</script>