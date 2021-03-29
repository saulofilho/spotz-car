<template>
  <div class="buscar-wrapper">
    <div class="title">
      <p>Buscar</p>
    </div>
    <div class="filtros">
      <p>Filtros:</p>
      <input type="search" />
    </div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching cars</p>
    <div v-else class="card-wrapper">
      <div v-for="(car, index) in cars.cars" :key="index" class="card">
        <p>
          {{ car.id }}
        </p>
        <p>
          {{ car.brand }}
        </p>
        <!-- <img src={{ car.image }} alt="" /> -->
        <p>
          {{ car.km }}
        </p>
        <p>
          {{ car.name }}
        </p>
        <p>
          {{ car.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: [],
    }
  },
  async fetch() {
    this.cars = await fetch(
      'https://us-central1-spotz-prod.cloudfunctions.net/function-sell-my-car/announcements'
    )
      .then((res) => res.json())
      .catch((err) => err.message)
  },
  methods: {},
}
</script>

<style lang="sass">
.buscar-wrapper
  margin: 0 auto
  height: auto
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  flex-flow: column
  padding: 50px 0

.buscar-wrapper .card-wrapper
  display: flex
  justify-content: flex-start
  align-items: center
  flex-flow: wrap
  width: 100%
  margin: 0 auto
  max-width: 900px
  padding: 20px 40px

.buscar-wrapper .card
  display: flex
  justify-content: center
  align-items: center
  flex-flow: column
  background: red
  margin: 10px
</style>
