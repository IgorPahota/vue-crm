<template>
    <div>{{test}} {{data}}
  <button  class="btn btn-primary"
  v-on:click="console"
  >click me</button>
<TestSecond/>
  </div>
</template>

<script>
  import TestSecond from "./TestSecond";
    export default {
        name: "Test",
      components: {TestSecond},
      data : () => ({
          test: 'hello',
          data: null
      }),
      methods: {
          console() {
            console.log('clicked')
            this.$router.push('/')
          }
      },
      async mounted() {
          console.log('mounted')
       let result = await fetch('https://dog.ceo/api/breeds/image/random')
        console.log(result.status);
         this.data = result.status;
          console.log(this.$store.state.data)
        console.log('state', this.$store.state)


      },
      beforeDestroy() {
          console.log('destroyed')
      }
    }
</script>

<style scoped>

</style>
