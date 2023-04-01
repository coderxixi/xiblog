<template>
  <div class="box">
  <p>
    <span class="shape" :style="{'shape-outside': text }">
     
    </span>
   入江南烟水路，行尽江南，不与离人遇。睡里消魂无说处，觉来惆怅消魂误。欲尽此情书尺素，浮雁沉鱼，终了无凭据。却倚缓弦歌别绪，断肠移破秦筝柱。思念之初，神魂入梦，行遍江南烟水迷濛之路，不见伊人，消魂之苦无以倾诉，醒来后，消魂情状更难忍受。梦寻无望，只能弹筝诉说，可依然难解心中断肠之苦。在诗人的笔下，思念入骨入心，这样凄美，又这样地引人入胜，在这星光闪闪的静夜里，心中竟闪烁着无尽的柔情
  </p>
  </div>
</template>

<script setup lang="ts">
 import {computed,defineProps} from "vue"
 const props= defineProps(['text'])
 const text=computed(()=>{
  console.log('props.text', props.text);
  
   return props.text
 })
</script>

<style lang="scss" scoped>
 span.shape {
      float: left;
      width: 100px;
      height: 100px;
      padding: 30px;
      margin: 30px;
      border: solid 30px green;
      border-radius: 50%;
      // shape-outside: margin-box;
  }
</style>