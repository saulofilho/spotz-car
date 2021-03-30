<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header"> Formulário de contato</slot>
        <button type="button" class="btn-close" @click="close">x</button>
      </header>
      <section class="modal-body">
        <slot name="body">
          <Form :car-id="carId" />
        </slot>
      </section>
      <footer class="modal-footer">
        <button type="button" @click="close">Cancelar</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['carId'],
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="sass">
@use '/assets/scss/main'

.modal-backdrop
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  background-color: rgba(0, 0, 0, 0.7)
  display: flex
  justify-content: center
  align-items: center
  z-index: 999

.modal
  background: main.$color-white
  box-shadow: 2px 2px 20px 1px
  overflow-x: auto
  display: flex
  flex-direction: column
  padding: 20px
  margin: 10%
  width: 100%
  height: auto

.modal-header
  padding: 20px
  display: flex

.modal-footer
  padding: 0 20px 20px
  display: flex

.modal-header
  position: relative
  color: main.$color-gray
  justify-content: space-between

.modal-footer
  flex-direction: column
  justify-content: flex-end

.modal-body
  position: relative
  padding: 20px

.btn-close
  position: absolute
  top: 0
  right: 0
  border: none
  font-size: 20px
  padding: 10px
  cursor: pointer
  font-weight: bold
  color: main.$color-gray
  background: transparent

.modal-footer button
  width: 100%
  background: main.$color-orange
  border-radius: 5px
  color: main.$color-white
  padding: 10px 0

.modal-footer button:hover
  width: 100%
  background: main.$color-purple
  border-radius: 5px
  color: main.$color-gray
</style>
