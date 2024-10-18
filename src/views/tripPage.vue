<template>
  <div id="content">
    <div id="infoDiv">서울 촌놈 나들이 경로 😎</div>
    <div id="mapDiv">
      <img id="map" src="@/assets/img/map_20240929.png" />
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
export default {
  name: "tripPage",
};
</script>

<style scoped>
@import "@/assets/css/map.css";
</style>