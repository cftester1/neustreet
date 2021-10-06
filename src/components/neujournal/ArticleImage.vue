<template>
    <div class="NS_img__medium">
        <q-img class="image" :src="image.source" />
    </div>
</template>

<script>
export default {
  name: 'ArticleImage',
  props: ['image']
}
</script>