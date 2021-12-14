import React from 'react';
// import DateCountdown from 'react-date-countdown-timer';
// import PropTypes from 'prop-types';
import PromotionalTitle from '../../components/PromotionalPageComponents/PromotionalTitle/PromotionalTitle';
import { pageTitles } from './pageTitles';
import SectionTitles from '../../components/SectionTitles';
import { StyledContainer, StyledDescription } from './Styles';
import { offer } from './hardcode';
import PromotionalImg from '../../components/PromotionalPageComponents/PromotionalImg';
import PromotionalDescription from '../../components/PromotionalPageComponents/PromotionalDescription';
// import Loader from '../../components/ItemPageComponents/Loader/Loader';

// const AuthorPage = ({ match }) => {
//   const [auth, setAuth] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     getAuthor(match.url)
//       .then((data) => {
//         setAuth(data);
//       })
//       .finally(() => setIsLoading(false));
//   }, []);

// const { books, name, authorUrl, biography, dateOfBirth } = auth;

// return isLoading ? (
//   <Loader />
// ) : (
const SpecialOfferPage = () => {
  const { description, title, imgUrl, endTime } = offer;
  console.log(description);
  console.log(endTime);
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

// AuthorPage.propTypes = {
//   match: PropTypes.shape({
//     isExact: PropTypes.bool,
//     params: PropTypes.objectOf(PropTypes.string),
//     path: PropTypes.string,
//     url: PropTypes.string,
//   }).isRequired,
// };

export default SpecialOfferPage;
