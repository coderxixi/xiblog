<template>
  <div  :style="{'background': bg }">
    
  </div>
</template>

<script setup lang="ts">

import {computed,ref,onMounted,defineProps} from 'vue';
const props = defineProps(['bg'])
const bg= computed(()=>{
  return props.bg
})
</script>
 
<style lang = "scss" scoped>
    div{
      width: 60px;
      height: 60px;
      border:1px solid skyblue;
    }
</style>