<template>
  <div class="brandDiv" v-bind:id="brand.divId">
    <img class="brandImg" :src="this.brand.img" />
    <div class="brandInfo">
      <div class="brandName">{{ brand.name }}</div>
      <div class="brandDesc">{{ brand.desc }}</div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "brandList",
  props: { brand: Object },
  methods: {},
  data() {
    return {};
  },
};
</script>
  
<style>
@import "@/assets/css/shoesRecom.css";
</style>