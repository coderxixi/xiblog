---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import TakeDown from './components/TakeDown.vue'

// import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 学习笔记


<TakeDown v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />


