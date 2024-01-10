import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';

function RegisterPage() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eye);

  const handleToggle = () => {
    if(type === 'password'){
      setType('text');
      setIcon(eyeOff);
    }
    else{
      setType('password');
      setIcon(eye);
    }
  }

  return (
  <PageWrapper>
    <div>
      <h1>UNLEASH YOUR POTENTIAL.</h1>
    </div>
    <StyledBox>
      <div className="rectangle">
        <form>
          <UsernameWrapper>
            <label>
              Create Your Username:
            </label>
            <div className="usernameWrapper">
              <input type="username" name="username" placeholder="Username" />
            </div>
          </UsernameWrapper>
          <PasswordWrapper>
            <label>
              Create Your Password:
            </label>
            <div>
              <input
                type={type}
                name="password"
                placeholder="Password"
                />
                <span onClick={handleToggle}><Icon icon={icon} size={25}/></span>
            </div>
            <div>
              <input
                type={type}
                name="password"
                placeholder="Confirm Password"
                />
            </div>
          </PasswordWrapper>
          <div>
            <button type="submit" className="RegisterButton">REGISTER</button>
          </div>
        </form>
          </div>
    </StyledBox>
  </PageWrapper>
)};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background-image: linear-gradient(purple, blue);
  height: 175vh;
  padding-top: 150px;

  & h1 {
    color: white;
    margin-right: 10px;
    margin-top: 200px;
    padding-left: 30px;
    white-space: nowrap;
  }
`;

const StyledBox = styled.div`
  height: 400px;
  width: 400x;
  margin: 10px;
  margin-top: -100px;

  & .rectangle {
    background-color: #fce0c5;
    border: 10px solid;
    border-color: #d6700a;
    border-radius: 50px;
    height: 770px;
    left: 10;
    position: flex;
    top: 0;
    width: 770px;
  }

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60%;
  }

  & .RegisterButton {
    background-color: #d6700a;
    color: white;
    border-radius: 20px;
    margin-top: 20px;
    border-style: none;
    padding: 5px 45px 5px 45px;
    font-weight: 700;
    font-size: 15px;
  }
`;

const StyledLabel = styled.label`
  padding-top: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  & span {
    font-size: 18px;
    font-weight: 700;
  }
  `;

const StyledSwitch = styled.div`
    position: relative;
    width: 53px;
    height: 20px;
    background-color: #b3b3b3;
    border-radius: 32px;
    padding: 4px;
    transition: 300ms all;

    &:before {
      transition: 300ms all;
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 35px;
      top: 50%;
      left: 4px;
      background: white;
      transform: translate(0, -50%);
    };
`;

const StyledInput = styled.input`
  display: none;

  &:checked + ${StyledSwitch} {
    background: green;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;

const PasswordWrapper = styled.div`
  margin: 10px;

  & label {
    font-weight: bold;
    font-size: 20px;
  }

  & div {
    display: flex;
    justify-content: space-between;
    width: 300px;
    height: 30px;
    background-color: white;
    padding: 5px;

    & input {
      /* border: none; */
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      outline: none;
    }
  }
`;


const UsernameWrapper = styled.div`
  margin: 10px;

& label {
  font-weight: bold;
  font-size: 20px;
}

& div {
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 30px;
  background-color: white;
  padding: 5px;

  & input {
    width: 300px;
    height: 20px;
    padding: 5px;
    border: none;
    background-color: transparent;
    outline: none;
  }
}
`;

export default RegisterPage;
