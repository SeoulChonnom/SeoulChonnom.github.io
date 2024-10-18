<template>
  <div id="content">
    <div id="infoDiv">서울 촌놈의 나들이 기록 📷</div>
    <div id="mapListDiv">
      <tripList v-for="trip in trips" :key="trip.date" v-bind:trip="trip" />
    </div>
    <div id="shoesDesc" @click="onclickShoes">
      월 평균 10000보의 주인공의 신발 추천이 궁금하다면???<br />
      여길 클릭해봐 😆
    </div>
  </div>
</template>
  
<script>
import tripList from "@/components/trip/tripList.vue";
import global from "@/global/global.js";

export default {
  name: "mainPage",
  methods: {
    onClickMap(date) {
      this.$router.push("/map" + date);
    },
    onclickShoes() {
      this.$router.push("shoesRecom");
    },
  },
  data() {
    return {
      trips: global.trips,
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
  