import React from 'react';
import ItemImg from './ItemImg/ItemImg';
import { productItem } from './singleBook';

const ItemPage = () => {
  return <ItemImg img={productItem.img} name={productItem.name} />;
};

export default ItemPage;
