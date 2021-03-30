<template>
  <div class="buscar-wrapper">
    <div id="Modal">
      <Modal
        v-show="isModalVisible"
        :car-id="selectedCar"
        @close="closeModal"
      />
    </div>
    <div class="title">
      <p>Buscar</p>
    </div>
    <div class="filtros">
      <p>Filtros:</p>
      <input type="search" />
    </div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching cars.</p>
    <div v-else class="card-wrapper">
      <div v-for="car in cars.cars" :key="car.id" class="card">
        <img :src="require(`@/assets/images/${car.image}`)" alt="" />
        <div class="infos-wrapper">
          <div class="infos-card-wrapper">
            <p>
              <strong> Marca: &nbsp;</strong>
            </p>
            <p>
              {{ car.brand }}
            </p>
          </div>
          <div class="infos-card-wrapper">
            <p>
              <strong> Nome: &nbsp;</strong>
            </p>
            <p>
              {{ car.name }}
            </p>
          </div>
          <div class="infos-card-wrapper">
            <p>
              <strong> Km: &nbsp;</strong>
            </p>
            <p>
              {{ car.km }}
            </p>
          </div>
          <div class="infos-card-wrapper">
            <p>
              <strong> Preço: &nbsp;</strong>
            </p>
            <p>
              {{ car.price }}
            </p>
          </div>
          <button type="button" @click="showModal(car)">
            Entrar em contato
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['carId'],
  data() {
    return {
      cars: [],
      isModalVisible: false,
      selectedCar: '',
      count: 0,
      properties: {
        max_price: 0,
        min_price: 0,
        max_km: 0,
      },
    }
  },
  async fetch() {
    this.cars = await fetch(
      'https://us-central1-spotz-prod.cloudfunctions.net/function-sell-my-car/announcements'
    )
      .then((res) => res.json())
      .catch((err) => err.message)
  },
  // mounted() {
  //   this.$notifier.showMessage({
  //     content: 'YAY Our Plugin worked Successfully!',
  //     color: 'success',
  //   })
  // },
  methods: {
    showModal(item) {
      this.isModalVisible = true
      this.selectedCar = item
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
}
</script>

<style lang="sass">
@use '/assets/scss/main'

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
  justify-content: center
  align-items: flex-start
  flex-flow: wrap
  width: 100%
  margin: 0 auto
  max-width: 900px
  padding: 20px 40px

.buscar-wrapper .card
  box-shadow: 2px 4px 10px rgba(0, 0, 0, .2)
  border-radius: 12px
  overflow: hidden
  transition: all .1s linear
  display: flex
  justify-content: center
  align-items: flex-start
  flex-flow: column
  margin: 10px
  width: 220px
  border: 2px solid main.$color-gray

.buscar-wrapper .card img
  width: 220px
  height: 140px
  object-fit: cover

.buscar-wrapper .card:hover
  transform: translate3D(0, -10px, 0)
  opacity: 0.7

.buscar-wrapper .card button
  width: 100%
  background: main.$color-orange
  border-radius: 5px
  margin-top: 10px
  color: main.$color-white
  padding: 10px 0

.buscar-wrapper .card button:hover
  width: 100%
  background: main.$color-purple
  border-radius: 5px
  margin-top: 10px
  color: main.$color-gray

.buscar-wrapper .infos-card-wrapper
  display: flex
  justify-content: center
  align-items: flex-start
  flex-flow: row
  font-size: 14px

.buscar-wrapper .infos-wrapper
  padding: 20px
  width: 100%
  height: auto
  display: flex
  justify-content: center
  align-items: flex-start
  flex-flow: column
</style>
