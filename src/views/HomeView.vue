<template>
  <div class="home">
    <h1>{{ counter }}</h1>
    <div>
      <button @click="increment()">Increment</button>
      <button @click="decrement()">Decrement</button>
      <br>
      <button @click="reset()">Reset</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {},
  methods: {
    increment() {
      this.$store.dispatch('counter/increment', 1)
    },
    decrement() {
      this.$store.dispatch('counter/decrement', 1)
    },
    reset() {
      this.$store.dispatch('counter/reset')
    }
  },
  computed: {
    counter() {
      return this.$store.state.counter.counter;
    }
  }
}
</script>
