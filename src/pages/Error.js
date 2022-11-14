import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/images/not-found.svg";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div className="">
        <img src={img} alt="not found" />
        <h3>ohh! page not found</h3>
        <p>we cant seem to find the page you're looking for </p>
        <Link to="/"> back home</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  text-align: center;

  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  algn-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Error;
