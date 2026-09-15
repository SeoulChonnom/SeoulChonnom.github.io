import TripList from '@/component/trip/tripList';

import { globalTrip } from '@/global/trip';
import '@/assets/css/index.css';

function MainPage() {
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
        className='fixButtonDiv'
        //     :class="{ fix1: !shoesRecom && ayo, fix2: ayo, fixNone: !ayo }"
        id='ayoFilmButtonDiv'
        //   @click="onclickFilm"
      >
        Choi's Film Art~🎞
        <div
          className='fixButtonCloseDiv'
          id='ayoFilmButtonCloseDiv'
          //   @click.stop="onclickClose(1)"
        >
          X
        </div>
      </div>
      <div
        className='fixButtonDiv'
        //:class="{ fix1: shoesRecom, fixNone: !shoesRecom }"
        id='shoesRecomButtonDiv'
        //@click="onclickShoes"
      >
        서울 촌놈의 신발 추천~👟
        <div
          className='fixButtonCloseDiv'
          id='shoesRecomButtonCloseDiv'
          //@click.stop="onclickClose(2)"
        >
          X
        </div>
      </div>
    </div>
  );
}

export default MainPage;
