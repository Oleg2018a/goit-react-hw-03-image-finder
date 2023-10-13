import { Formik } from 'formik';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarStyled,
} from './Searchbar.styled';

const initialValues = {
  valueInput: '',
};
const Searchbar = ({ onSubmitForm }) => {
  return (
    <SearchbarStyled>
      <Formik
        initialValues={initialValues}
        onSubmit={(value, { resetForm }) => {

          onSubmitForm(value);
          resetForm();
        }}
      >
        <SearchForm>
          <SearchFormButton type="submit">
            <span>Search</span>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            name="valueInput"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </SearchbarStyled>
  );
};

export default Searchbar;
