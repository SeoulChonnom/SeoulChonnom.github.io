import { useNavigate } from 'react-router';
import type { Brand } from '@/global/shoes';
import ShoesList from './shoesList';

interface BrandListProps {
  brand: Brand;
}

function BrandList({ brand }: BrandListProps) {
  const navigate = useNavigate();

  const onClickShoesList = (shoesId: string) => {
    navigate(`/${brand.brandId}/${shoesId}`);
  };

  return (
    <>
      <div className='brandListDiv' id={brand.divId}>
        <img className='brandListImg' src={brand.img} alt='' />
        <div className='brandListInfo'>
          <div className='brandListName'>{brand.name}</div>
          <div className='brandListDesc'>{brand.desc}</div>
        </div>
      </div>
      <div className='shoesListDiv'>
        {brand.shoes.map((shoe) => {
          return (
            <ShoesList
              key={shoe.id}
              shoe={shoe}
              onClickShoesList={onClickShoesList}
            ></ShoesList>
          );
        })}
      </div>
    </>
  );
}

export default BrandList;
