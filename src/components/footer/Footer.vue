ß<template>
  <footer id="footer">
    <div class="main-content">
      <div class="left box">
        <div class="NS_footer__logo">
          <img src="../../assets/logo.svg" id="logo" />
        </div>
        <div class="content">
          <p>
            Neustreet is the world's trusted destination for media, data, and
            analytics on collectibles. Research, track, and monitor the markets
            for sneakers, trading cards and much more.
          </p>
          <div class="social">
            <q-btn
              type="a"
              href="https://twitter.com/realneustreet"
              target="_blank"
              square
              flat
            >
              <img src="../../assets/twitter-icon.svg" height="43" />
            </q-btn>
            <q-btn
              type="a"
              href="https://instagram.com/realneustreet "
              target="_blank"
              square
              flat
            >
              <img src="../../assets/instagram-icon.svg" height="43" />
            </q-btn>
            <q-btn
              type="a"
              href="https://www.tiktok.com/@neustreet"
              target="_blank"
              square
              flat
            >
              <img src="../../assets/tiktok-icon.svg" height="43" />
            </q-btn>
          </div>
        </div>
      </div>

      <div class="center box">
        <h2>Menu</h2>
        <div class="content">
          <div class="NS_footer__links">
            <ul>
              <li>
                <router-link
                  class="menu-links"
                  :to="{ path: '/', hash: '#neustreet-article' }"
                  >The Neustreet Journal</router-link
                >
              </li>
              <li>
                <router-link
                  class="menu-links"
                  :to="{ path: '/', hash: '#neustreet-x' }"
                  >Neustreet X</router-link
                >
              </li>
              <li>
                <router-link class="menu-links" :to="{ path: '/PrivacyPolicy' }"
                  >Privacy Policy</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="right box">
        <h2>Join Our Newsletter</h2>
        <div class="content">
          <subscribe placeholder="Enter Email" isFooter="true" />
        </div>
      </div>
    </div>
    <q-separator inset />
    <div class="bottom">
      <center>
        <span class="far fa-copyright"></span><span> 2021 Neustreet Inc.</span>
      </center>
    </div>
  </footer>
</template>

<script>
import LogoSVG from "components/LogoSVG";
import Subscribe from "components/Subscribe.vue";
export default {
  name: "Footer",
  components: {
    LogoSVG,
    Subscribe
  }
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  background: $white;
  color: $black;
  overflow: hidden;
  padding: 0px 4vw;
}
.main-content {
  display: flex;
}
.main-content .box {
  flex-basis: 50%;
  padding: 20px 50px 0 50px;
}
.box h2 {
  font-size: 1.125rem;
  line-height: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
}
.box .content {
  position: relative;
}
.left .content p {
  text-align: justify;
}
.left .content .social {
  margin: 20px 0;
  @media screen and (max-width: 1024px) {
    margin: 20px 0 0 0;
  }
}
.left .content .social a {
  padding: 0 2px;
}

.center .content .fas:hover {
  background: $deep-pink;
}

.bottom center {
  padding: 30px;
  font-size: 0.9375rem;
  background: $white;
}
.bottom center span {
  color: $cool-gray;
}

@media screen and (max-width: 1024px) {
  footer {
    position: relative;
    bottom: 0px;
    text-align: center;
  }
  .main-content {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .main-content .box {
    margin: 5px 0;
  }

  .box .content:after {
    left: 42%;
  }
}
</style>
