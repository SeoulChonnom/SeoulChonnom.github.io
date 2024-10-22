export const globalTrip = {
  trips: [
    {
      date: "20240929",
      desc1: "2024.09.29",
      desc2: "부암동 나들이",
      map: require("@/assets/img/map_20240929.png"),
      map2: undefined,
      buttonText1: undefined,
      buttonText2: undefined,
      drive: "http://naver.me/GTnQ1tj1",
    },
    {
      date: "20241005",
      desc1: "2024.10.05",
      desc2: "강북 나들이",
      map: require("@/assets/img/map_20241005.png"),
      map2: undefined,
      buttonText1: undefined,
      buttonText2: undefined,
      drive: "http://naver.me/5UEiY0Vg",
    },
    {
      date: "20241013",
      desc1: "2024.10.13",
      desc2: "파주 출판도시 나들이",
      map: require("@/assets/img/map_20241013_1.png"),
      map2: require("@/assets/img/map_20241013_2.png"),
      buttonText1: "파주 경로도 궁금하다면?",
      buttonText2: "합정 경로도 궁금하다면?",
      drive: "http://naver.me/5UEiY0Vg",
    },
  ],
  getTrip(date) {
    const result = this.trips.find((item) => item.date === date);
    return result ? result : undefined;
  },
  getIsValid(date) {
    const result = this.trips.find((item) => item.date === date);
    return result ? 1 : 0;
  },
};

export const globalShoes = {
  brands: {
    nb: {
      id: 1,
      divId: "nbBrandDiv",
      name: "뉴발란스",
      desc: "발 편한건 역시 뉴발란스지~",
      img: require("@/assets/img/shoes/NB.png"),
      shoes: [
        {
          id: 1,
          divId: "nb574Div",
          name: "뉴발란스 574",
          price: "149,000원",
          img: require("@/assets/img/shoes/NB574.png"),
        },
        {
          id: 2,
          divId: "nb530Div",
          name: "뉴발란스 530",
          price: "119,000원",
          img: require("@/assets/img/shoes/NB530.png"),
        },
      ],
    },
    nike: {
      id: 2,
      divId: "nikeBrandDiv",
      name: "나이키",
      desc: "나이키가 한물 갔다해도 나이키지~",
      img: require("@/assets/img/shoes/Nike.png"),
      shoes: [
        {
          id: 1,
          divId: "nikeP6000Div",
          name: "P-6000",
          price: "129,000원",
          img: require("@/assets/img/shoes/NikeP6000.png"),
        },
        {
          id: 2,
          divId: "nikeV2KDiv",
          name: "V2K 런",
          price: "139,000원",
          img: require("@/assets/img/shoes/NikeV2K.png"),
        },
        {
          id: 3,
          divId: "nikeZoomBomero5Div",
          name: "줌 보메로5",
          price: "189,000원",
          img: require("@/assets/img/shoes/NikeZoomBomero5.png"),
        },
      ],
    },
    asics: {
      id: 3,
      divId: "asicsBrandDiv",
      name: "아식스",
      desc: "요즘 MZ들 사이에서 핫한 아식스!",
      img: require("@/assets/img/shoes/Asics.png"),
      shoes: [
        {
          id: 1,
          divId: "asicsJog100Div",
          name: "조그 100",
          price: "79,000원",
          img: require("@/assets/img/shoes/AsicsJog100.png"),
        },
      ],
    },
  },
};
