import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Home extends Component {
  exampleMethod() {
    console.log('Example method');
  }

  head() {
    return (
      <Helmet>
        <title>My title</title>
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <h1>My home page</h1>
        <p>content</p>
        <button onClick={() => this.exampleMethod()}>Click me</button>
      </div>
    );
  }
}

export default Home;
