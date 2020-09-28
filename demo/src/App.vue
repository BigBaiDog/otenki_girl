<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <prayer />
    <message />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import prayer from './components/prayer.vue'
import message from './components/message.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    prayer,
    message
  },
  serverSrc: 'http://127.0.0.1:8083/'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
