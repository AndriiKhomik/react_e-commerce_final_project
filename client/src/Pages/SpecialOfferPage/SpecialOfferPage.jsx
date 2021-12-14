import React from 'react';
// import PropTypes from 'prop-types';
// import AuthorDescription from '../../components/AuthorPageComponents/AuthorDescription/AuthorDescription';
import AuthorImg from '../../components/AuthorPageComponents/AuthorImg/AuthorImg';
import AuthorTitle from '../../components/AuthorPageComponents/AuthorTitle/AuthorTitle';
// import AuthorDateOfBirth from '../../components/AuthorPageComponents/AuthorDateOfBirth/AuthorDateOfBirth';
// import { getAuthor } from '../../api/authors';
import { pageTitles } from './pageTitles';
import SectionTitles from '../../components/SectionTitles';
import { StyledContainer, StyledDescription } from './Styles';
import { offer } from './hardcode';
// import Loader from '../../components/ItemPageComponents/Loader/Loader';
// import AuthorButton from '../../components/AuthorPageComponents/AuthorButton';
// import BooksList from '../../components/ProductsList/BooksList';

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
        <AuthorImg img={imgUrl} name={title} />
        <StyledDescription>
          <AuthorTitle name={title} />
          {/* <AuthorDateOfBirth dateOfBirth={dateOfBirth.slice(0, 4)} />
          <AuthorDescription biography={biography} /> */}
        </StyledDescription>
      </StyledContainer>
      {/* <BooksList items={books} text='Books' /> */}
      {/* <AuthorButton /> */}
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