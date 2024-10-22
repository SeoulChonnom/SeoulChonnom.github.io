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
