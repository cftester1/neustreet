<template>
  <div class="col-lg-12">
    <template v-if="title.type === 'h1'">
      <div class="NS_typo__large-headline">
        <h1 :id="title.id">{{ title.value }}</h1>
      </div>
    </template>
    <template v-else-if="title.type === 'h2'">
      <div class="NS_typo__regular-headline">
        <h2 :id="title.id">{{ title.value }}</h2>
      </div>
    </template>
    <template v-else>
      <div class="NS_typo__small-headline">
        <h3 :id="title.anchor">{{ title.value }}</h3>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "ArticleHeader",
  props: ["title"]
};
</script>
