<template>
  <div class="brandDiv" v-bind:id="brand.divId">
    <img class="brandImg" :src="this.brand.img" />
    <div class="brandInfo">
      <div class="brandName">{{ brand.name }}</div>
      <div class="brandDesc">{{ brand.desc }}</div>
    </div>
  </div>
  <div class="shoesListDiv">
    <shoesList
      v-for="shoe in brand.shoes"
      :key="shoe.id"
      v-bind:shoe="shoe"
    ></shoesList>
  </div>
</template>
  
<script>
import shoesList from "./shoesList.vue";

export default {
  name: "brandList",
  props: { brand: Object },
  methods: {},
  data() {
    return {};
  },
  components: {
    shoesList,
  },
};
</script>
  
<style>
@import "@/assets/css/shoesRecom.css";
</style>