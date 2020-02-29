<template>
  <div id="app">
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";

export default {
  name: "app",
  components: {
    ProductList
  }
};
</script>

<style lang="scss"></style>
