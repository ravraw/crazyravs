import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  width: 300px;
  height: 300px;
  background: lightblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > * {
    padding: 5px;
    margin: 5px;
    display: block;
    border:1px solid black;
  }
  >button{
      width:50%;
      background:green:
      
      border-radius:10px;
      align-self:center;
  }
`;

class Auth extends Component {
  render() {
    return (
      <Form>
        <input type="email" name="email" placeholder="email" required />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button>Submit</button>
      </Form>
    );
  }
}

export default Auth;
