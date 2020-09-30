import styled from '@emotion/styled/macro'
export const OverlayStyled = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`
export const Bounce1 = styled.div`
  animation-delay: -0.32s;
`

export const Bounce2 = styled.div`
  animation-delay: -0.16s;
`

export const SpinnerStyled = styled('div')`
  margin: 100px auto 0;
  position: absolute;
  top: 50%;
  left: 50%;

  & > div {
    width: 18px;
    height: 18px;
    background-color: #333;

    border-radius: 100%;
    display: inline-block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  ${Bounce1} {
    animation-delay: -0.32s;
  }

  ${Bounce2} {
    animation-delay: -0.16s;
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`
