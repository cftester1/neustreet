<template>
  <div v-if="$q.screen.gt.sm" class="NS_nav__site-links">
    <ul>
      <li>
        <router-link
          class="header-link"
          :to="{ path: '/', hash: '#neustreet-article' }"
          >The Neustreet Journal</router-link
        >
      </li>
      <li>
        <router-link
          class="header-link"
          :to="{ path: '/', hash: '#neustreet-x' }"
          >Neustreet X</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LandingNav"
};
</script>
