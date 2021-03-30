<template>
  <form name="contact" action="" method="post">
    <label class="form-label" for="name"> Nome: </label>
    <input id="name" class="form-field" name="name" />
    <label class="form-label" for="cpf"> CPF: </label>
    <input id="cpf" class="form-field" name="email" />
    <label class="form-label" for="email"> Email: </label>
    <input id="email" class="form-field" name="email" />
    <label class="form-label" for="phone"> Celular: </label>
    <input id="phone" class="form-field" name="phone" />
    <button class="form-button" type="submit">Enviar</button>
  </form>
</template>

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
</style>
