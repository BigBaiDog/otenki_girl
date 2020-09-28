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
                <b-form-datepicker id="date" v-model="date" placeholder="日期"></b-form-datepicker>
            </b-form-group>
            <b-form-group id="input-group-2" label="希望的地址：" label-for="address">
                <b-form-input id="address" v-model="address" placeholder="地址"></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="昵称：" label-for="name"><span>（含税）</span>
                <b-form-input id="name" v-model="name" placeholder="昵称"></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-4" label="想要晴天的理由：" label-for="reason"><span>（含税）</span>
                <b-form-textarea id="reason" v-model="reason" placeholder="理由"></b-form-textarea>
            </b-form-group>
            <b-button variant="danger">定制</b-button>
        </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "prayer",
  data() {
      return {
          date: '',
          address: '',
          name: '',
          reason: ''
      }
  },
  methods: {


  }
};
</script>
