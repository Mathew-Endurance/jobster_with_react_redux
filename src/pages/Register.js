import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import styled from "styled-components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  // toggle registration/login form based on membership
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    console.log(e.target);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className="full-page">
      <form onSubmit={onSubmit} className="form">
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name field */}

        {!values.isMember && (
          <FormRow
            name="name"
            type="text"
            vale="values.name"
            handleChange={handleChange}
          />
        )}
        {/* emailfield */}
        <FormRow
          name="email"
          type="email"
          vale="values.email"
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          name="password"
          type="pasword"
          vale="values.password"
          handleChange={handleChange}
        />

        <button className="btn btn-block" type="submit">
          submit
        </button>
        <p>
          {values.isMember ? "not a member yet ?" : "Already a member?"}
          <button type="submit" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-item: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;
export default Register;
