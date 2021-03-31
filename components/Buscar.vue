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
      <p>Filtre o seu próximo carro:</p>
      <div class="filtros-wrapper">
        <input
          id="searchValue"
          v-model="searchValue"
          type="text"
          class="form-field"
          name="searchValue"
          placeholder="Ex.: Golf"
        />
        <select id="select" v-model="sortBy" name="sortBy">
          <option value="max_price">Preço</option>
          <option value="max_km">Km</option>
        </select>
        <button class="sort-button" @click="ascending = !ascending">
          <i v-if="ascending">↑</i>
          <i v-else>↓</i>
        </button>
      </div>
    </div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching cars.</p>
    <div v-else class="card-wrapper">
      <div v-for="car in filteredCars" :key="car.id" class="card">
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

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Buscar',
  data() {
    const data: {
      cars: string[]
      isModalVisible: boolean
      selectedCar: string
      searchValue: string
      sortBy: string
      ascending: boolean
    } = {
      cars: [],
      isModalVisible: false,
      selectedCar: '',
      searchValue: '',
      sortBy: 'max_price',
      ascending: true,
    }
    return data
  },
  async fetch() {
    this.cars = await fetch(
      'https://us-central1-spotz-prod.cloudfunctions.net/function-sell-my-car/announcements'
    )
      .then((res) => res.json())
      .catch((err) => err.message)
  },
  computed: {
    filteredCars(): string[] {
      let carName = this.cars.cars

      if (this.searchValue !== '' && this.searchValue) {
        carName = carName.filter((item: any) => {
          return item.name
            .toUpperCase()
            .includes(this.searchValue.toUpperCase())
        })
      }

      carName = carName.sort(
        (
          max: { price: number; km: number },
          min: { price: number; km: number }
        ) => {
          if (this.sortBy === 'max_price') {
            const priceMax = max.price
            const priceMin = min.price

            return priceMin - priceMax
          } else if (this.sortBy === 'max_km') {
            const kmMax = max.km
            const kmMin = min.km

            return kmMin - kmMax
          }

          return carName
        }
      )

      if (!this.ascending) {
        carName.reverse()
      }

      return carName
    },
  },
  methods: {
    showModal(item: string) {
      this.isModalVisible = true
      this.selectedCar = item
    },
    closeModal(): void {
      this.isModalVisible = false
    },
  },
})
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

.buscar-wrapper .filtros
  display: flex
  justify-content: flex-end
  align-items: center
  flex-flow: column
  width: 100%
  margin: 0 auto
  max-width: 900px
  padding: 20px 40px

.buscar-wrapper .filtros-wrapper
  padding-top: 10px

.buscar-wrapper .filtros-wrapper input
  border: 1px solid main.$color-lightGray
  padding: 10px

.buscar-wrapper .filtros-wrapper select
  border: 1px solid main.$color-lightGray
  padding: 9px

.buscar-wrapper .filtros-wrapper button
  border: 1px solid main.$color-lightGray
  padding: 10px

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

.sort-button
  background-color: rgba(0,0,0,0)
  border: none
  // height: 50px
  height: 100%
  width: 50px
  &:hover
    background-color: rgba(0,0,0, 0.2)
    cursor: pointer

@media (max-width: 768px)
  .buscar-wrapper .filtros
    justify-content: center
    align-items: center
    flex-flow: column

  .buscar-wrapper .filtros-wrapper
    display: flex
    justify-content: center
    align-items: flex-start
    flex-flow: column

  .buscar-wrapper .filtros-wrapper input
    width: 100%
    margin-bottom: 10px

  .buscar-wrapper .filtros-wrapper select
    width: 100%
    margin-bottom: 10px

  .buscar-wrapper .filtros-wrapper button
    width: 100%
</style>
