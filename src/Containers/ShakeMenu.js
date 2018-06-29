import React, { Component } from "react";
// import styled from "styled-components";
import DisplayItem from "../Components/DisplayItem";
import axios from "axios";

export default class ShakeMenu extends Component {
  state = {
    shakes: null
  };
  // componentDidMount() {
  //   axios
  //     .get("/Menu/Burgers")
  //     .then(response => this.setState({ burgers: respsonse.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    // const burgers = { ...this.state.burgers }.map(el => (
    //   <DisplayItem
    //     imageName={el.image}
    //     burgerName={el.name}
    //     burgerDescription={el.description}
    //     burgerPrice={el.price}
    //   />
    // ));
    return (
      <ul>
        {/* {burgers} */}
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
        <DisplayItem
          imageName="shake"
          burgerName="the thick shake"
          burgerDescription=" doloribus.Impedit, voluptatum eum aut quis consequuntur nihil dolorem. Beatae temporibus, odit vitae at laborum aspernatur cumque commodi voluptas"
        />
      </ul>
    );
  }
}
