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

export default {
  name: "message",
  data() {
    return {
      prayers: {
        id: '',
        name: '',
        date: '',
        address: '',
        reason: '',
        time: ''
      }
    }
  },
  
  mounted () {
    this.axios
      .get(this.serverSrc+'Prayer/TableList')
      .then(response => (this.prayers = response.data.data.items))
  },

  methods: {
    
  }
};
</script>
