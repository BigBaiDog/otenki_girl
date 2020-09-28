<template>
  <div id="app">
    <prayer />
    <message />
  </div>
</template>

<script>
import prayer from './components/prayer.vue'
import message from './components/message.vue'

export default {
  name: 'App',
  components: {
    prayer,
    message
  }
}
</script>

<style>

</style>
