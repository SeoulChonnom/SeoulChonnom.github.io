import { useParams } from 'react-router';
import { globalShoes } from '@/global/shoes';
import '@/assets/css/shoesInfo.css';

function ShoesInfo() {
  const { brand, shoesName } = useParams<{
    brand: string;
    shoesName: string;
  }>();

  if (!brand || !shoesName) return <div>신발 정보를 찾을 수 없습니다.</div>;

  const shoe = globalShoes.getBrandShoes(brand, shoesName);

  console.log(shoe);

  if (!shoe) return <div>신발 정보를 찾을 수 없습니다.</div>;

  return (
    <div id='content'>
      <div id='infoDiv'>서울 촌놈의 신발 추천 👟</div>
      <div id='warningDiv'>사진을 클릭하면 링크로 이동합니다</div>
      <div className='shoesOverView'>
        <div id='shoesImgDiv'>
          <img id='shoesImg' src={shoe?.img} />
        </div>
        <div className='brandDiv' id={shoe?.divId}>
          <div className='brandInfo'>
            <div className='brandName'>{shoe?.name}</div>
            <div className='brandDesc'>{shoe?.desc}</div>
          </div>
        </div>
        {shoe.videoDesc && (
          <div className='mjVideoDiv'>
            <div onClick={() => window.open(shoe?.videoLink)}>
              {shoe?.videoDesc}
            </div>
            {shoe.video && (
              <video
                src={shoe?.video}
                id='mjVideo'
                controls
                preload='auto'
                autoPlay
                muted
                loop
                playsInline
              />
            )}
          </div>
        )}
      </div>
      <div id='shoesDesc'>
        <div id='shoesInfo'>
          {shoe?.shoesInfo1}
          <br />
          {shoe?.shoesInfo2}
          <br />
          {shoe?.shoesInfo3}
          <br />
          {shoe?.shoesInfo4}
        </div>
      </div>
      <div id='reviewInfoDiv'>여러 착용 샷</div>
      <div id='reviewListDiv'>
        <div className='reviewDiv'>
          <div
            className='reviewImgDiv'
            onClick={() => window.open(shoe?.reviewLink1)}
          >
            <img id='reviewImg' src={shoe?.reviewImg1} />
          </div>
          <div className='reviewImgDesc'>{shoe?.reviewDesc1}</div>
        </div>
        <div className='reviewDiv'>
          <div
            className='reviewImgDiv'
            onClick={() => window.open(shoe?.reviewLink2)}
          >
            <img id='reviewImg' src={shoe?.reviewImg2} />
          </div>
          <div className='reviewImgDesc'>{shoe?.reviewDesc2}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoesInfo;
