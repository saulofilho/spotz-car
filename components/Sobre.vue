<template>
  <div class="sobre-wrapper">
    <p class="title">Sobre</p>
    <p class="text-sobre">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ultrices vitae auctor
      eu augue ut lectus arcu bibendum at. Quis ipsum suspendisse ultrices
      gravida dictum fusce. Vitae turpis massa sed elementum tempus egestas sed
      sed risus. Ac feugiat sed lectus vestibulum. Hendrerit dolor magna eget
      est lorem ipsum dolor sit amet. Ut etiam sit amet nisl. Leo duis ut diam
      quam nulla porttitor. Elit duis tristique sollicitudin nibh. Diam quam
      nulla porttitor massa id. Vitae elementum curabitur vitae nunc sed velit
      dignissim. Erat pellentesque adipiscing commodo elit at imperdiet dui
      accumsan sit.
      <br />
      <br />
      Volutpat blandit aliquam etiam erat velit. Rhoncus dolor purus non enim
      praesent elementum facilisis leo. Nec ultrices dui sapien eget mi proin
      sed. Magna fermentum iaculis eu non diam. Et pharetra pharetra massa massa
      ultricies mi quis hendrerit dolor. Nisl purus in mollis nunc sed id semper
      risus in. Hac habitasse platea dictumst vestibulum. Dignissim sodales ut
      eu sem integer vitae justo eget magna. Pharetra vel turpis nunc eget lorem
      dolor sed. Orci ac auctor augue mauris augue neque gravida. Elementum
      sagittis vitae et leo duis. Elit ullamcorper dignissim cras tincidunt
      lobortis.
      <br />
      <br />
      Ultrices in iaculis nunc sed augue lacus viverra vitae. Blandit turpis
      cursus in hac habitasse platea dictumst quisque. Sollicitudin aliquam
      ultrices sagittis orci a scelerisque purus. Eu nisl nunc mi ipsum faucibus
      vitae aliquet. Facilisis gravida neque convallis a cras semper auctor
      neque vitae. Vitae semper quis lectus nulla. Eleifend mi in nulla posuere
      sollicitudin aliquam ultrices. Nec feugiat nisl pretium fusce id velit ut
      tortor pretium. Vitae justo eget magna fermentum iaculis eu non. Enim
      praesent elementum facilisis leo vel fringilla est ullamcorper. Aliquam
      purus sit amet luctus venenatis lectus. Lacus sed viverra tellus in hac
      habitasse platea. Diam quis enim lobortis scelerisque. Dignissim convallis
      aenean et tortor at risus viverra. Ultricies mi eget mauris pharetra et
      ultrices neque ornare. In dictum non consectetur a erat nam at. Amet
      volutpat consequat mauris nunc congue. Varius duis at consectetur lorem
      donec massa.
      <br />
      <br />
      Nisi vitae suscipit tellus mauris a diam. Volutpat lacus laoreet non
      curabitur gravida arcu ac tortor dignissim. Augue mauris augue neque
      gravida in fermentum et sollicitudin ac. At elementum eu facilisis sed
      odio morbi. Purus non enim praesent elementum facilisis leo vel fringilla
      est. A diam sollicitudin tempor id eu nisl nunc. Ornare quam viverra orci
      sagittis eu volutpat odio facilisis. Arcu felis bibendum ut tristique et
      egestas quis ipsum. Lobortis elementum nibh tellus molestie nunc non
      blandit massa enim. Sit amet facilisis magna etiam tempor orci eu. Viverra
      maecenas accumsan lacus vel facilisis volutpat est. Massa sed elementum
      tempus egestas sed sed risus pretium quam. Integer feugiat scelerisque
      varius morbi enim. Vitae congue eu consequat ac felis donec. Morbi blandit
      cursus risus at. Iaculis at erat pellentesque adipiscing commodo elit.
      Eros donec ac odio tempor orci. Adipiscing tristique risus nec feugiat.
      Pellentesque sit amet porttitor eget dolor morbi non arcu risus.
    </p>
    <div class="person-wrapper container">
      <div class="item">
        <div class="img-wrapper">
          <img src="../assets/images/dog-boss1.jpg" alt="" />
        </div>
        <div class="cargos-wrapper">
          <p class="name">
            <strong> The Dog </strong>
          </p>
          <p class="cargo">CTO</p>
        </div>
      </div>
      <div class="item">
        <div class="img-wrapper">
          <img src="../assets/images/cat-boss1.jpg" alt="" />
        </div>
        <div class="cargos-wrapper">
          <p class="name">
            <strong> The Cat </strong>
          </p>
          <p class="cargo">CCO</p>
        </div>
      </div>
      <div class="item">
        <div class="img-wrapper">
          <img src="../assets/images/dog-boss2.jpg" alt="" />
        </div>
        <div class="cargos-wrapper">
          <p class="name">
            <strong> The Other Dog </strong>
          </p>
          <p class="cargo">CEO</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@use '/assets/scss/main'

.sobre-wrapper
  margin: 0 auto
  height: auto
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  flex-flow: column
  padding: 50px 0

.sobre-wrapper .person-wrapper
  display: flex
  justify-content: space-evenly
  align-items: center
  flex-flow: row
  width: 100%

.sobre-wrapper .item
  display: flex
  justify-content: center
  align-items: center
  flex-flow: column
  text-align: center
  color: main.$color-gray

.sobre-wrapper .img-wrapper
  border-radius: 50%
  width: 80px
  height: 80px

.sobre-wrapper .img-wrapper img
  border-radius: 50%
  width: 80px
  height: 80px
  object-fit: cover
  border: 2px solid main.$color-purple

.sobre-wrapper .text-sobre
  font-weight: normal
  font-size: 1rem
  color: main.$color-gray
  width: 100%
  height: auto
  margin: 0 auto
  max-width: 900px
  padding: 0 40px

@media (max-width: 768px)
  .sobre-wrapper .person-wrapper
    flex-flow: column
  .sobre-wrapper .person-wrapper .item
    padding-bottom: 20px
</style>
