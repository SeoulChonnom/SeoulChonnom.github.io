<template>
  <div id="content">
    <div id="infoDiv">서울 촌놈의 신발 추천 👟</div>
    <div id="warningDiv">사진을 클릭하면 링크로 이동합니다</div>
    <div class="shoesOverView">
      <div id="shoesImgDiv">
        <img id="shoesImg" :src="getShoesInfo().img" />
      </div>
      <div class="brandDiv" v-bind:id="getBrandDivId()">
        <div class="brandInfo">
          <div class="brandName">{{ getShoesInfo().name }}</div>
          <div class="brandDesc">{{ getShoesInfo().desc }}</div>
        </div>
      </div>
    </div>
    <div id="shoesDesc">
      <div id="shoesInfo">
        {{ getShoesInfo().shoesInfo1 }}<br />
        {{ getShoesInfo().shoesInfo2 }}<br />
        {{ getShoesInfo().shoesInfo3 }}<br />
        {{ getShoesInfo().shoesInfo4 }}
      </div>
    </div>
    <div id="reviewInfoDiv">여러 착용 샷</div>
    <div id="reviewListDiv">
      <div class="reviewDiv">
        <div
          class="reviewImgDiv"
          onclick="window.open('https://kream.co.kr/social/posts/1036186')"
        >
          <img id="reviewImg" :src="getShoesInfo().reviewImg1" />
        </div>
        <div class="reviewImgDesc">{{ getShoesInfo().reviewDesc1 }}</div>
      </div>
      <div class="reviewDiv">
        <div
          class="reviewImgDiv"
          onclick="window.open('https://www.youtube.com/watch?v=N0i-OXXk930&list=PLgbB1gJhmG7A7LmzZmNz8KaLmiO1jsrLD&index=2')"
        >
          <img id="reviewImg" :src="getShoesInfo().reviewImg2" />
        </div>
        <div class="reviewImgDesc">{{ getShoesInfo().reviewDesc2 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { globalShoes } from "@/global/global.js";

export default {
  name: "shoesInfoPage",
  data() {
    return {
      globalShoes,
      brand: this.$route.params.brand,
      shoesName: this.$route.params.shoesName,
      shoeInfo: undefined,
    };
  },
  methods: {
    getShoesBrand() {
      return globalShoes.brands.find((item) => item.brandId === this.brand);
    },
    getShoesInfo() {
      return globalShoes.brands
        .find((item) => item.brandId === this.brand)
        .shoes.find((item) => item.shoesId === this.shoesName);
    },
    getBrandDivId() {
      return this.getShoesBrand().brandId + "BrandDiv";
    },
  },
};
</script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
@import "@/assets/css/shoesInfo.css";
</style>
      