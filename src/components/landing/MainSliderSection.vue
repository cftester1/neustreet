<template>
  <div class="row flex-center">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="NS_layout__content">
        <carousel-3d
          class="carousel-container"
          :autoplay="true"
          :autoplay-timeout="5000"
          :display="1"
          :width="carouselWidth"
          :controlsVisible="true"
          id="page-slider"
        >
          <slide :index="0">
            <div class="text-container text-white">
              <div class="NS_layout__content">
                <div class="NS_typo__large-headline">
                  <h1>Welcome To The New World Of Collectibles</h1>
                  <p>
                    Neustreet is your number one resource for culture, media,
                    and data on collectibles -- sneakers, trading cards, and
                    NFTs.
                  </p>
                </div>
              </div>
            </div>
            <div class="img-container">
              <img src="../../assets/card-collage-2.jpg" />
            </div>
          </slide>
          <slide :index="1">
            <div class="text-container text-white">
              <div class="NS_layout__content">
                <div class="NS_typo__large-headline">
                  <h1>Introducing The Neustreet Journal</h1>
                  <p>
                    Your guide to the modern collectiverse! Stay updated on the
                    exciting world of collectibles - sneakers, trading cards,
                    NFTS, and more.
                  </p>
                  <p>
                    Expect news, analysis, interviews, and anything else to show
                    you how these worlds collide.
                  </p>
                </div>
              </div>
            </div>
            <div class="img-container">
              <img src="../../assets/frame.svg" />
            </div>
          </slide>
          <slide :index="2">
            <div class="text-container text-white">
              <div class="NS_layout__content">
                <div class="NS_typo__large-headline">
                  <h1>Listen to Neustreet X</h1>
                  <p>
                    Neustreet X is a podcast where we talk to the most
                    interesting people in the collectibles space across
                    sneakers, sports, trading cards, NFTs, fashion, art, and
                    more.
                  </p>
                  <p>
                    Listen to stories about their work, their passions and how
                    collecting is part of their life.
                  </p>
                </div>
              </div>
            </div>
            <div class="img-container">
              <img src="../../assets/slide3.jpg" />
            </div>
          </slide>
        </carousel-3d>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "components/ButtonPrimary";
import Subscribe from "components/Subscribe.vue";
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "MainSection",
  components: {
    ButtonPrimary,
    Subscribe,
    Carousel3d,
    Slide
  },
  data() {
    return {
      carouselWidth: 1024
    };
  },
  methods: {
    handleResize() {
      this.carouselWidth = Number(
        document.getElementById("page-slider").clientWidth
      );
    }
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
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
  height: auto !important;
  width: 100% !important;
  display: flex;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
}

.carousel-container {
  height: 65vh !important;

  @media screen and (max-width: 700px) {
    height: 95vh !important;
  }

  .carousel-3d-slider {
    width: 100% !important;
    height: auto !important;
  }
}

.text-container {
  width: 50%;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
}
.img-container {
  width: 50%;
  padding: 0% 7%;

  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 0;
  }
}
</style>
