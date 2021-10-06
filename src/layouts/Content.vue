<template>
  <q-layout class="bg-black">
    <q-header flat class="NS_nav">
      <q-toolbar class="header-container">
        <RootNav />
        <LandingNav />
        <div class="subscribed-section">
          <subscribe placeholder="Enter Email" isHeader="true" />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container class="page-content">
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import RootNav from "components/nav/RootNav";
import Subscribe from "components/Subscribe.vue";
import LandingNav from "components/nav/LandingNav";
import Footer from "components/footer/Footer";

export default {
  name: "Content",
  components: {
    RootNav,
    Subscribe,
    LandingNav,
    Footer
  }
};
</script>

<style scoped>
.page-content {
  padding: 10% 5% 5% !important;
}

@media screen and (max-width: 800px) {
  .page-content {
    padding: 30% 5% 5% !important;
  }
}

.NS_nav__site-links {
  min-width: 35%;
}

@media screen and (max-width: 1260px) {
  .NS_nav__site-links {
    min-width: 45%;
  }
}
</style>
