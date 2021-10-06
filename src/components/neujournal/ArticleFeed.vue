<template>
  <q-card class="card-wrap">
    <q-card-section vertical align="center">
      <q-scroll-area
        :visible="true"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        :style="{ height: '700px' }"
      >
        <q-virtual-scroll :items="articles.header">
          <template v-slot="{ item, index }">
            <q-card
              clickable
              @click="$router.push(`/content/${item.id}`)"
              v-ripple
              class="cursor-pointer q-hoverable card"
              :key="index"
            >
              <div class="NS_feed__headline">
                <h3>{{ item.subject }}</h3>
              </div>
              <div class="NS_feed__content">
                <div class="row flex-center">
                  <div class="col-lg-4 col-md-12 col-sm-4 col-xs-12">
                    <img :src="item.image" />
                  </div>
                  <div class="col-lg-8 col-md-12 col-sm-8 col-xs-12">
                    <vue-markdown class="headings">{{
                      item.details
                    }}</vue-markdown>
                  </div>
                </div>
              </div>
              <q-item class="NS_feed__footer">
                <q-item-section class="large-caption" align="left"
                  >🌟 {{ item.title }}</q-item-section
                >
                <q-space />
                <q-item-section class="small-caption" side
                  ><q-item-label>{{ item.date }}</q-item-label></q-item-section
                >
              </q-item>
            </q-card>
          </template>
        </q-virtual-scroll>
      </q-scroll-area>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
import VueMarkdown from "vue-markdown";

export default {
  name: "ArticleFeed",
  components: {
    VueMarkdown
  },
  data() {
    return {
      contentFeed: [],
      thumbStyle: {
        right: "5px",
        borderRadius: "10px",
        backgroundColor: "#212121",
        width: "8px"
      },
      barStyle: {
        right: "2px",
        backgroundColor: "#E0E0E0",
        width: "14px",
        marginTop: "-3.5px",
        marginBottom: "-3.5px",
        paddingTop: "3.5px",
        paddingBottom: "3.5px"
      }
    };
  },
  computed: {
    ...mapState("content", ["articles"])
  },
  methods: {
    ...mapActions("content", ["getArticles"]),
    handleResize() {
      this.barStyle = window.matchMedia("(max-width: 1024px)").matches
        ? {
            display: "none"
          }
        : {
            right: "2px",
            backgroundColor: "#E0E0E0",
            width: "14px",
            marginTop: "-3.5px",
            marginBottom: "-3.5px",
            paddingTop: "3.5px",
            paddingBottom: "3.5px"
          };
    }
  },

  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    //this.getArticles();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style lang="scss" scoped>
.NS_feed__content {
  img {
    @media screen and (max-width: 1439px) {
      object-fit: contain !important;
      width: 100%;
      max-height: 50vh !important;
    }
  }
}
.NS_feed__headline {
  h3 {
    margin-top: 0px !important;
  }
}
.card-wrap {
  background-color: transparent;
  border: none;
  box-shadow: none;
}
.card {
  padding: 30px;
  background: #2a2c31;
  color: $cool-gray;
  margin-left: 24px;
  margin-right: 24px;
  border-radius: 8px;
  &:not(:first-child) {
    margin-top: 30px;
  }
  @media screen and (max-width: 700px) {
    margin-left: 0;
    margin-right: 0;
  }
}

.q-scrollarea__bar {
  display: none;
  @media screen and (max-width: 700px) {
    display: none;
  }
}
.headings {
  text-align: left;
  padding: 0px 10px 0px 0px;
}
.NS_feed__footer {
  .large-caption {
    @media screen and (max-width: 700px) {
      font-size: 20px;
    }
  }
  .small-caption {
    @media screen and (max-width: 700px) {
      font-size: 16px;
    }
  }
}
.q-item {
  padding: 0;
}
</style>
