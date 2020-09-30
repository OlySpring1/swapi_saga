import React from 'react';
import { Global, css } from '@emotion/core'
import {colors} from '../styles/colors'

export const GlobalStyles = () => (
  <Global
    styles={css`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  button,
  li,
  ul,
  h1,
  p,
  input{
    margin: 0;
    padding: 0;
  }
  body {
    max-width: 550px;
    margin: 0 auto;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.4em;
    color: ${colors.TEXT_COLOR};
    
    @media screen and (max-width: 570px){
      max-width: 97%;
  }
  li {
    list-style: none;
  }
  button {
    border: none;
    background: none;
    text-transform: capitalize;
    vertical-align: baseline;
    font: inherit;
    cursor: pointer;
  }
  button: focus{
    outline: none;
  }
  input {
    font: inherit;
    outline: none;
  }
  `}
  />
)
