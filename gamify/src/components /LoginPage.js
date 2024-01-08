import styled from "styled-components";
import RememberMe from "./RememberMe";
import react from "react";

function LoginPage() {
  return (
      <Div>
        UNLEASH YOUR POTENTIAL.
      <StyledDiv>
      <Div className="login-wrapper">
        <div className="text">
          Username or Email
        </div>
        <div className="text">
          Password
        </div>
        <div>
          <RememberMe />
        </div>
      </Div>
    </StyledDiv>
    </Div>
  );
}

const StyledDiv = styled.div`
  border: 10px solid #d6700a;
  background-color: purple;
  display: flex;
  min-height: 811px;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  color: #fff;
  max-width: 561px;
  font: 800 40px Inter, sans-serif;

  .login-wrapper {
    border-radius: 50px;
    border: 10px solid #d6700a;
    display: flex;
    min-height: 770px;
    max-width: 771px;
    flex-direction: column;

    .text {
      color: #000;
      max-width: 197px;
      font: 700 24px Anek Latin, sans-serif;
    }
  }
`;

export default LoginPage;