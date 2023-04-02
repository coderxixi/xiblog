<template>
  <div class="flex"
    :style="{ 'height': type.height, 'width': type.width, 'flex-direction': type.direction, 'flex-wrap': type.wrap, 'justify-content': type.justify, 'align-items': type.align, 'align-content': props.content }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, computed, defineProps } from 'vue'

const props = defineProps(['type', 'direction', 'wrap', 'justify', 'align', 'content', 'height', 'width']);

const type = computed(() => {
  return { type: props.type, direction: props.direction, wrap: props.wrap, justify: props.justify, align: props.align, content: props.content, height: props.height, width: props.width }
})

</script>

<style lang="scss">
.flex {
  display: flex;
  border: solid 5px silver;
  // width: 500px;
  // height: 300px;
  box-sizing: border-box;
  // padding: 10px;

  div {
    outline: solid 5px blueviolet;
    text-align: center;
    font-size: 28px;
    line-height: 80px;
    width: 300px;
    margin: 10px;
    width: 100px;
    height: 80px;
  }

  & div:nth-of-type(1) {
    align-self: flex-start;
  }

  & div:nth-of-type(3) {
    align-self: flex-end;
  }

  .stretch {
    height: 100%;
    align-items: stretch;
  }

  * {
    border: solid 5px blueviolet;
    padding: 10px;
    margin: 10px;
  }
}

.flexgrow * {
  flex-grow: 1;
  width: 90px;
  height: 100px;
  background: blueviolet;
  background-clip: content-box;
  padding: 10px;
  box-sizing: border-box;
  font-size: 35px;
  color: white;
}

.grow div:nth-of-type(1) {
  width: 100px;
  flex-grow: 1;
}

.grow div:nth-of-type(2) {
  width: 100px;
  flex-grow: 3;
}

.grow div:nth-of-type(3) {
  width: 300px;
  flex-grow: 6;
}

.shrink div {
  width: 200px;
  height: 100px;
}

.shrink div:nth-child(1) {
  flex-shrink: 0;
}

.shrink div:nth-child(2) {
  flex-shrink: 1;
}

.shrink div:nth-child(3) {
  flex-shrink: 3;
}


.basis{
    position: relative;
    margin-left: 100px;
    // margin-top: 100px;
    outline: solid 5px silver;
    display: flex;
    padding: 20px;
}

.basis div{
  outline: solid 5px blueviolet;
    text-align: center;
    font-size: 28px;
   
}

.basis div:nth-of-type(1) {
  flex-basis: 100px;
  width: 200px;
}

.basis div:nth-of-type(2) {
  flex-basis: 200px;
}

.basis div:nth-of-type(3) {
  flex-basis: 200px;
}
.flexbase{
  width: 600px;
  position: relative;
  height: 150px;

  outline: solid 5px silver;
  display: flex;
  padding: 20px;
  div{
    outline: solid 5px blueviolet;
  text-align: center;
  font-size: 28px;
 
  flex: 1 0 100px;
  }
}
</style>