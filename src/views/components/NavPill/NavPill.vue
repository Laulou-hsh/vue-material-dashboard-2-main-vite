<template>
  <div class="nav-wrapper position-relative end-0">
    <ul class="nav nav-pills nav-fill p-1" role="tablist">
      <nav-pill-item v-for="(item, index) in NavPillData" :key="index" :tab="item.tab" :link="item.link" />
    </ul>
  </div>
</template>
<script setup>
import {onMounted, ref} from 'vue'
import NavPillItem from './NavPillItem.vue'
import setNavPills from '@/assets/js/nav-pills.js'
import {data} from './NavPillData.json'
const NavPillData = ref(data)

onMounted(() => {
  setNavPills()
})
</script>
