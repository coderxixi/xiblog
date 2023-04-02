<template>
  <div class="flex" :style="{ 'flex-direction': type.direction ,'flex-wrap':type.wrap}">
   <slot></slot>
  </div>
 
</template>

<script setup lang="ts">
import { defineComponent ,computed,defineProps} from 'vue'

const props=defineProps(['type','direction','wrap']);

const type=computed(()=>{
  return {type:props.type, direction :props.direction, wrap:props.wrap }
})

</script>

<style lang="scss">
.flex{
    display: flex;
    border: solid 5px silver;
  //  width: 500px;
    box-sizing: border-box;
    padding: 10px;
    div {
    outline: solid 5px blueviolet;
    text-align: center;
    font-size: 28px;
    line-height: 5em;
    width: 300px;
    margin: 10px;
  }
  *{
     border: solid 5px blueviolet;
    padding: 10px;
    margin: 10px;
  }
}

 
</style>