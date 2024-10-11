const shoesLink = {
  nb574Div: "nb574",
  nb530Div: "nb530",
  nikeP6000Div: "p6000",
  nikeV2KDiv: "v2k",
  nikeZoomBomero5Div: "zoombomero5",
  asicsJog100Div: "jog100",
};

function shoesClick(divId) {
  //console.log("./shoes/" + shoesLink[divId] + ".html");
  location.href = "./shoes/" + shoesLink[divId] + ".html";
}

document.addEventListener("DOMContentLoaded", function () {});
// 모든 해당 클래스의 div 요소를 선택
const divs = document.querySelectorAll(".shoesDiv");

// 각 div에 이벤트 리스너를 추가
divs.forEach((div) => {
  console.log(div.id);
  div.addEventListener("click", function () {
    shoesClick(div.id); // 클릭된 div의 ID를 함수에 인자로 전달
  });
});
