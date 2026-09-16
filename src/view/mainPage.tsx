import TripList from '@/component/trip/tripList';

import { globalTrip } from '@/global/trip';
import '@/assets/css/index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function MainPage() {
  const [ayo, setAyo] = useState(true);
  const [shoes, setShoes] = useState(true);
  const navigate = useNavigate();

  return (
    <div id='content'>
      <div id='infoDiv'>서울 촌놈 나들이 기록 📷</div>
      <div id='mapListDiv'>
        {globalTrip.trips.map((trip) => {
          return <TripList trip={trip} key={trip.date}></TripList>;
        })}
      </div>
      <div id='tobecontinueDiv'>서울 촌놈 나들이는 계속 될 예정....🥳</div>
      <div
        className={`fixButtonDiv ${!shoes && ayo ? 'fix1' : ayo ? 'fix2' : 'fixNone'}`}
        id='ayoFilmButtonDiv'
        onClick={() => window.open('http://naver.me/52RjLNuT')}
      >
        Choi's Film Art~🎞
        <div
          className='fixButtonCloseDiv'
          id='ayoFilmButtonCloseDiv'
          onClick={(event) => {
            event.stopPropagation();
            setAyo(false);
          }}
        >
          X
        </div>
      </div>
      <div
        className={`fixButtonDiv ${shoes ? 'fix1' : 'fixNone'}`}
        //:class="{ fix1: shoesRecom, fixNone: !shoesRecom }"
        id='shoesRecomButtonDiv'
        onClick={() => navigate('/shoesRecom')}
      >
        서울 촌놈의 신발 추천~👟
        <div
          className='fixButtonCloseDiv'
          id='shoesRecomButtonCloseDiv'
          onClick={(event) => {
            event.stopPropagation();
            setShoes(false);
          }}
        >
          X
        </div>
      </div>
    </div>
  );
}

export default MainPage;
