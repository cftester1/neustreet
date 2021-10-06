<template>
  <div class="subscribe-wrapper">
    <div class="subscribe-content">
      <div class="row flex-center" style="z-index: 3">
        <div class="col-lg-12">
          <div class="inner-section">
            <div class="NS_typo__regular-headline">
              <h2 class="text-center">Subscribe To The Neustreet Journal</h2>
              <p class="text-center">
                Your number one resource for staying updated on the exciting
                world of collectibles:<br />
                <span class="subscribe-item-title">Sneakers</span>,
                <span class="subscribe-item-title">Trading Cards</span>,
                <span class="subscribe-item-title">NFTs</span>, and much more.
                Expect weekly news, analysis, drops, interviews, and more on the
                modern collectiverse.
              </p>
            </div>
            <div class="subscribe-button-wrap">
              <subscribe placeholder="Enter Email" isBottom="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-title">
      Artist Credit: Spongebob, 2020 by Louis de Guzman
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "components/ButtonPrimary";
import Subscribe from "components/Subscribe.vue";
export default {
  name: "MainSection",
  components: {
    ButtonPrimary,
    Subscribe
  }
};
</script>
<style lang="scss" scoped>
.subscribe-wrapper {
  background-image: url("../../assets/sponge-bob.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
}

h2 {
  margin-top: 0 !important ;
}

.subscribe-content {
  padding: 70px;
  width: 75vw;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  @media screen and (max-width: 700px) {
    padding: 30px;
  }
}

.subscribe-item-title {
  font-weight: 800;
  font-style: normal;
}

.subscribe-button-wrap {
  width: 100%;

  .NS_layout__input-row {
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 1439px) {
      flex-direction: column;
      align-items: center;
    }
  }
}

.bottom-title {
  color: $white;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 80%);
  font-family: "montserrat-extra-bold";
  font-size: 12.5px;
  align-self: end;
  position: relative;
  top: 5vh;
  right: 4vw;
}
</style>
