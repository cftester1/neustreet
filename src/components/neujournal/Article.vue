<template>
  <div>
    <div class="content-wrap">
      <div class="content content-tag">
        {{ tag }}
      </div>
      <div v-if="tag !== 'podcast'" class="content">
        <h1 class=" content-title">
          {{ title }}
        </h1>
        <h2 class="content-subject">
          {{ subject }}
        </h2>
        <div class="post-card-meta">
          <ul class="author-list">
            <li class="author-list-item">
              <a class="static-avatar">
                <img
                  class="author-profile-image"
                  :src="author.profile_image"
                  :alt="author.name"
                />
              </a>
            </li>
          </ul>
          <div class="post-card-byline-content black">
            <span class="author-name"
              ><span>{{ author.name }}</span></span
            >
            <span class="post-card-byline-date"
              ><time datetime="2021-08-16">{{ date }}</time>
            </span>
          </div>
        </div>
      </div>
      <img
        v-if="tag !== 'podcast'"
        class="feature-img"
        :src="image"
        alt="Start here for a quick overview of everything you need to know"
        loading="lazy"
      />

      <section class="content">
        <div v-html="content" class=""></div>
      </section>
    </div>
    <aside v-if="tag !== 'podcast'" class="read-more-wrap">
      <div class="read-more inner">
        <article
          class="post-card post"
          v-for="(item, index) in featureArticles"
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
                  <a href="#neustreet-article" class="static-avatar">
                    <img
                      class="author-profile-image"
                      :src="item.author.profile_image"
                      :alt="item.author.name"
                    />
                  </a>
                </li>
              </ul>
              <div class="post-card-byline-content">
                <span class="author-name">{{ item.author.name }}</span>
                <span class="post-card-byline-date"
                  ><time datetime="2021-08-16">{{ item.header.date }}</time>
                  <span class="bull">•</span> 2 min read</span
                >
              </div>
            </footer>
          </div>
        </article>
      </div>
    </aside>
    <div class="subscribe-button-wrap">
      <subscribe placeholder="Enter Email" bottom="true" />
    </div>
  </div>
</template>

<script>
import Subscribe from "components/Subscribe.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Article",
  components: {
    Subscribe
  },
  props: ["id"],
  data() {
    return {
      featureArticles: [],
      tag: "",
      title: "",
      subject: "",
      author: "",
      image: "",
      date: "",
      content: "",
      articleId: this.id,
      anchorAttrs: {
        target: "_blank",
        rel: "noopener noreferrer nofollow"
      }
    };
  },

  computed: {
    ...mapGetters("content", ["postsData"])
  },
  watch: {
    id: function(newVal, oldVal) {
      this.articleId = newVal;
      if (this.articleId.includes("podcast")) {
        this.displayArticle(this.postsData.podcasts);
      } else {
        this.displayArticle(this.postsData.articles);
      }
    },
    postsData: {
      deep: true,
      handler(posts) {
        if (posts !== undefined) {
          if (this.articleId.includes("podcast")) {
            this.displayArticle(posts.podcasts);
          } else {
            this.displayArticle(posts.articles);
          }
        }
      }
    }
  },
  methods: {
    ...mapActions("content", ["getPosts"]),
    displayArticle(articles) {
      this.featureArticles = [...articles];

      const article = articles.find(item => item.header.id == this.articleId);
      const index = this.featureArticles.indexOf(article);
      if (index > -1) {
        this.featureArticles.splice(index, 1);
      }
      this.featureArticles = this.featureArticles.slice(0, 3);

      if (article !== undefined) {
        this.tag = article.tag.name;
        this.title = article.header.title;
        this.author = article.author;
        this.date = article.header.date;
        this.subject = article.header.details;
        this.image = article.header.image;
        this.content = article.body.details;
      } else {
        setTimeout(() => {
          if (this.content === "") {
            window.location.replace(
              window.location.protocol + "//" + window.location.host
            );
          }
        }, 1000);
      }
    }
  },
  mounted() {
    if (Object.entries(this.postsData).length === 0) {
      this.getPosts();
    } else {
      if (this.articleId.includes("podcast")) {
        this.displayArticle(this.postsData.podcasts);
      } else {
        this.displayArticle(this.postsData.articles);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.content-wrap {
  background-color: #fafafa;
  color: #35373a;
  border-radius: 16px 16px 0px 0px;
  padding-bottom: 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  .feature-img {
    width: min(1080px, calc(100% - 8vw));
    align-self: center;
  }
}

.subscribe-button-wrap {
  padding: 10vw 14vw 5vw 15vw;

  .NS_layout__input-row {
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1439px) {
      flex-direction: column;
      align-items: center;
    }
  }
}

.neustreet-player {
  width: 30%;
  margin-bottom: 30px;
}

.content-tag {
  padding: 0.8em 0 0em;
  font-family: montserrat-bold;
  font-size: 30px;
  line-height: 30px;
  color: $pink;
}

.content-title {
  padding: 0 0 0em;
  font-size: 2.4rem;
  color: #0a0b0c;
  transition: color 0.2s ease-in-out;
}

.content-subject {
  max-width: 56em;
  color: $text-gray;
}

.post-card-meta {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}
.author-profile-image,
.avatar-wrapper {
  display: block;
  width: 100%;
  height: 100%;
  background: #e4eaed;
  border-radius: 50%;
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
  color: $white;
  &.black {
    color: $black;
  }
}
.content {
  margin-left: auto;
  margin-right: auto;
  width: min(1080px, calc(100% - 8vw));

  ::v-deep img {
    max-width: 50%;
    transform: translateX(50%);
    @media screen and (max-width: 1024px) {
      max-width: 100%;
      transform: translateX(0);
    }
  }

  ::v-deep .author-profile-image {
    max-width: 100%;
    transform: translateX(0);
  }

  ::v-deep h1 {
    font-size: 50px;
    font-family: montserrat-semi-bold;
    line-height: 50px;
    @media screen and (max-width: 1024px) {
      font-size: 26px;
      font-family: montserrat-semi-bold;
      line-height: 30px;
    }
  }

  ::v-deep h2 {
    font-size: 30px;
    font-family: montserrat-semi-bold;
    line-height: 30px;

    @media screen and (max-width: 1024px) {
      font-size: 23px;
      font-family: montserrat-semi-bold;
      line-height: 26px;
    }
  }

  ::v-deep h3 {
    font-size: 26px;
    font-family: montserrat-semi-bold;
    line-height: 28px;

    @media screen and (max-width: 1024px) {
      font-size: 20px;
      font-family: montserrat-semi-bold;
      line-height: 23px;
    }
  }

  ::v-deep h4 {
    font-size: 20px;
    font-family: montserrat-semi-bold;
    line-height: 20px;

    @media screen and (max-width: 1024px) {
      font-size: 18px;
      font-family: montserrat-semi-bold;
      line-height: 20px;
    }
  }

  ::v-deep a {
    color: $deep-pink;
    font-family: montserrat-semi-bold;
  }

  ::v-deep p {
    font-size: 20px;
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
  }
  ::v-deep iframe {
    width: 40%;
    transform: translateX(80%);
    @media screen and (max-width: 1024px) {
      width: 100%;
      transform: translateX(0);
    }
  }
}

.read-more-wrap {
  width: 100%;
  padding: 4vmin;
  margin: 0 auto -40px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  background: #0a0b0c;
  border-radius: 0px 0px 16px 16px;
}

.read-more {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4vmin;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
}

.post-card {
  position: relative;
  flex: 1 1 301px;
  display: flex;
  flex-direction: column;
  min-height: 220px;
  background-size: cover;
  word-break: break-word;
}

.post-card-image-link {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 3px;
}

.post-card-image {
  width: 100%;
  height: 29vh;
  background: $cool-gray no-repeat 50%;
  object-fit: cover;
}

.post-card-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.post-card-content-link {
  position: relative;
  display: block;
  color: $white;
  text-decoration: none;
}
.author-name {
  font-weight: 800;
}

.post-card-title {
  margin: 0;
  font-family: montserrat-bold;
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  line-height: 26px;
  @media screen and (max-width: 900px) {
    line-height: 17px;
  }
}
.post-card-primary-tag {
  font-family: montserrat-bold;
  font-size: 18px;
  line-height: 30px;
  color: $pink;
}

.post-card-excerpt {
  p {
    margin-bottom: 1em;
    font-family: montserrat-semi-bold;
    font-size: 14.5px;
    line-height: 21px;
  }
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
</style>
