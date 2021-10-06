<template>
  <div class="about row flex-center" style="">
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div class="NS_layout__section">
        <div
          class="NS_layout__content"
          style="display: flex; align-items: center;"
        >
          <div class="NS_typo__large-headline">
            <h1>Built By Collectors,<br />For Collectors</h1>
            <p>
              Data and research tools to help you make decisions on your
              favorite collectibles - Sneakers, Trading Cards, and NFTs.
            </p>
            <p>We love collectibles as much as you do.</p>
            <p>
              So we’re building a home for the next generation of collectibles
              and culture.
            </p>
            <p>
              Whether you’re researching, monitoring, buying, or selling, we
              make the journey easier for you.
            </p>
            <p>So you can keep collecting. 🚀</p>
            <q-btn
              square
              label="Sign Up"
              :ripple="false"
              color="accent"
              class="NS_input__button"
              @click="$router.push({ path: '/', hash: '#sign-up' })"
              style="margin-bottom: 24px"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div class="about-video-wrapper">
        <div class="video-title">
          Cybersneaker (RTFKT, 2020)
        </div>
        <video
          src="https://ipfs.pixura.io/ipfs/QmanxzF54mA98Wjjz5yR7nPveUvBwooKibKzUvavagKrFL/cybersneaker_Display_hq.mp4"
          class="video-player"
          style=""
          autoplay
          loop
          muted
        ></video>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "components/ButtonPrimary";

export default {
  name: "MainSection",
  components: {
    ButtonPrimary
  }
};
</script>

<style lang="scss" scoped>
.about-video-wrapper {
  width: 100%;
  background: #f1f1f1;
  position: relative;
  object-fit: scale-down;
}
.video-player {
  object-fit: scale-down;
  height: 100%;
  width: 100%;
}
.video-title {
  top: 88%;
  position: absolute;
  color: white;
  text-shadow: rgb(0 0 0 / 80%) 2px 2px 4px;
  font-family: montserrat-extra-bold;
  font-size: 15.5px;
  right: 10%;
}
.about {
  background: $cool-gray;
  color: #2a2c31;
}
.NS_layout__section {
  @media screen and (max-width: 1120px) and (min-width: 1025px) {
    h1 {
      font-size: 38px;
      line-height: 40px;
    }
    p {
      font-size: 20px;
      line-height: 30.4px;
    }
  }
}
</style>
