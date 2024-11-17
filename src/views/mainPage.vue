<template>
  <div id="content">
    <div id="infoDiv">서울 촌놈 나들이 기록 📷</div>
    <div id="mapListDiv">
      <tripList v-for="trip in trips" :key="trip.date" v-bind:trip="trip" />
    </div>
    <div class="fixButtonDiv" id="ayoFilmButtonDiv" @click="onclickFilm">
      Choi's Film Art~🎞
    </div>
    <div class="fixButtonDiv" id="shoesRecomButtonDiv" @click="onclickShoes">
      서울 촌놈의 신발 추천~👟
    </div>
  </div>
</template>
  
<script>
import tripList from "@/components/trip/tripList.vue";
import { globalTrip } from "@/global/global.js";

export default {
  name: "mainPage",
  methods: {
    onClickMap(date) {
      this.$router.push("/map" + date);
    },
    onclickShoes() {
      this.$router.push("shoesRecom");
    },
    onclickFilm() {
      window.open("http://naver.me/52RjLNuT");
    },
  },
  data() {
    return {
      trips: globalTrip.trips,
    };
  },
  components: {
    tripList,
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../assets/css/index.css";
</style>
  