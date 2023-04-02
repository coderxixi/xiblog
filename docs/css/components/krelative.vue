<template>
  <slot></slot>
</template>

<script setup lang="ts">

</script>

<style lang="scss">

  article {
    width: 400px;
    height: 200px;
    border: solid 10px blueviolet;
    font-size: 14px;
    padding: 30px;
  }
  article img {
    width: 50px;
    position: relative;
    top: -20px;
  }
 .absolute{
        width: 400px;
      height: 100px;
      border: solid 6px blueviolet;
      position: relative;
      div{
         font-size: 25px;
      background: #f2a67d;
      padding: 10px;
      position: absolute;
      top: 0;
      left: 0px;
      }
 }
 .relative{
     width: 400px;
      height: 200px;
      border: solid 6px blueviolet;
      position: relative;
      div{
    font-size: 25px;
      background: #f2a67d;
      padding: 10px;
      position: absolute;
       top: 50px;
    left: 50px;
      }
 }
 .chicun{
   width: 400px;
    height: 100px;
    border: solid 6px blueviolet;
    position: relative;
  
  div {
    font-size: 20px;
    background: #f2a67d;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    right: 0;
    bottom: 0;
    overflow: hidden;
    // width: 100%;
  
 }
}

.center{
    width: 400px;
    height: 400px;
    border: solid 6px blueviolet;
    position: relative;
  
  div {
    width: 200px;
    height: 200px;
    background: #f2a67d;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 50%;
    margin-top: -100px;
  }
}

.centers{
  width: 300px;
    height: 200px;
    border: solid 10px blueviolet;
    position: relative;
    overflow: scroll;
    article{
      height: 600px;
      div{
          width: 200px;
    height: 200px;
    position: absolute;
      background: red;
    left: 0px;
    z-index: 2;
      }
    }
}
.zindex{
      width: 200px;
    height: 200px;
    border: solid 10px blueviolet;
    position: relative;
    cursor: pointer;
}

.zindex:hover div:nth-of-type(2) {
    z-index: 2;
  }

  .zindex div {
    width: 200px;
    height: 200px;
    position: absolute;
  }

  .zindex div:nth-of-type(1) {
    background: red;
    left: 0px;
    z-index: 2;
  }

  .zindex div:nth-of-type(2) {
    background: green;
    left: 50px;
    top: 50px;
    overflow: hidden;
  }

  .kl {
    padding: 30px;
    font-size: 14px;
  }
  .kl article {
    width: 400px;
    height: 100px;
    border: solid 5px blueviolet;
    overflow: scroll;
  }
 .kl article h2 {
    background: #db1f77;
    color: white;
    text-indent: 20px;
    position: sticky;
    top: 0;
  }
.kl article h2:nth-of-type(1) {
    background: blueviolet;
  }
  .kl article section {
    height: 300px;
  }






  .nm {
    padding: 30px;
    font-size: 14px;
  }
 .nm article {
    width: 400px;
    border: solid 5px blueviolet;
    height: 200px;
    overflow: scroll;
  }
 .nm article section:nth-of-type(odd) h2 {
    background: blueviolet;
  }
  .nm article section h2 {
    background: #db1f77;
    color: white;
    text-indent: 20px;
    position: sticky;
    top: 0;
  }
  .nm article section p {
    padding: 20px;
  }
</style>