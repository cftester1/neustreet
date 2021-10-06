<template>
  <div class="row flex-center">
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div class="NS_layout__section text-white" style="">
        <div class="NS_layout__content">
          <div class="NS_typo__large-headline">
            <h1>Your Trusted Home for Collectibles</h1>
            <p>
              Data and research tools to help you make decisions on your
              favorite collectibles - Sneakers, Trading Cards, and NFTs.
            </p>
            <subscribe placeholder="Enter Email" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div class="NS_layout__section">
        <div class="NS_layout__content">
          <carousel-3d
            :autoplay="true"
            :autoplay-timeout="5000"
            :inverse-scaling="450"
            :space="420"
            :height="475"
            :display="3"
          >
            <slide :index="0">
              <img src="../../assets/landing_nike_air_force.png" />
            </slide>
            <slide :index="1">
              <img class="" src="../../assets/landing_michael_jordan.png" />
            </slide>
            <slide :index="2">
              <img class="" src="../../assets/landing_charizard.png" />
            </slide>
            <slide :index="3">
              <img class="" src="../../assets/landing_crypto_punk.png" />
            </slide>
            <slide :index="4">
              <img class="" src="../../assets/landing_mickey_mantle.png" />
            </slide>
          </carousel-3d>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "components/ButtonPrimary";
import Subscribe from "components/Subscribe.vue";
import { Carousel3d, Slide, startAutoplay } from "vue-carousel-3d";

export default {
  name: "MainSection",
  components: {
    ButtonPrimary,
    Subscribe,
    Carousel3d,
    Slide
  }
};
</script>

<style lang="scss" scoped>
.carousel-3d-slide {
  border-color: transparent;
  background-color: transparent;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 0px;
  padding-bottom: 0px;
  height: 100%;
  width: auto;
}
</style>
