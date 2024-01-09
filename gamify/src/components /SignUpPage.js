import styled from "styled-components";
import React from "react";

function SignUpPage() {
  return <div>
    <h1>UNLEASH YOUR POTENTIAL.</h1>
    <StyledBox>
      <div className="rectangle">
      <form>
        <div>
        <label>
          Username
          <input type="username" name="username" />
        </label>
        </div>
        <div>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        </div>
        <div>
        <button type="submit">Sign Up</button>
        </div>
      </form>
      </div>
    </StyledBox>
    </div>
  
};

const StyledBox = styled.div`
  height: 770px;
  width: 771px;

  & .rectangle {
    background-color: #fce0c5;
    border: 10px solid;
    border-color: #d6700a;
    border-radius: 50px;
    height: 770px;
    left: 0;
    position: flex;
    top: 0;
    width: 771px;
  }
`;

export default SignUpPage;
