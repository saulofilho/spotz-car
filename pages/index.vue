<template>
  <main>
    <section id="Carousel">
      <p class="title">Spotz Car</p>
      <p class="text">
        Scelerisque purus semper eget duis at tellus at urna condimentum mattis
        pellentesque id nibh tortor id aliquet lectus proin nibh nisl
        condimentum id venenatis a condimentum vitae sapien pellentesque
        habitant.
      </p>
      <Carousel />
    </section>
    <section id="Buscar">
      <h1>buscar wrapper</h1>
      <Buscar />
      <Form />
    </section>
    <section id="Sobre">
      <h1>sober wrapper</h1>
      <Sobre />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="sass">
main
  margin: 0 auto
  height: 100%
  width: 100%
  display: flex
  flex-flow: column

#Carousel
  height: 100vh
  width: 100%
  display: flex
  justify-content: center
  align-items: flex-start
  flex-flow: column
</style>
