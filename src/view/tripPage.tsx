import myBox from '@/assets/img/mybox.png';
import '@/assets/css/map.css';
import { useState } from 'react';
import { useParams } from 'react-router';
import { globalTrip } from '@/global/trip';

function TripPage() {
  const { date } = useParams<{ date: string }>();
  const [mapId, setMapId] = useState(1);
  const trip = date ? globalTrip.getTrip(date) : undefined;

  console.log(trip);

  const moveButtonClick = (): void => {
    if (mapId === 1) {
      setMapId(2);
      return;
    }
    setMapId(1);
  };

  if (!trip) {
    return <div>여행 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div id='content'>
      <div id='infoDiv'>서울 촌놈 나들이 경로 😎</div>
      <div id='mapDiv'>
        {mapId === 1 && (
          <img className='map' id='map1' src={trip?.map} alt='' />
        )}
        {mapId === 2 && (
          <img className='map' id='map2' src={trip?.map2} alt='' />
        )}
      </div>
      {trip.map2 && (
        <div id='move'>
          <button id='moveButton' onClick={moveButtonClick}>
            {mapId === 1 ? trip.buttonText1 : trip.buttonText2}
          </button>
        </div>
      )}
      <div id='photoDiv'>
        <a id='myboxLink' href={trip?.drive} target='_blank' rel='noopener'>
          <img id='mybox' src={myBox} alt='' />
        </a>
        <div id='myboxDiv'>
          사진은 드라이브에서 📷<div id='pwDiv'>암호 🔒 : 입사일</div>
        </div>
      </div>
    </div>
  );
}

export default TripPage;
