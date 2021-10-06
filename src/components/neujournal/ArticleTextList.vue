<template>
    <div class="bg-white NS_typo__regular-headline bg-white col-lg-12" style="padding: 25px">
        <ul>
            <li v-for="element in text" :key="text.id">
                {{ text.value }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'ArticleTextList',
  props: ['text']
}
</script>