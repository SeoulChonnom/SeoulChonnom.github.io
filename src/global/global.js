export const globalTrip = {
  trips: [
    {
      date: "20240929",
      desc1: "2024.09.29",
      desc2: "부암동 나들이",
      map: require("@/assets/img/map_20240929.png"),
      map2: undefined,
      drive: "http://naver.me/GTnQ1tj1",
    },
    {
      date: "20241005",
      desc1: "2024.10.05",
      desc2: "강북 나들이",
      map: require("@/assets/img/map_20241005.png"),
      map2: undefined,
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
