<template>
  <div>
    <div class="field" data-placeholder="请输入少于100字的标题">
      <input type="text" id="name">
  </div>
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
    body {
        padding: 80px;
    }

    .field {
        position: relative;
    }

    input {
        border: none;
        outline: none;
    }

    .field::after {
        content: '';
        background: linear-gradient(to right, white, red, green, blue, white);
        height: 30px;
        position: relative;
        width: 100%;
        height: 1px;
        display: block;
        left: 0px;
        right: 0px;
    }

    .field:hover::before {
        content: attr(data-placeholder);
        position: absolute;
        top: -20px;
        left: 0px;
        color: #555;
        font-size: 12px;
    }
</style>