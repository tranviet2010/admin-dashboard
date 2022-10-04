import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";
import { White } from "../../components/variable/Variable";

const SliderContent = keyframes`${zoomIn}`;

export const ContentStyle = styled.div`
  animation: 0.6s ${SliderContent};
  margin: 0.5rem;
  background-color: ${White};
  border-radius: 0.5rem;
  min-height: calc(100% - 2.7rem);
  max-height: calc(100% - 2.7rem);
  padding: 1rem;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar {
    width: 0;
    background-color: #f5f5f5;
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background-color: #fff;
    background-image: -webkit-gradient(
      linear,
      40% 0%,
      75% 84%,
      from(#4d9c41),
      to(#19911d),
      color-stop(0.6, #54de5d)
    );
  }
`;