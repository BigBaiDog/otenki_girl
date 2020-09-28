<template>
  <div id="message">
    留言区
    <ul id="v-for-object" class="demo">
  <li v-for="value in prayers" :key="value.id">
    {{ value.name }}
    {{ value.date }}
    {{ value.address }}
    {{ value.reason }}
    {{ value.time }}
  </li>
</ul>

  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: "message",
  data() {
      return {
        prayers:[{
          id: '',
          name: '',
          date: '',
          address: '',
          reason: '',
          time: ''
          }]
      }
  },
  methods: {
    
  },
  mounted () {
    this.$axios
      .get('http://127.0.0.1:8083/Prayer/TableList')
      .then(response => (this.prayers = response.data.data.items))
  }
};
</script>
