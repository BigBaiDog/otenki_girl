<template>
  <div id="prayer">
    <b-container>
      <b-img src="../assets/compute.png" fluid></b-img>
    </b-container>
    <b-card style="max-width: 20rem;">
        <b-card-title>￥3,400<span>（含税）</span></b-card-title>
        <b-card-sub-title>为下雨而困扰时，100%晴女会帮您带来好天气😄无论在什么地方...</b-card-sub-title>
        <b-form>
            <b-form-group id="input-group-1" label="希望的日期：" label-for="date">
                <b-form-datepicker id="newData.date" v-model="newData.date" placeholder="日期"></b-form-datepicker>
            </b-form-group>
            <b-form-group id="input-group-2" label="希望的地址：" label-for="address">
                <b-form-input id="newData.address" v-model="newData.address" placeholder="地址"></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="昵称：" label-for="name">
                <b-form-input id="newData.name" v-model="newData.name" placeholder="昵称"></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-4" label="想要晴天的理由：" label-for="reason">
                <b-form-textarea id="newData.reason" v-model="newData.reason" placeholder="理由"></b-form-textarea>
            </b-form-group>
            <b-button variant="danger" v-on:click="sub">定制</b-button>
        </b-form>
    </b-card>

    <div id="message">留言区
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

  </div>
</template>

<script>
export default {
  name: "prayer",
  data() {
    return {
      newData: {
        name: '',
        date: '',
        address: '',
        reason: ''
      },
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
  methods: {
    load: async function () {
      await this.$http
        .get('Prayer/TableList')
        .then(response => (
          this.prayers = response.data.data.items
        ))
    },
    sub: function () {
      this.$http
        .post('Prayer/CreateData',{
          newData: this.newData
        })
        .then(response => (
          this.load()
        ))
    }
  },
  mounted () {
    this.load()
  },
}
</script>