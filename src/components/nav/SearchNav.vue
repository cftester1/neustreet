<template>
  <div class="NS_nav__search-field-container">
    <q-input
      outlined
      bottom-slots
      :hide-bottom-space="true"
      color="pink-5"
      v-model="search"
      placeholder="Search by Artist, Collectable, or Brand"
      :dense="true"
      input-class="NS_nav__search-field"
    >
      <template v-slot:append>
        <q-icon name="search"></q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: "SearchNav",

  data() {
    return {
      search: ""
    };
  }
};
</script>
