<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ teller }}</p>
  </div>
</template>

<script>

  export default {
    name: 'aboutPage',
    computed: {
      teller() {
        return this.$store.state.counter.counter;
      }
    }
  }
</script>