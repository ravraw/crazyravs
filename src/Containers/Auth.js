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
    padding: 15px;
    margin: 15px;
    display: block;
    border: 1px solid black;
    color: green;
    font-size: 1em;
  }
  > button {
    width: 50%;
    background: green;
    border-radius: 50px;
    align-self: center;
    color: white;
  }
`;

class Auth extends Component {
  state = {
    email: "",
    password: ""
  };

  updateEmail = event => {
    const newEmail = event.target.value;
    this.setState({
      email: newEmail
    });
    console.log(this.state.email);
  };
  updatePassword = event => {
    const newPassword = event.target.value;
    this.setState({
      password: newPassword
    });
    console.log(this.state.password);
  };

  render() {
    return (
      <Form>
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          value={this.state.email}
          onChange={this.updateEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          required
          onChange={this.updatePassword}
        />
        <button>Submit</button>
      </Form>
    );
  }
}

export default Auth;
