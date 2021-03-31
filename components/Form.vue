<template>
  <form
    name="contact"
    action="https://us-central1-spotz-prod.cloudfunctions.net/function-sell-my-car/contacts"
    method="post"
    @submit.prevent="checkForm"
  >
    <div v-if="errors.length" class="erros-wrapper">
      <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
    <label class="form-label" for="announcement_id"> Car ID: </label>
    <input
      id="announcement_id"
      :value="announcement_id"
      class="form-field"
      name="announcement_id"
    />
    <label class="form-label" for="name"> Nome: </label>
    <input id="name" v-model="contact.name" class="form-field" name="name" />
    <label class="form-label" for="cpf"> CPF: </label>
    <input
      id="cpf"
      v-model="contact.cpf"
      v-mask="'###.###.###-##'"
      class="form-field"
      name="cpf"
      masked
    />
    <label class="form-label" for="email"> Email: </label>
    <input id="email" v-model="contact.email" class="form-field" name="email" />
    <label class="form-label" for="phone"> Celular: </label>
    <input
      id="phone"
      v-model="contact.phone"
      v-mask="'+55 (##) #####-####'"
      class="form-field"
      name="phone"
    />
    <button class="form-button" type="submit">Enviar</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Form',
  props: {
    carId: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  data() {
    const data: {
      errors: string[]
      contact: {
        name: string
        cpf: string
        email: string
        phone: string
      }
    } = {
      errors: [],
      contact: {
        name: '',
        cpf: '',
        email: '',
        phone: '',
      },
    }
    return data
  },
  computed: {
    announcement_id(): string {
      return this.carId.id
    },
  },
  methods: {
    checkForm(this: any, e: any) {
      if (
        this.announcement_id &&
        this.contact.name &&
        this.contact.cpf &&
        this.contact.email &&
        this.contact.phone
      ) {
        this.$toast.success('Successfully sent.')
        return true
      }

      this.errors = []

      if (!this.announcement_id) {
        this.errors.push('O ID do carro é obrigatório.')
      }
      if (!this.contact.name) {
        this.errors.push('O nome é obrigatório.')
      }
      if (!this.contact.cpf) {
        this.errors.push('O CPF é obrigatório.')
      }
      if (!this.contact.email) {
        this.errors.push('O email é obrigatório.')
      }
      if (!this.contact.phone) {
        this.errors.push('O telefone é obrigatório.')
      }

      this.$toast.error('Something went wrong.')
      e.preventDefault()
    },
  },
})
</script>

<style lang="sass">
@use '/assets/scss/main'

form
  margin: 0 auto
  height: auto
  width: 100%
  display: flex
  justify-content: center
  align-items: flex-start
  flex-flow: column

form button
  width: 100%
  background: main.$color-orange
  border-radius: 5px
  color: main.$color-white
  padding: 10px 0
  margin: 20px 0 0

form button:hover
  width: 100%
  background: main.$color-purple
  border-radius: 5px
  color: main.$color-gray

form input
  margin-bottom: 10px
  border: 1px solid main.$color-lightGray
  width: 100%
  padding: 10px

form .erros-wrapper
  font-size: 12px
  color: main.$color-orange
  padding-bottom: 40px
  display: flex
  justify-content: center
  align-items: center
  flex-flow: column
  width: 100%

form .erros-wrapper ul
  padding-inline-start: unset !important
  padding-left: 0
</style>
