import styled from '@emotion/styled';
import {colors} from '../../styles/colors'

type ErrorMessageProps = {
  top: string
}

export const TitleStyled = styled('h1')`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: ${colors.TITLE_COLOR};
  text-rendering: optimizeLegibility;
`
export const InputStyled = styled('input') `
  width: 100%;
  border: 1px solid #c3c0c0;
  border-radius: 16px;
  outline: none;
  padding: 16px 16px 16px 40px;
  margin-top: 110px;
  font-style: italic;
`
// export const ErrorMessage = styled('p')`
//   top: ${(props: ErrorMessageProps) => props.top };  
//   position: relative;
//   text-align: center;
//   font-size: 14px;
//   color: rgba(175, 47, 47, 1);
// `