<!--
=========================================================
* Vue Material Dashboard 2 - v3.0.0
=========================================================

* Product Page: https://creative-tim.com/product/vue-material-dashboard-2
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-->
<template>
  <sidenav :custom_class="color" :class="['fixed-start']" v-if="showSidenav" />
  <main class="main-content position-relative max-height-vh-100 h-100 overflow-x-hidden">
    <navbar
      :class="[isNavFixed ? navbarFixed : '', isAbsolute ? absolute : '']"
      :color="isAbsolute ? 'text-white opacity-8' : ''"
      :minNav="navbarMinimize"
      v-if="showNavbar"
    />
    <router-view />
    <app-footer v-show="showFooter" />
    <configurator :toggle="toggleConfigurator" :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']" />
  </main>
</template>

<script setup>
import {onBeforeMount} from 'vue'
import {storeToRefs} from 'pinia'
import Sidenav from './examples/Sidenav/index.vue'
import Configurator from '@/examples/Configurator.vue'
import Navbar from '@/examples/Navbars/Navbar.vue'
import AppFooter from '@/examples/Footer.vue'
import {useAppStore} from '@/store/index.js'

const store = useAppStore()
const {
  color,
  isAbsolute,
  isNavFixed,
  navbarFixed,
  absolute,
  showSidenav,
  showNavbar,
  showFooter,
  showConfig,
  hideConfigButton,
} = storeToRefs(store)

const {navbarMinimize, toggleConfigurator} = store

onBeforeMount(() => {
  store.isTransparent = 'bg-transparent'
  const sidenav = document.getElementsByClassName('g-sidenav-show')[0]

  if (window.innerWidth > 1200) {
    sidenav.classList.add('g-sidenav-pinned')
  }
})
</script>
