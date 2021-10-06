<template>
  <div class="row flex-center">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="NS_layout__section">
        <div class="NS_layout__content articles">
          <div class="NS_layout__header">
            <div class="NS_typo__large-headline text-white">
              <h1>Neustreet X</h1>
            </div>
            <!-- <div class="NS_typo__large-headline text-white">
              <h3>Explore Neustreet X</h3>
            </div> -->
          </div>
        </div>
      </div>
      <div class="slider-container">
        <q-carousel
          v-model="slide"
          :swipeable="true"
          animated
          arrows
          control-type="regular"
          control-color="black"
          control-text-color="white"
          height="auto"
          transition-prev="slide-right"
          transition-next="slide-left"
        >
          <q-carousel-slide
            v-for="(content, index) in groups"
            :key="index"
            :name="index"
          >
            <div class="post-feed">
              <article
                :class="{ 'post-card-large': index === 0 }"
                class="post-card post tag-getting-started"
                v-for="(item, index) in content"
                :key="item.header.id"
              >
                <router-link
                  class="post-card-image-link"
                  :to="{ path: `/content/${item.header.id}` }"
                >
                  <img
                    class="post-card-image"
                    :src="item.header.image"
                    alt="Start here for a quick overview of everything you need to know"
                    loading="lazy"
                  />
                </router-link>

                <div class="post-card-content">
                  <router-link
                    class="post-card-content-link"
                    :to="{ path: `/content/${item.header.id}` }"
                  >
                    <header class="post-card-header">
                      <div class="post-card-primary-tag">
                        {{ item.tag.name }}
                      </div>
                      <h2 class="post-card-title">
                        {{ item.header.title }}
                      </h2>
                    </header>
                    <section class="post-card-excerpt">
                      <p>
                        {{ item.header.details }}
                      </p>
                    </section>
                  </router-link>

                  <footer class="post-card-meta">
                    <ul class="author-list">
                      <li class="author-list-item">
                        <a href="#neustreet-x" class="static-avatar">
                          <img
                            class="author-profile-image"
                            :src="item.author.profile_image"
                            :alt="item.author.name"
                          />
                        </a>
                      </li>
                    </ul>
                    <div class="post-card-byline-content">
                      <span class="author-name"
                        ><a href="#neustreet-x">{{ item.author.name }}</a></span
                      >
                      <span class="post-card-byline-date"
                        ><time datetime="2021-08-16">{{
                          item.header.date
                        }}</time>
                        <span class="bull">•</span> 2 min read</span
                      >
                    </div>
                  </footer>
                </div>
              </article>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VueMarkdown from "vue-markdown";

export default {
  name: "ArticleSection",
  components: {
    VueMarkdown
  },
  data() {
    return {
      groups: [],
      slide: 0
    };
  },
  computed: {
    ...mapGetters("content", ["postsData"])
  },

  watch: {
    postsData: {
      deep: true,
      handler(posts) {
        this.displayArticle(posts);
      }
    }
  },
  methods: {
    ...mapActions("content", ["getPosts"]),
    displayArticle(posts) {
      const feeds = [...posts.podcasts];
      let chunkSize = 3;
      if (this.$q.screen.width < 700) {
        chunkSize = 1;
      }
      const groups = feeds
        .map((e, i) => {
          return i % chunkSize === 0 ? feeds.slice(i, i + chunkSize) : null;
        })
        .filter(e => {
          return e;
        });

      this.groups = groups;
    }
  },

  mounted() {
    if (this.postsData) this.displayArticle(this.postsData);
  }
};
</script>

<style lang="scss" scoped>
.slider-container {
  padding: 0 2vw 2vw;
  @media screen and (max-width: 850px) {
    padding: 0 2vw 6vw;
  }
}
.q-carousel {
  background: $black;
}
.NS_typo__large-headline {
  h1 {
    line-height: 90px;

    @media screen and (max-width: 900px) {
      line-height: 30px;
    }
  }
}
.post-feed {
  position: relative;
  display: grid;
  grid-gap: 4vmin;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 4vw;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }

  a {
    color: $white;
    text-decoration: none;
  }

  .post-card {
    position: relative;
    flex: 1 1 301px;
    display: flex;
    flex-direction: column;
    min-height: 220px;
    background-size: cover;
    word-break: break-word;

    @media screen and (max-width: 900px) {
      display: flex !important;
      flex-direction: column;
      height: auto !important;
    }
  }

  .post-card-image-link {
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 3px;
  }

  .post-card-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .post-card-title {
    padding: 0.4em 0 0.4em;
    transition: color 0.2s ease-in-out;
  }

  .post-card-excerpt p {
    margin-bottom: 1em;
    font-family: montserrat-semi-bold;
    font-size: 14.5px;
    line-height: 21px;
  }

  .post-card-meta {
    display: flex;
    align-items: center;
    padding: 0;
  }

  .author-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 0 4px;
    padding: 0;
    list-style: none;
  }

  .author-list-item {
    position: relative;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
  }

  .post-card-byline-content {
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    margin: 0 0 0 8px;
    line-height: 1.2em;
  }

  .author-name {
    margin: 0;
    font-family: montserrat-bold;
    font-size: 15px;
    line-height: 21px;
  }

  .post-card-byline-date {
    font-family: montserrat-semi-bold;
    font-size: 12px;
    line-height: 15px;
    color: $text-gray;
    .bull {
      display: inline-block;
      margin: 0 2px;
      opacity: 0.6;
    }
  }
  .post-card-image {
    width: 100%;
    height: 300px !important;
    background: var(--color-lightgrey) no-repeat 50%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .post-card-header {
    margin: 20px 0 0;
    @media screen and (max-width: 900px) {
      margin: 0;
    }
  }

  .post-card-primary-tag {
    font-family: montserrat-bold;
    font-size: 18px;
    line-height: 30px;
    color: $pink;
  }

  .post-card-title {
    margin: 0;
    font-family: montserrat-bold;
    font-style: normal;
    font-weight: 800;
    font-size: 21px;
    line-height: 26px;
    @media screen and (max-width: 900px) {
      line-height: 25x;
    }
  }

  .post-card-large {
    grid-column: 1 / span 2;
    grid-row: 1 / span 3;
    display: grid;
    grid-gap: 4vmin;
    grid-template-columns: 1fr;
    min-height: 280px;
    border-top: 0;

    @media screen and (max-width: 900px) {
      grid-column: 1;
    }

    .post-card-image-link {
      position: relative;
      grid-column: 1 / span 2;
      margin-bottom: 0;
      @media screen and (max-width: 900px) {
        min-height: 224px;
      }
    }

    &:not(.no-image) {
      .post-card-header {
        margin-top: 0;
      }
    }

    .post-card-image {
      position: absolute;
      width: 100%;
      height: 520px !important;

      @media screen and (max-width: 900px) {
        position: relative;
        height: auto !important;
      }
    }
  }

  .post-card-excerpt {
    max-width: 56em;
    color: $text-gray;
  }

  .author-profile-image,
  .avatar-wrapper {
    display: block;
    width: 100%;
    height: 100%;
    background: #e4eaed;
    border-radius: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .static-avatar {
    display: block;
    overflow: hidden;
    margin: 0 0 0 -6px;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    box-shadow: 0 0 0 1px hsl(0deg 0% 100% / 20%);
  }
  .author-list-item {
    position: relative;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
  }
}
</style>
