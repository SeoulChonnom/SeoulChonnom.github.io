<template>
  <div id="content">
    <div id="infoDiv">서울 촌놈의 신발 추천 👟</div>
    <div id="warningDiv">사진을 클릭하면 링크로 이동합니다</div>
    <div class="shoesOverView">
      <div id="shoesImgDiv">
        <!-- <img id="shoesImg" src="@/assets/img/shoes/AsicsJog100.png" /> -->
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
        최근 MZ들 사이에서 유행하는 아식스<br />
        특정 컬러는 구하기 어려운...<br />
        가격도 저렴해 부담이 덜하다!<br />
        쿠션감은 덜하지만 꽉잡아주는 느낌이 있다는 신발
      </div>
    </div>
    <div id="reviewInfoDiv">여러 착용 샷</div>
    <div id="reviewListDiv">
      <div class="reviewDiv">
        <div
          class="reviewImgDiv"
          onclick="window.open('https://kream.co.kr/social/posts/1036186')"
        >
          <img id="reviewImg" src="@/assets/img/shoes/AsicsJogReview.png" />
        </div>
        <div class="reviewImgDesc">일반인의 코디</div>
      </div>
      <div class="reviewDiv">
        <div
          class="reviewImgDiv"
          onclick="window.open('https://www.youtube.com/watch?v=N0i-OXXk930&list=PLgbB1gJhmG7A7LmzZmNz8KaLmiO1jsrLD&index=2')"
        >
          <!--https://blog.naver.com/joeundayy/223236998618-->
          <img id="reviewImg" src="@/assets/img/shoes/AsicsJogReview2.png" />
        </div>
        <div class="reviewImgDesc">블로거의 후기..</div>
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
      