<template>
  <div class="flex flex-col">
    <label class="flex flex-col items-start px-4 mt-1 w-full">
      <span class="text-gray-700">Filter Products By</span>
      <select v-model="selectedFilter" class="form-select max-w-xs">
        <option
          v-for="(filter, index) in filterOptions"
          :key="index"
          :value="filter.value"
        >{{ filter.text }}</option>
      </select>
    </label>

    <div class="grid grid-cols-3 gap-4">
      <product v-for="product in products" :key="product.id" :info="product"></product>
    </div>
  </div>
</template>

<script>
import * as productData from "../data/data.const.js";
import product from "./Product.vue";

export default {
  data() {
    return {
      filterOptions: [
        {
          text: "By Lowest Id",
          value: 1
        },
        {
          text: "Price - Low to High",
          value: 2
        }
      ],
      selectedFilter: 1,
      products: productData.DATA
    };
  },
  methods: {
    sortProductsBy(filter) {
      return filter === 2
        ? this.products.sort((product1, product2) => {
            return product1.price > product2.price ? 1 : -1;
          })
        : this.products.sort((product1, product2) => {
            return product1.id > product2.id ? 1 : -1;
          });
    }
  },
  components: {
    product
  },
  watch: {
    selectedFilter(val) {
      if (val) {
        this.sortProductsBy(val);
      }
    }
  },
  mounted() {
    if (this.products.length > 0) {
      this.sortProductsBy(1);
    }
  }
};
</script>

<style></style>
