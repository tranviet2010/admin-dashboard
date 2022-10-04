import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";
import { MainColor } from "../../components/variable/Variable";

const FooterAnimate = keyframes`${fadeInUp}`;

export const FooterContainer = styled.div`
animation: .6s ${FooterAnimate};
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 0;
    padding: 0 1rem;
    color: ${MainColor};
  }
`;