import slcnImg from '@/assets/img/SLCN.png';
import MainPage from '@/view/mainPage';
import TripPage from '@/view/tripPage';
import '@/assets/css/common.css';
import { Route, Routes, useNavigate } from 'react-router';

function App() {
  const navigate = useNavigate();

  const onClickSlcn = () => {
    navigate('/');
  };

  return (
    <div id='mainDiv'>
      <div id='header'>
        <img id='SLCN' src={slcnImg} alt='' onClick={onClickSlcn} />
      </div>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/map/:date' element={<TripPage></TripPage>}></Route>
      </Routes>
      <div id='footer'>© Seoul CHONNOM</div>
    </div>
  );
}

export default App;
