<template>
    <div>
        <!-- <mt-header fixed title="固定在顶部"></mt-header> -->
        <ja-header></ja-header>
    </div>
</template>

<script>
import Vue from 'vue';
import { Header } from 'mint-ui';
import JaHeader from './common/Header'
export default {
    data(){
        return {

        }
    },
    components: {
        Header,
        JaHeader
    },
    mounted(){
        window.apiready = function(){
            var appName = api.appName; //比如： AppLoader
            alert(appName);
        }
    }
}
</script>

<style>

</style>
