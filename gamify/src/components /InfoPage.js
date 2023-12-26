import React from "react";
import styled from "styled-components";

function InfoPage() {
  return (
    <StyledDiv>
      <LevelUpYourReality>LEVEL UP YOUR REALITY.</LevelUpYourReality>
      <CenterImage>
        <img src="/Assets/keyboard-game.png" alt="keyboard" className="keyboard" />
      </CenterImage>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  border-radius: 50px;
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
`;

export default InfoPage;
