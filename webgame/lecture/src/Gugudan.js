import React, { Component } from "react";

class Gugudan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      result: "",
      value: "",
    };
  }
  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const calcul = this.state.first * this.state.second;
    if (parseInt(this.state.value) === calcul) {
      this.setState({
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        result: `${calcul}은 정답입니다`,
        value: "",
      });
    } else {
      this.setState({
        result: "오답입니다",
        value: "",
      });
    }
  };
  render() {
    return (
      <div>
        <div>
          {this.state.first} 곱하기 {this.state.second}
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            type="number"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>제출</button>
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

export default Gugudan;
