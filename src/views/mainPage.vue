<template>
  <div id="content">
    <div id="infoDiv">서울 촌놈의 나들이 기록 📷</div>
    <div id="mapListDiv">
      <div class="mapDiv" @click="onClickMap(20241005)">
        <div class="mapImgDiv">
          <img class="map" src="../assets/img/map_20240929.png" />
        </div>
        <div class="mapDesc">
          2024.09.29 Sun<br />
          부암동 나들이
        </div>
      </div>
      <div class="mapDiv" @click="onClickMap(20241005)">
        <div class="mapImgDiv">
          <img class="map" src="../assets/img/map_20241005.png" />
        </div>
        <div class="mapDesc">
          2024.10.05 Sat<br />
          강북 나들이
        </div>
      </div>
    </div>
    <div id="shoesDesc" @click="onclickShoes">
      월 평균 10000보의 주인공의 신발 추천이 궁금하다면???<br />
      여길 클릭해봐 😆
    </div>
  </div>
</template>
  
<script>
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
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../assets/css/index.css";
</style>
  