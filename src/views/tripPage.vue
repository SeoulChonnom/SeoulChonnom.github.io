<template>
  <div id="content">
    <div id="infoDiv">서울 촌놈 나들이 경로 😎</div>
    <div id="mapDiv">
      <img id="map" :src="getMap1()" />
    </div>
    <div id="photoDiv">
      <a id="myboxLink" href="http://naver.me/GTnQ1tj1" target="_blank">
        <img id="mybox" src="@/assets/img/mybox.png" />
      </a>
      <div id="myboxDiv">
        사진은 드라이브에서 📷
        <div id="pwDiv">암호 🔒 : 입사일</div>
      </div>
    </div>
  </div>
</template>

<script>
import { globalTrip } from "@/global/global";

export default {
  name: "tripPage",
  data() {
    return {
      globalTrip,
      date: this.$route.params.date,
    };
  },
  methods: {
    getMap1() {
      return globalTrip.trips.find((item) => item.date === this.date).map;
    },
    getDrive() {
      return globalTrip.trips.find((item) => item.date === this.date).drive;
    },
  },
  onMounted() {
    console.log(globalTrip.getTrip(this.date));
    console.log(this.date);
  },
};
</script>

<style scoped>
@import "@/assets/css/map.css";
</style>