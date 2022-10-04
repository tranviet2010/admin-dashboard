import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";
import { MainColor, White } from "../variable/Variable";

const BreadscumbAnimate = keyframes`${fadeInLeft}`;

export const BreadcrumbStyle = styled.div`
  animation: .6s ${BreadscumbAnimate};
  height: 2.2rem;
  margin: 0 .5rem .5rem .5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${MainColor};
  border-radius: 0.5rem;
  padding: 0 1rem;
  span {
    color: ${White} !important;
    a {
      color: ${White} !important;
    }
  }

  .alert-today {
    flex-basis: 30%;
    color: ${White};
  }
`;

export const BreadscrumbEmpty = styled.div`
  height: 2.2rem;
`
