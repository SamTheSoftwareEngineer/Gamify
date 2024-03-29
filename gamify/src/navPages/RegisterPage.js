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
      <h1>LET'S GET STARTED.</h1>
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
                <span onClick={handleToggle}><Icon icon={icon} size={25}/></span>
            </div>
          </PasswordWrapper>
          <UserBirthDateWrapper>
            <label>
              What is your date of birth?
            </label>
            <div className="dateofbirth">
              <input type="date" name="dateofbirth" />
            </div>
          </UserBirthDateWrapper>
          <PersonalInfoWrapper>
            <label>
              What is your gender?
            </label>
            <div>
              <input type="radio" name="gender" value="male" /> Male
              <input type="radio" name="gender" value="female" /> Female
              <input type="radio" name="gender" value="other" /> Other
              <input type="radio" name="gender" value="none" /> None
            </div>
            </PersonalInfoWrapper>
          <div>
            <button type="submit" className="RegisterButton">Create Account</button>
          </div>
          <div>
            <p>Already have an account? <a href="/login">Login</a></p>
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
  padding-top: 250px;

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
  margin-top: 200px;
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

const PersonalInfoWrapper = styled.div`
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
    align-items: center;

    & input {
      /* border: none; */
      border: none;
      background-color: transparent;
      outline: none;
      text-align: center;
      align-items: center;

    }
  }
`;


const UserBirthDateWrapper = styled.div`
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
