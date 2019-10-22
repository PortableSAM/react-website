import React, { Component } from "react";
import moment from "moment";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    flex-direction: column;
    text-align: center;
    font-size: 2.5em;
  }

  .clock {
    color: #2c3e50;
    font-family: "Acme", sans-serif;
  }
`;

class Clock extends Component {
  state = {
    time: ""
  };

  getTime = async () => {
    const time = await moment().format("LTS");
    this.setState({
      time
    });
  };

  componentDidMount() {
    setInterval(this.getTime, 1000);
  }

  render() {
    const { time } = this.state;
    return (
      <Styles>
        <div className="container">
          <div className="clock">Current time is {time}</div>
        </div>
      </Styles>
    );
  }
}

export default Clock;
