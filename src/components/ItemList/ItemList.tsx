import React from 'react';
import './ItemList.styled.tsx';
import { Item, ItemStyled } from './ItemList.styled';

type PropsPerson = {
  person: string
}

const ItemList: React.FC<PropsPerson> = ({ person }) => {

  return (
    <ItemStyled >
      <Item>
        {person}
      </Item>
    </ItemStyled>
  )
}

export default ItemList;