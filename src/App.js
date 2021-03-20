import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!!!</h1>

        <hr />

        <h2>I love React!</h2>
        <h2>I great technology!</h2>

        <hr />
        <GreetNameComponent name="Wiktor"/>
        <GreetNameComponent name="Robert"/>
        <GreetNameComponent name="Magda"/>
        <GreetNameComponent name="Joanna"/>
        

        <hr />

        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}
class GreetNameComponent extends React.Component {

  
  render() {
    return (
      <h3>Halo {this.props.name}!</h3>
    )
  }
}
