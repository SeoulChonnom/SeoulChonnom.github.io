import type { Shoe } from '@/global/shoes';

interface ShoesListProps {
  shoe: Shoe;
  onClickShoesList: (shoesId: string) => void;
}

function ShoesList(shoesListProps: ShoesListProps) {
  const { shoe, onClickShoesList } = shoesListProps;

  return (
    <div
      className='shoesDiv'
      id={shoe.divId}
      onClick={() => onClickShoesList(shoe.shoesId)}
    >
      <div className='shoesImgDiv'>
        <img className='shoesImg' src={shoe.img} alt='' />
      </div>
      <div className='shoes'>{shoe.name}</div>
      <div className='price'>{shoe.price}</div>
    </div>
  );
}

export default ShoesList;
