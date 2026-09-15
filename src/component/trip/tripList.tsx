import { useNavigate } from 'react-router';
import swal from 'sweetalert2';
import type { Trip } from '@/global/trip';

interface tripListProps {
  trip: Trip;
}

function TripList({ trip }: tripListProps) {
  const navigate = useNavigate();

  const onClickMap = async () => {
    const date = trip?.date;

    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve(trip.radio);
      }, 500);
    });

    const { value: ans } = await swal.fire({
      icon: 'question',
      title: trip.title,
      input: 'radio',
      inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return '정답을 선택해주세요!';
        }
      },
    });
    if (ans === trip.answer) {
      swal
        .fire({
          icon: 'success',
          title: trip.answerTitle,
          text: trip.answerText,
          timer: 1000,
          timerProgressBar: true,
          showConfirmButton: false,
        })
        .then(() => {
          navigate(`/map/${date}`);
        });
    } else {
      swal.fire({
        icon: 'error',
        title: trip.errorTitle,
        text: trip.errorText,
        timer: 1000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
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
