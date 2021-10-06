<template>
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="NS_layout__section">
        <div class="NS_layout__content">
          <div class="NS_typo__large-headline text-white">
            <h1>The Neusfeed</h1>
          </div>
          <!-- <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="NS_layout__section media-bg" style="margin-top: 24px">
                    <div class="NS_layout__content">
                        <div class="NS_typo__large-headline">
                            <h1 class="text-center">The Neustreet Journal</h1>
                        </div>
                    </div>
                    <ArticleFeed class="media-bg" />
                </div>
            </div> -->
          <div
            class="col-lg-6 col-md-6 col-sm-12 col-xs-12"
            style="margin-top: 24px"
          >
            <div class="NS_layout__section media-bg">
              <div class="NS_layout__content">
                <div class="NS_typo__large-headline">
                  <h3 class="text-white">Social Media Neusfeed</h3>
                </div>
              </div>
              <q-card flat class="media-bg" style="border: none">
                <q-card-section vertical align="left">
                  <a
                    class="twitter-timeline"
                    href="https://twitter.com/realneustreet"
                    data-width="600"
                    data-height="700"
                    data-theme="dark"
                  >
                  </a>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleFeed from "components/neujournal/ArticleFeed.vue";

export default {
  name: "MediaSection",
  data() {
    return {
      contentFeed: []
    };
  },
  components: {
    ArticleFeed
  },
  mounted() {
    // this.loadContentList()
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://platform.twitter.com/widgets.js"
    );
    recaptchaScript.setAttribute("charset", "utf-8");
    document.head.appendChild(recaptchaScript);
  }
};
</script>

<style lang="scss" scoped>
.media-bg {
  // background-color: #C4C4C4;
  background: black;
  // color: #C4C4C4;
  color: white;
  border-radius: 16px;
}
</style>
