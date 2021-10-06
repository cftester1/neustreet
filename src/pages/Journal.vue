<template>
  <q-page>
      <Article :id="id" />
  </q-page>
</template>

<script>
import Article from 'components/neujournal/Article.vue'

export default {
  name: 'Journal',
  props: ['id'],
  components: {
    Article
  }
}
</script>





