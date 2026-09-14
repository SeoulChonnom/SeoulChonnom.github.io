import slcnImg from '@/assets/SLCN.png';
import './assets/css/common.css';

function App() {
  const onClickSlcn = () => {
    //  this.$router.push("/");
    console.log('HELLO WORLD');
  };

  return (
    <div id='main-div'>
      <div id='header'>
        <img src={slcnImg} alt='' onClick={onClickSlcn} />
      </div>
      <div id='footer'>© Seoul CHONNOM</div>
    </div>
  );
}

export default App;
