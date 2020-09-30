import React, { KeyboardEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChangedSearchInput } from '../../store/modulSearch';
import { InputStyled, TitleStyled} from './Search.styled';
import { getErrorMessage } from '../../store/selectors';

const Search = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(getErrorMessage)
  
  const handleOnKeyUp = (e: KeyboardEvent) => {
    const { value } = e.target as HTMLInputElement;
    dispatch(setChangedSearchInput(value));
  };

  return (
    <header >
      <TitleStyled>SWAPI</TitleStyled>
      {errorMessage && <div>{errorMessage}</div>}

      <InputStyled
        type="text"
        className="search"
        placeholder="Enter person name for search..."
        onKeyUp={(e) => handleOnKeyUp(e)}
      />
    </header>
  )
}
export default Search;