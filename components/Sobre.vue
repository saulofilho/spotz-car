<template>
  <div class="sobre-wrapper">
    <div class="title">
      <p>Sobre</p>
    </div>
    <div class="subtitle">
      <p>buscar no lorem ipsun generator</p>
    </div>
    <div class="person-wrapper">
      <div class="item">
        <div class="img-wrapper">
          <img src="" alt="" />
        </div>
        <div class="cargos-wrapper">
          <p class="name">Nome</p>
          <p class="cargo">Cargo</p>
        </div>
      </div>
      <div class="item">
        <div class="img-wrapper">
          <img src="" alt="" />
        </div>
        <div class="cargos-wrapper">
          <p class="name">Nome</p>
          <p class="cargo">Cargo</p>
        </div>
      </div>
      <div class="item">
        <div class="img-wrapper">
          <img src="" alt="" />
        </div>
        <div class="cargos-wrapper">
          <p class="name">Nome</p>
          <p class="cargo">Cargo</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.sobre-wrapper
  margin: 0 auto
  height: 100vh
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  background: green

.person-wrapper
  display: flex
  justify-content: flex-start
  align-items: center
  flex-flow: row

.item
  display: flex
  justify-content: center
  align-items: center
  flex-flow: column

.img-wrapper
  border-radius: 50%

.img-wrapper img
  width: 100%
</style>
