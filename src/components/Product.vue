<template>
  <div
    class="max-w-sm rounded overflow-auto shadow-lg m-4 bg-gray-400 max-h-300 md:max-h-500"
  >
    <div class="px-6 py-4">
      <div class="font-bold text-md md:text-l lg:text-xl mb-2">
        {{ info.name }}
      </div>
      <div class="sm:text-sm md:text-md text-l mb-2">
        {{ info.vendor.name }}
      </div>
      <div class="text-gray-800 text-xs md:text-sm">
        <span class="font-bold text-sm md:text-md">
          About this Product
        </span>
        <div v-html="productText"></div>
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-1 py-1 px-2 rounded w-full"
        @click="fullDescription = !fullDescription"
      >
        {{ buttonText }}
      </button>
      <div class="flex justify-end px-6 py-1">
        <span class="fold-bold text-md md:text-l">$ {{ info.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data() {
    return {
      fullDescription: false
    };
  },
  computed: {
    productText() {
      return this.fullDescription
        ? this.info.description
        : this.formatExcerpt(this.info.description);
    },
    buttonText() {
      return this.fullDescription ? `Less Info` : `More Info`;
    }
  },
  methods: {
    formatExcerpt(excerpt) {
      const blurb = excerpt.slice(3, 200).trim();
      return blurb.indexOf("</p>") !== -1
        ? blurb.slice(0, blurb.indexOf("</p>")).trim() + "..."
        : blurb + "...";
    }
  }
};
</script>

<style></style>
