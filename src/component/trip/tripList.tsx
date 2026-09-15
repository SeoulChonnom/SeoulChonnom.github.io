import { useNavigate } from 'react-router';
import type { Trip } from '@/global/trip';

interface tripListProps {
  trip: Trip;
}

function TripList({ trip }: tripListProps) {
  const navigate = useNavigate();

  const onClickMap = () => {
    const date = trip?.date;
    navigate(`/map/${date}`);
  };

  return (
    <div className='mapDiv' onClick={onClickMap}>
      <div className='mapImgDiv'>
        <img className='map' src={trip?.logo} alt='' />
      </div>
      <div className='mapDesc'>
        {trip?.desc1}
        <br />
        {trip?.desc2}
      </div>
    </div>
  );
}

export default TripList;
