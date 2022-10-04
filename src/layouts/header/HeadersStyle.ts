import styled, { keyframes } from "styled-components";
import { bounceInDown } from "react-animations";
import { MainColor } from "../../components/variable/Variable";
import logo from "../../static/images/logos/logo.png";

const SliderHeader = keyframes`${bounceInDown}`;

export const HeaderContainer = styled.div`
  height: 100%;
  animation: 0.6s ${SliderHeader};
  .headerContainer {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .logo {
    width: 80%;
    height: 100%;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position-y: bottom;
  }

  .infomation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 15rem;
    span.anticon-bell {
      cursor: pointer;
      svg {
        width: 1.2rem;
        height: 1.2rem;
      }
    }

    .ant-dropdown-trigger {
      .ant-space-item {
        color: ${MainColor};
        font-weight: 600;
      }
    }
  }
`;