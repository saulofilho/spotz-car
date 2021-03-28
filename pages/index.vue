<template>
  <div class="hero-wrapper">
    <h1>hero</h1>
    <Carousel />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="sass">
.button--grey:hover
  color: #fff
  background-color: #35495e

.hero-wrapper
  margin: 0 auto
  height: 100vh
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  background: orange
</style>
