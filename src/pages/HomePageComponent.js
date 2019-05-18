import React, { Component } from 'react';

class Home extends Component {
  exampleMethid() {
    console.log('Example method');
  }

  render() {
    return (
      <div>
        <h1>My home page</h1>
        <p>content</p>
        <button onClick={() => this.exampleMethod()}>Click me</button>
      </div>
    );
  }
}

export default Home;
