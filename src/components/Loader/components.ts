import styled from 'styled-components';
import { rotateAnimation } from 'layout';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--colors-bg);
`;

export const RotateElem = styled.div`
  position: absolute;
  top: calc(50% - 125px);
  left: calc(50% - 125px);
  width: 250px;
  height: 250px;
  animation: ${rotateAnimation} 8s infinite linear;
`;
