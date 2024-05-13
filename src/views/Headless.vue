<template>
   
    <template v-if="otplessUser">
        <div class="response-box">
          <div class="response-container">
            <div class="scrollable-response">
              <textarea class="response-textarea" :value="JSON.stringify(otplessUser, null, 2)" readonly></textarea>
            </div>
            <button @click="copyResponse">Copy Response</button>
          </div>
        </div>
      </template>
     
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue'
  //@ts-ignore
  import { initOTPless } from '@/utils/initOtpless'
  
  const otplessUser = ref(null)
 
  
  onMounted(() => {
    initOTPless(callback)
  })
  
  const callback = (user: any) => {
    otplessUser.value = user
  }
  
  const copyResponse = () => {
    const responseTextarea = document.querySelector('.response-textarea') as HTMLTextAreaElement
    responseTextarea.select()
    document.execCommand('copy')
  }
  </script>
  
  <style scoped>
  .response-box {
    border: 1px solid #ccc;
    padding: 20px;
    margin-top: 20px;
  }
  
  .response-container {
    margin-top: 10px;
  }
  
  .scrollable-response {
    width: 500px;
    height: 500px; 
    overflow-x: auto;
  }
  
  .response-textarea {
    width: 100%;
    height: 100%;
    resize: none;
  }
  </style>
  