import styled, { keyframes, css } from "styled-components";
import { zoomIn } from "react-animations";
import bg1 from "../../../static/images/bg/bg-1.jpg";
import { White } from "../../../components/variable/Variable";

const AnimateBgLogin = keyframes`${zoomIn}`;

export const LoginStyle = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-position: center;
  background-size: cover;
  animation: 0.6s ${AnimateBgLogin} forwards;
  z-index: 1;

  .form-login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: fit-content;
    width: fit-content;
    background: #ffffff42;
    border-radius: 0.5rem;

    .logo {
      text-align: center;
      border-radius: 0.5rem;
      border-bottom-right-radius: 200px;
      background: ${White};
      img {
        max-width: 40%;
      }
    }

    .form {
      .title {
        text-transform: uppercase;
        margin-top: 2rem;
        h2,
        h4 {
          margin: 0;
          text-align: center;
          color: ${White};
          font-weight: 400;
        }
      }

      .form-content {
        padding: 2rem 1.5rem;

        .button {
          text-align: center;
        }
      }
    }
  }
`;

export const CarouselsStyle = styled.div`
  width: 100vw;
  height: 100vh;
`;
