import styled from '@emotion/styled/macro';
import {colors} from '../../styles/colors'

export const Item = styled('li')`
  width: 75%;
  background-color: #fff;
  text-align: start;
  word-break: break-all;
  color: ${colors.TEXT_COLOR};
}
`
export const ItemStyled = styled('div')`
  width: 100%;
  min-height: 58px;
  padding: 6px 10px 6px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c3c0c0;
  background-color: #fff;
`
