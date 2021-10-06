<template>
  <q-page>
    <MainSliderSection class="section " id="sign-up" />
    <ArticleSection class="section" id="neustreet-article" />
    <NeustreetXSection class="section" id="neustreet-x" />
    <JournalSubscription lass="section" id="neujournal-signup" />
    <!-- <MainSection class="section " id="sign-up" /> -->
    <!-- <MediaSection class="section" id="neustreet-feed" /> -->
    <!-- <ServiceInfo class="section" id="what-we-do" /> -->
    <!-- <About class="section" id="who-we-are" /> -->
  </q-page>
</template>

<script>
import MainSliderSection from "components/landing/MainSliderSection.vue";
import ArticleSection from "components/landing/ArticleSection.vue";
import NeustreetXSection from "components/landing/NeustreetXSection.vue";
//import MainSection from "components/landing/MainSection.vue";
import ServiceInfo from "components/landing/ServiceInfo.vue";
import About from "components/landing/About.vue";
import JournalSubscription from "src/components/landing/JournalSubscription.vue";
import MediaSection from "components/landing/MediaSection.vue";

export default {
  name: "Landing",
  components: {
    MainSliderSection,
    ArticleSection,
    NeustreetXSection,
    // MainSection,
    ServiceInfo,
    About,
    JournalSubscription,
    MediaSection
  },
  mounted() {
    document.addEventListener("scroll", this.scrollFunction);
  },
  destroyed() {
    document.removeEventListener("scroll", this.scrollFunction);
  },
  methods: {
    scrollFunction() {
      var hash = location.hash.replace("#", "");
      if (hash != "") {
        if (this.isInViewport(document.getElementById("sign-up"))) {
          location.hash = "";
        } else if (
          this.isInViewport(document.getElementById("neujournal-signup"))
        ) {
          location.hash = "footer-links";
        }
      }
    },
    isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  }
};
</script>
