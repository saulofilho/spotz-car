<template>
  <header>
    <div class="header-wrapper container">
      <div class="logo-wrapper">
        <img src="../assets/images/logo.png" alt="logo of spotz car" />
      </div>
      <nav class="navbar-wrapper">
        <ul>
          <li>
            <a href="#Carousel"> Início </a>
          </li>
          <li>
            <a href="#Buscar"> Buscar </a>
          </li>
          <li>
            <a href="#Sobre"> Sobre </a>
          </li>
        </ul>
      </nav>
      <div class="menu-wrapper">
        <Menuburger />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Menuburger from './Menuburger.vue'

export default Vue.extend({
  components: {
    Menuburger,
  },
})
</script>

<style lang="sass">
@use '/assets/scss/main'

.menu-wrapper
  display: none

header
  width: 100%
  height: auto
  position: fixed

header .header-wrapper
  display: flex
  justify-content: space-between
  align-items: center
  flex-flow: row
  width: 100%
  height: auto

header .logo-wrapper img
  height: 100%
  width: 100px

header .navbar-wrapper ul
  display: flex
  justify-content: flex-start
  align-items: center
  flex-flow: row

header .navbar-wrapper ul li
  display: flex
  justify-content: flex-start
  align-items: center
  flex-flow: row
  color: black

header .navbar-wrapper ul li a
  color: main.$color-gray
  padding-left: 10px

header .navbar-wrapper ul li a:hover
  color: main.$color-purple

@media (max-width: 768px)
  .menu-wrapper
    display: block
  .navbar-wrapper
    display: none
</style>
