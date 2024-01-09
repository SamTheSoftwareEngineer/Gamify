import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  font: 600 20px/60% Anek Latin, sans-serif;
  background-color: purple;
  color: white;
  padding: 10px;
  border-bottom: 5px solid white;


  .container {
  min-height: 130px;
  flex-direction: column;
  }

  .logo {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }

  .links {
    display: flex;
    justify-content: space-evenly;
    gap: 30px;
    margin-top: 20px;
  }

  .link {
    text-decoration: none;
    color: inherit;
  }
`;

function NavBar() {
  return (
    <Div>
      <div className = 'container'>
      <div className="logo">
        GA
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f581e194012c1a8b61c717bb2e855358cea0c569ef5e286e575888255795cfe?"
          alt="Logo"
        />
        IFY
      </div>
      <div className="links">
        <a className="link" href="/gamify">
          What is Gamify?
        </a>
        <a className="link" href="/faqs">
          FAQs
        </a>
        <a className="link" href="/help">
          Help
        </a>
        <a className="link" href="/login">
          Login
        </a>
      </div>
      </div>
    </Div>
  );
}

export default NavBar;
