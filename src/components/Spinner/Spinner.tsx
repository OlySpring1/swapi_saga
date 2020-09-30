import React from 'react'
import {
  OverlayStyled,
  SpinnerStyled,
  Bounce1,
  Bounce2,
} from './Spinner.styled'
export const Spinner = () => (
  <OverlayStyled>
    <SpinnerStyled>
      <Bounce1 />
      <Bounce2 />
      <div></div>
    </SpinnerStyled>
  </OverlayStyled>
)
