import React from 'react';
// import DateCountdown from 'react-date-countdown-timer';
import PropTypes from 'prop-types';
import PromotionalTitle from '../../components/PromotionalPageComponents/PromotionalTitle/PromotionalTitle';
import { pageTitles } from './pageTitles';
import SectionTitles from '../../components/SectionTitles';
import { StyledContainer, StyledDescription } from './Styles';
import { offer } from './hardcode';
// import { offer, offer2, offer3 } from './hardcode';
import PromotionalImg from '../../components/PromotionalPageComponents/PromotionalImg';
import PromotionalDescription from '../../components/PromotionalPageComponents/PromotionalDescription';
// import Loader from '../../components/ItemPageComponents/Loader/Loader';

const { description, title, imgUrl } = offer;
const PromotionalPage = ({ match }) => {
  console.log(match.url);
  return (
    <>
      <SectionTitles titles={pageTitles} itemTitle={title} />
      <StyledContainer>
        <PromotionalTitle name={title} />
        <StyledDescription>
          <PromotionalImg img={imgUrl} name={title} />
          <PromotionalDescription description={description} />
        </StyledDescription>
        {/* <DateCountdown
          dateTo='January 01, 2023 00:00:00 GMT+03:00'
          callback={() => alert('Hello')}
        /> */}
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
