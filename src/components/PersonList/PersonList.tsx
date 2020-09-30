import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVisiblePersons } from '../../store/selectors';
import { PersonListStyled } from './PersonList.styled';
import { loadPerson } from '../../store/modulPerson';
import ItemList from '../ItemList/ItemList';

const PersonList = () => {
  const dispatch = useDispatch();

  const visiblePersons = useSelector(getVisiblePersons);
  useEffect(() => {
    dispatch(loadPerson())
  }, [dispatch])

  return (
    <PersonListStyled>
      {visiblePersons.map((person: string) => (
        <ItemList key={person} person={person}>
        </ItemList>
      ))}
    </PersonListStyled>
  )
}

export default PersonList;