import styled from "styled-components";
import { ActiveMenuItem, Gray, MainColor, SubColor, TextColor, White } from "../../components/variable/Variable";

export const SliderStyle = styled.div`
  height: 100%;
  max-height: max-content;
  padding-top: 2.2rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
  ul {
    border-bottom: 0.5px dashed ${Gray};
  }
  .ant-menu {
    background-color: ${SubColor};
    color: ${TextColor};
    border-bottom-right-radius: 0.5rem;
    min-height: 100%;
    max-height: fit-content;

    li.ant-menu-item {
      margin: 0 !important;
      border-top: 0.5px dashed ${Gray};
      span {
        a {
          color: ${MainColor};
        }
      }
    }

    li.ant-menu-item-active {
    }

    li.ant-menu-submenu {
      border-top: 0.5px dashed ${Gray};

      .ant-menu-submenu-title {
        margin: 0;
      }
    }

    li.ant-menu-item-selected {
      background-color: ${ActiveMenuItem};
      span {
        color: ${White};

        a {
          color: ${White};
        }
      }
      margin: 0;

      &::after {
        border-right-color: ${MainColor};
      }
    }

    li.ant-menu-submenu-selected {
      background-color: ${ActiveMenuItem};
      color: ${White};

      a {
        color: ${White};
      }
    }

    li.ant-menu-submenu-active {
      span {
        color: ${MainColor};
      }
    }
  }
`;