<template>
  <div class=floatbox :class="bg ? 'bg' : ''">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from 'vue';

const props = defineProps(['bg']);
const bg = computed(() => {
  return props.bg
})
</script>
 
<style lang = "scss" >
.floatbox {
  width: 500px;

  &.bg {
    padding: 50px;
    background-color: antiquewhite;
    background-clip: content-box;
    border: solid 2px black;
  }

  overflow: hidden;

  .nonefloat {
    border: 1px solid red;
  }

  .nonefloat,
  .leftfloat {
    width: 100px;
    height: 100px;
  }

  .leftfloat {
    background: skyblue;
  }

  .clear {
    div {
      width: 200px;
      height: 200px;
      margin-bottom: 10px;
    }

    div.green {
      border: solid 2px green;
      float: left;
    }

    div.red {
      border: solid 2px red;
      float: right;
    }

    div.blue {
      background: blue;
      clear: both;
    }
  }
}

.left {
  float: left;
}

.right {
  float: right;
}</style>