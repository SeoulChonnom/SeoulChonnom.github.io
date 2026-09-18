import '@/assets/css/shoesRecom.css';
import BrandList from '@/component/shoes/brandList';
import { globalShoes } from '@/global/shoes';

function ShoesRecom() {
  const brandList = globalShoes.brands;

  return (
    <div id='content'>
      <div id='infoDiv'>서울 촌놈의 신발 추천 👟</div>
      <div id='warningDiv'>
        오래 걸어도 편한 신발들만 골랐습니다~ 🎶 <br />
        서울 촌놈 취향 200% 첨가되어있으니 유의~ 😏 <br />
        클릭하면 더욱 상세한 정보를 확인 가능~!
      </div>
      <div id='allShoesDiv'>
        {brandList.map((map) => {
          return <BrandList key={map.id} brand={map}></BrandList>;
        })}
      </div>
      <div id='shoesWarningDiv'>
        전체 신발 가격은 정가를 기준으로 작성하였습니다..
        <br />
        더욱 저렴한 가격은 다른 사이트에서 구매하시는 것을 추천드립니다~
        <br />
        단. 가품이 많아 유의해서 구매 필수!
      </div>
    </div>
  );
}

export default ShoesRecom;
