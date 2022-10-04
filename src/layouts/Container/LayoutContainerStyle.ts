import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";
import { Gray, MainColor, SubColor, White } from "../../components/variable/Variable";
import bg from "../../static/images/logos/bg-left.png";

const SliderAnimate = keyframes`${fadeInLeft}`;

export const LayoutStyle = styled.div`
  max-height: max-content;
  min-height: 100vh;
  height: 100vh;

  .ant-layout {
    height: 100%;

    .ant-layout-header {
      background: url(${bg});
      border-bottom: 1px solid ${MainColor};
      background-color: ${SubColor};
    }

    .ant-layout-sider {
      height: 100%;
      background-color: ${Gray};
      animation: .6s ${SliderAnimate};

      .ant-layout-sider-children {
        position: relative;
        margin: 0.5rem 0;
        height: 100%;
        border-radius: 0.5rem;
        span.trigger {
          padding: 0.5rem;
          text-align: right;
          background: ${MainColor};
          color: ${White};
          position: absolute;
          height: 2.2rem;
          width: 100%;
          z-index: 1;
          border-top-right-radius: 0.5rem;

          svg {
            width: 1.2rem;
            height: 1.2rem;
          }
        }

        span.text-center {
          text-align: center;
        }
      }
    }

    .ant-layout-content {
      background-color: ${Gray};
    }

    .ant-layout-footer {
      background: transparent;
      border-top: 2px solid ${MainColor};
      padding: 0.5rem;
      background-color: ${SubColor};
    }
  }
`;