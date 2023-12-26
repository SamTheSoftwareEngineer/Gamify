import * as React from "react";
import styled from "styled-components";

function InfoPage() {
  return <Div>
    <Levelupyourreality>LEVEL UP YOUR REALITY.</Levelupyourreality>
    <div>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fgaming-keyboard&psig=AOvVaw18y6TbsBGtqby3mNGadY1A&ust=1703717731267000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCIDRsKWZroMDFQAAAAAdAAAAABAE" alt="keyboard">
        </img>
    </div>
  </Div>;
}

const Div = styled.div`
  border-radius: 50px;
  border: 10px solid #d6700a;
  background-color: purple;
  display: flex;
  min-height: 811px;
  flex-direction: column;
`

  const Levelupyourreality = styled.div`
  color: white;
  align-self: center;
  font: 800 50px Inter, sans-serif;
  @media (max-width: 991px) {
  max-width: 100%;
  font-size: 40px;
  margin-top: 200px;

  }
`;


export default InfoPage;

