<template>
  <div class="NS_typo__paragraph-one">
    <p>
      <span
        v-for="element in text"
        :key="element.id"
        :style="{ fontWeight: element.weight, fontStyle: element.style }"
      >
        <template v-if="element.type === 'plain'">
          {{ element.value }}
        </template>
        <template v-else="element.type === 'link'">
          <a :href="element.url" target="_blank">{{ element.value }}</a>
        </template>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "ArticleText",
  props: ["text"]
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}
</style>
