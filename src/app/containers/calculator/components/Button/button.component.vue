<template>
  <button 
   class="ButtonCommon"
   @click="clickHandler"
   :class="{
     'Button': type === 'number',
     'ButtonZero': type === 'zero',
     'ButtonOperate': type === 'operator',
    }">
    {{ value }}
  </button>
</template>

<style scoped src="./button.component.css"></style>
<script src="./button.component.js"></script>
