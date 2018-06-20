<template>
  <div id="app">
    
    <router-view/>

  <mt-tabbar v-model="selected">
    <mt-tab-item id="外卖">
      <img slot="icon" >
      外卖
    </mt-tab-item>
    <mt-tab-item id="订单">
      <img slot="icon" >
      订单
    </mt-tab-item>
    <mt-tab-item id="发现">
      <img slot="icon" >
      发现
    </mt-tab-item>
    <mt-tab-item id="我的">
      <img slot="icon" >
      我的
    </mt-tab-item>
  </mt-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';
export default {
  name: 'App',
  data(){
    return {
      selected: '外卖'
    }
  },

  components: {
    Tabbar,
    TabItem
  },
  
  mounted(){
    window.apiready = function (){
      api.setStatusBarStyle({
        style: 'light',
        color: '#fff'
      });
    }
  }
}
</script>
