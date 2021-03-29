<template>
  <div class="carousel-wrapper">
    <VueSlickCarousel v-bind="settings">
      <div class="car1"></div>
      <div class="car2"></div>
      <div class="car3"></div>
      <div class="car4"></div>
      <div class="car5"></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
          {
            breakpoint: 440,
            settings: {
              variableWidth: false,
              centerMode: false,
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="sass">
.carousel-wrapper
  height: 100%
  width: 100%
  position: absolute
  z-index: -9
  opacity: 0.5

.carousel-wrapper .slick-slider
  height: 100%

.carousel-wrapper .slick-list
  height: 100%

.carousel-wrapper .slick-track
  height: 100%

.carousel-wrapper .slick-slide
  background: blue
  height: 100%

.carousel-wrapper .car1
  background: url('./assets/images/bhjcfts4.jpg')
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  height: 100vh
  width: 100%

.carousel-wrapper .car2
  background: url('./assets/images/fghc453d.jpg')
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  height: 100vh
  width: 100%

.carousel-wrapper .car3
  background: url('./assets/images/hghvk.jpg')
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  height: 100vh
  width: 100%

.carousel-wrapper .car4
  background: url('./assets/images/smkaslbmw2.jpg')
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  height: 100vh
  width: 100%

.carousel-wrapper .car5
  background: url('./assets/images/go0866gnj.jpg')
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  height: 100vh
  width: 100%
</style>
