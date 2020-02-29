<template>
  <div class="grid grid-cols-3 gap-4">
    <product
      v-for="product in products"
      :key="product.id"
      :info="product"
    ></product>
  </div>
</template>

<script>
import * as productData from "../data/data.const.js";
import product from "./Product.vue";

export default {
  data() {
    return {
      products: productData.DATA.sort((product1, product2) => {
        return product1.id < product2.id && product1.price > product2.price;
      })
    };
  },
  components: {
    product
  }
};
</script>

<style></style>
