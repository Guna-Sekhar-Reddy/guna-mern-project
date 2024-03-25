import styled from "styled-components";

import Wrapper from "../assets/wrappers/LandingPage";

import main from "../assets/images/main.svg";

import logo from "../assets/images/logo.svg";

import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job<span>tracking</span>app
          </h1>
          <p>
            hello aspirants! there is a wounderful job for u, with better
            salary. I'm baby single-origin coffee freegan chillwave, humblebrag
            salvia locavore gochujang blog cred glossier everyday carry marfa
            hoodie sustainable. Iceland direct trade big mood neutral milk hotel
            everyday carry, lo-fi schlitz jean shorts live-edge 3 wolf moon XOXO
            gluten-free crucifix. Seitan gatekeep cronut hammock chicharrones
            artisan forage.
          </p>

          <Link to="/register" className="btn register-link">
            Register
          </Link>

          <Link to="/login" className="btn">
            Login/Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

/*const StyledBtn = styled.button`
  font-size: 1.5rem;
  background: red;
  color: white;
`;
*/
/*
const Landing = () => {
  return (
    <Wrapper>
      <h1>Landing Page</h1>
      <div className="content">Some content</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: green;
  h1 {
    color: white;
  }
  .content {
    background: blue;
    color: yellow;
  }
`;
*/
export default Landing;
