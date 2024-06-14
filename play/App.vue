<script setup lang="ts">
import axios from 'axios'

async function request(url: string, method:'get'|'post') {
  const instance = axios.create({
    baseURL:'',
    timeout:1000,
    responseType:'json',
    headers:{
      'Content-Type':''
    }
  })

  instance.interceptors.request.use(config=>{
    
    return config
  }, err => Promise.reject(err))

  instance.interceptors.response.use(res=>{
    
    return res.data
  }, err=>Promise.reject(err))

  const res = await instance.get('', {
    params:{},

  })

  if(res.status === 200) {

  }
}



</script>

<template>
  <button v-bind="{}"></button>
  

</template>

<style>


</style>