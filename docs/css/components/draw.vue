<template>
  <div>
    <a data-text="从此无心爱良夜，任他明月下西楼">诗词</a>
  </div>
</template>

<script>
export default {
  data () {
    return {

 
    }
  }
}
</script>
 
<style lang = "scss" scoped>
  a {
    position: relative;
    display: block;
    cursor: pointer;
}

a:hover {
    &::before {
        content: "text: "attr(data-text);
        background: #555;
        color: white;
        position: absolute;
        top: -40px;
        padding: 3px 10px;
        border-radius: 10px;
    }
}
</style>