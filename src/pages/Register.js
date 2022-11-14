import { useState, useEffect } from "react";
import { Logo } from "../components";
import styled from "styled-components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return <Wrapper className="full-page"></Wrapper>;
};

const Wrapper = styled.main``;
export default Register;
