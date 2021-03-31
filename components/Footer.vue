<template>
  <footer>
    <div class="border-section"></div>
    <div class="footer-wrapper container">
      <div class="logo-wrapper">
        <img src="../assets/images/logo.png" alt="logo of spotz car" />
        <p>
          Copyright © 2021 Spotz
          <br />
          Todos os direitos reservados.
        </p>
      </div>
      <div class="infos-footer-wrapper">
        <div class="col-wrapper">
          <p class="col-title">Nossas Redes Sociais</p>
          <a href="https://www.instagram.com/spotz.co/">
            <img src="../assets/images/ig-icon.png" alt="logo of spotz car" />
          </a>
          <a href="https://www.facebook.com/spotz.co">
            <img src="../assets/images/fb-icon.png" alt="logo of spotz car" />
          </a>
        </div>
        <div class="col-wrapper">
          <p class="col-title">Avisos Legais</p>
          <a href="https://www.spotz.co/"> Termos de uso </a>
          <a href="https://www.spotz.co/"> Política de Privacidade </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="sass">
@use '/assets/scss/main'

footer
  width: 100%
  height: auto

footer .border-section
  border-top: 2px solid main.$color-purple
  max-width: 900px
  padding: 20px 40px
  margin: 0 auto
  opacity: 0.4

footer .footer-wrapper
  height: auto
  width: 100%
  display: flex
  justify-content: center
  align-items: flex-start
  flex-flow: row

footer .logo-wrapper
  height: auto
  width: 100%
  display: flex
  justify-content: flex-start
  align-items: flex-start
  flex-flow: column

footer .logo-wrapper img
  height: 100%
  width: 80px
  padding-bottom: 10px

footer .logo-wrapper p
  font-size: 12px
  color: main.$color-gray

footer .infos-footer-wrapper
  display: flex
  justify-content: flex-start
  align-items: flex-start
  flex-flow: row
  width: 100%
  height: auto

footer .col-wrapper
  display: flex
  justify-content: flex-start
  align-items: flex-start
  flex-flow: column
  width: 100%
  height: auto

footer .col-wrapper a
  font-size: 14px
  color: main.$color-orange
  padding-bottom: 10px

footer .col-wrapper a:hover
  color: main.$color-purple

footer .col-title
  font-weight: bolder
  padding-bottom: 20px
  height: auto
  font-size: 14px
  color: main.$color-gray

@media (max-width: 768px)
  footer .footer-wrapper
    flex-flow: column
  footer .infos-footer-wrapper
    flex-flow: column
  footer .col-wrapper
    padding-top: 30px
</style>
