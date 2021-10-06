<template>
  <div
    class="text-white row flex-center"
    :style="{
      'background-image': `url(${bgImage})`,
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'min-height': '100vh',
      width: '100%',
      position: 'relative',
      margin: 0,
      padding: 0
    }"
  >
    <div class="col-12">
      <div class="NS_layout__section">
        <div class="NS_layout__content">
          <div class="NS_typo__large-headline">
            <h1 class="">
              The Best Data on Collectibles,<br />All In One Place
            </h1>
            <p class="">
              We make it super easy to track prices, compare items, and find
              crucial insights on collectibles.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$q.screen.gt.xs" class="col-12">
      <div class="NS_layout__section">
        <div class="row flex-center">
          <div
            class="col-lg-4 col-md-4 col-sm-4 col-xs-12"
            v-for="(info, index) in infoList"
            :key="info.tag + index + 'image'"
          >
            <!-- <div class="NS_layout__content"> -->
            <img class="NS_img__small" :src="info.image" />
            <!-- </div> -->
          </div>
        </div>
        <div class="row  flex-center">
          <div
            class="col-lg-4 col-md-4 col-sm-4 col-xs-12"
            v-for="(info, index) in infoList"
            :key="info.tag + index + 'title'"
          >
            <div class="NS_typo__regular-headline">
              <h2 class="text-center">{{ info.title }}</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-md-4 col-sm-4 col-xs-12"
            v-for="(info, index) in infoList"
            :key="info.tag + index + 'text'"
          >
            <div class="NS_layout__content">
              <div class="NS_typo__regular-headline">
                <p>{{ info.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row flex-center">
          <div
            class="col-lg-4 col-md-4 col-sm-4 col-xs-12"
            v-for="(info, index) in infoList"
            :key="info.tag + index + 'button'"
          >
            <div class="NS_layout__content">
              <div class="NS_layout__input-field">
                <q-btn
                  square
                  label="Sign Up"
                  :ripple="false"
                  color="accent"
                  class="NS_input__button"
                  style="width: 100%"
                  @click="$router.push({ path: '/', hash: '#sign-up' })"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$q.screen.lt.sm" class="row flex-center margin-bottom-50">
      <div
        class="col-lg-4 col-md-4 col-sm-4 col-xs-12"
        v-for="info in infoList"
        :key="info.tag"
      >
        <div class="">
          <div class="NS_layout__section">
            <div class="NS_layout__content">
              <img class="NS_img__small" :src="info.image" />
              <div class="NS_typo__regular-headline">
                <h2 class="text-center">{{ info.title }}</h2>
                <p>{{ info.description }}</p>
              </div>
            </div>
            <div class="NS_layout__input-row">
              <q-btn
                square
                label="Sign Up"
                :ripple="false"
                color="accent"
                class="NS_input__button"
                style="width: 100%"
                @click="$router.push({ path: '/', hash: '#sign-up' })"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "components/ButtonPrimary";

export default {
  name: "ServiceInfo",
  components: {
    ButtonPrimary
  },
  data() {
    return {
      bgImage: require("../../assets/grid-background.svg"),
      infoList: [
        {
          tag: "compare-price",
          image: require("../../assets/compare-price-icon.svg"),
          title: "Compare Price",
          description:
            "Find up-to-date, accurate information that saves you time when researching price."
        },
        {
          tag: "monitor-collectibles",
          image: require("../../assets/monitor-icon.svg"),
          title: "Monitor Collectibles",
          description:
            "Use price alerts and tracking tools to stay up-to-date on the things you love."
        },
        {
          tag: "news-and-analysis",
          image: require("../../assets/news-analysis-icon.svg"),
          image_height: "",
          title: "News & Analysis",
          description:
            "Keep updated on the latest releases, drop dates, industry news and analysis."
        }
      ]
    };
  },
  computed: {}
};
</script>
<style scoped>
.margin-bottom-50 {
  margin-bottom: 50px;
}
</style>
