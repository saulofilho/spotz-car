<template>
  <div class="sidebar">
    <div
      v-if="isPanelOpen"
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
    ></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { store, mutations } from '~/store/menuburger.js'

export default Vue.extend({
  computed: {
    isPanelOpen(): boolean {
      return store.isNavOpen
    },
  },
  methods: {
    closeSidebarPanel: mutations.toggleNav,
  },
})
</script>

<style lang="sass">
@use '/assets/scss/main'

.slide-enter-active,
.slide-leave-active
  transition: transform 0.2s ease


.slide-enter,
.slide-leave-to
  transform: translateX(-100%)
  transition: all 150ms ease-in 0s


.sidebar-backdrop
  background-color: rgba(0, 0, 0, 0.5)
  width: 100vw
  height: 100vh
  position: fixed
  top: 0
  left: 0
  cursor: pointer

.sidebar-panel
  overflow-y: auto
  background-color: main.$color-orange
  position: fixed
  left: 0
  top: 0
  height: 100vh
  z-index: 999
  padding: 3rem 20px 2rem 20px
  width: 70%

.sidebar-panel a
  color: main.$color-gray
</style>
