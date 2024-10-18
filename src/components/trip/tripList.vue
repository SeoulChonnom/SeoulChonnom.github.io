<template>
  <div class="mapDiv" @click="onClickMap()">
    <div class="mapImgDiv">
      <img class="map" :src="trip.img" />
    </div>
    <div class="mapDesc">
      {{ trip.desc1 }}<br />
      {{ trip.desc2 }}
    </div>
  </div>
</template>

<script>
export default {
  name: "mapList",
  props: { trip: Object },
  methods: {
    onClickMap() {
      this.$router.push("/map" + this.trip.date);
    },
  },
  data() {
    return;
  },
};
</script>
