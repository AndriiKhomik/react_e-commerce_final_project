import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PromotionalTitle from '../../components/PromotionalPageComponents/PromotionalTitle/PromotionalTitle';
import { pageTitles } from './pageTitles';
import { getPromo } from '../../api/promos';
import SectionTitles from '../../components/SectionTitles';
import { StyledContainer, StyledDescription } from './Styles';
import PromotionalImg from '../../components/PromotionalPageComponents/PromotionalImg';
import PromotionalDescription from '../../components/PromotionalPageComponents/PromotionalDescription';
import ListLoader from '../../components/ListLoader/ListLoader';

const PromotionalPage = ({ match }) => {
  const [promo, setPromo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPromo(match.params[0])
      .then((data) => {
        setPromo(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const {
    description,
    title,
    imageUrlS,
    imageUrlM,
    imageUrlL,
    terms,
    subtitle,
  } = promo;

  return isLoading ? (
    <ListLoader />
  ) : (
    <>
      <SectionTitles titles={pageTitles} itemTitle={title} />
      <StyledContainer>
        <PromotionalTitle name={title} />
        <StyledDescription>
          <PromotionalImg srcS={imageUrlS} srcM={imageUrlM} srcL={imageUrlL} />
          <PromotionalDescription
            description={description}
            terms={terms}
            subtitle={subtitle}
          />
        </StyledDescription>
      </StyledContainer>
    </>
  );
};
PromotionalPage.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default PromotionalPage;
