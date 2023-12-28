import React from "react";
import styled from "styled-components";

function InfoPage() {
  return (
    <StyledDiv1>
      <LevelUpYourReality>LEVEL UP YOUR REALITY.</LevelUpYourReality>
      <CenterImage>
        <img src="/Assets/keyboard-game.png" alt="keyboard" className="keyboard" />
      </CenterImage>
      <StyledText> Discover a new way to level up your team's productivity and engagement.
       <StyledText>Gamify is the platform that translates work into gaming.
      </StyledText>
      </StyledText>

      <StyledDiv2>
      <Div2>
        <Styledbutton a href="/register">REGISTER</Styledbutton></Div2>
      <Div3>
        <Styledbutton a href="/login">LOGIN</Styledbutton>
      </Div3>
    </StyledDiv2>
      
    </StyledDiv1>
  );
}

const StyledDiv1 = styled.div`
  border: 10px solid #d6700a;
  background-color: purple;
  display: flex;
  min-height: 811px;
  flex-direction: column;
  align-items: center;
`;

const LevelUpYourReality = styled.div`
  color: white;
  font: 800 50px Inter, sans-serif;
  margin-top: 50px;

  @media (max-width: 991px) {
    font-size: 40px;
    margin-top: 20px;
  }
`;

const CenterImage = styled.div`
  max-width: 90%;
  margin-top: 50px;
  

  .keyboard {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .button-wrapper {
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
    margin-bottom: 10px;
    gap: 20px;
  }
`;

const StyledDiv2 = styled.div`
  text-align: center;
  font: 600 20px/60% Anek Latin, sans-serif;
  background-color: purple;
  color: white;
  padding: 10px;
`;

const Div2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #d6700a;
  margin-top: 10px;
  border-radius: 10px;
`;

const Div3 = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #d6700a;
`;

const Styledbutton = styled.button`
  color: white;
  border: none;
  background: none;
  font: 600 20px Inter, sans-serif;
  padding: 16px 40px
`;


const StyledText = styled.div`
  color: white;
  font: 600 20px Inter, sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`;


export default InfoPage;
