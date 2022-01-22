import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFavoriteProducts } from '../../api/products';
import ProductItem from '../ProductItem/ProductItem';
import { StyledItem, StyledList } from '../CatalogList/CatalogList/Styles';
import { StyledFavoritesTitle } from './Styles';

const FavoritesList = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const favoritesItemNoList = useSelector((data) => data.favorites);

  useEffect(() => {
    if (favoritesItemNoList.length > 0) {
      getFavoriteProducts(favoritesItemNoList).then((data) => {
        setFavoriteBooks(data?.products);
      });
    } else {
      setFavoriteBooks([]);
    }
    return !favoritesItemNoList.length ? setIsEmpty(true) : setIsEmpty(false);
  }, [favoritesItemNoList.length]);

  const list = favoriteBooks?.map(
    ({
      name,
      itemNo,
      imageUrls,
      currentPrice,
      author,
      previousPrice,
      categories,
      _id,
      quantity,
      publisher,
      shortDescription,
      fullDescription,
      yearOfPublishing,
      genre,
      numberOfPages,
      coverType,
    }) => {
      return (
        <StyledItem key={itemNo}>
          <ProductItem
            name={name}
            url={imageUrls[0]}
            price={currentPrice}
            salePrice={previousPrice}
            author={author.name}
            // eslint-disable-next-line no-underscore-dangle
            authorId={author._id}
            itemNo={itemNo}
            categories={categories}
            _id={_id}
            quantity={quantity}
            publisher={publisher}
            shortDescription={shortDescription}
            fullDescription={fullDescription}
            yearOfPublishing={yearOfPublishing}
            genre={genre}
            numberOfPages={numberOfPages}
            coverType={coverType}
          />
        </StyledItem>
      );
    },
  );

  return isEmpty ? (
    <StyledFavoritesTitle>Your favorites list is empty</StyledFavoritesTitle>
  ) : (
    <StyledList>{list}</StyledList>
  );
};

export default FavoritesList;
