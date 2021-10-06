<template>
  <q-layout class="bg-black">
    <q-header flat class="NS_nav">
      <q-toolbar class="header-container">
        <RootNav />
        <!-- <SearchNav /> -->
        <LandingNav />
        <div class="subscribed-section">
          <subscribe placeholder="Enter Email" isHeader="true" />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>
<script>
import RootNav from "components/nav/RootNav";
import LandingNav from "components/nav/LandingNav";
import SearchNav from "components/nav/SearchNav";
import Footer from "components/footer/Footer";
import Subscribe from "components/Subscribe.vue";

export default {
  name: "Landing",
  components: {
    RootNav,
    SearchNav,
    LandingNav,
    Footer,
    Subscribe
  }
};
</script>
<style scoped>
.NS_nav__site-links {
  min-width: 35%;
}

@media screen and (max-width: 1260px) {
  .NS_nav__site-links {
    min-width: 45%;
  }
}
</style>
