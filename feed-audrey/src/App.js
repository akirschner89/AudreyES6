import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child1 from "./component/Child1";
import Child2 from "./component/Child2";
import Child3 from "./component/Child3";


class AudreyII extends Component {

  constructor(props) {
    super(props);
    this.state = {consumed: 0};
    this.feedAudreyII = this.feedAudreyII.bind(this)
  };

    componentDidUpdate(prevProps, prevState) {
      if (this.state.consumed !== 0) {
        console.log("Updated");
        console.log("Previous state:", prevState);
        console.log("Current state:", this.state);
      }
      else {
        alert("You have done well. AudreyII is very full!");
      }
    };

    feedAudreyII(food) {
      let newConsumed = this.state.consumed + food;
      if (newConsumed > 500) {
        this.setState({consumed: 0});
      } else {
        this.setState({consumed: newConsumed});
      }
    };
  

  render() {
    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h2>Feed Me AudreyII!</h2>
            <p>
              <em>Click on AudreyII's Children to Feed Her</em>
            </p>
          </div>
          <div className="col-md-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">AudreyII</h3>
              </div>
              <div className="panel-body text-center">

                <h1>
                  Food Consumed: {this.state.consumed}
                </h1>
                <img alt="AudreyII" src="https://media.giphy.com/media/pBj0EoGSYjGms/giphy.gif" />

              </div>
            </div>

          </div>

          <div className="col-md-4">

            {/* Included Child1, give it access to the feedAudreyII function */}
            <Child1 feedAudreyII={this.feedAudreyII} />

          </div>

          <div className="col-md-4">

            {/* Included Child2, give it access to the feedAudreyII function */}
            <Child2 feedAudreyII={this.feedAudreyII} />

          </div>

          <div className="col-md-4">

            {/* Included Child3, give it access to the feedAudreyII function */}
            <Child3 feedAudreyII={this.feedAudreyII} />

          </div>

        </div>

      </div>
    );
  }
};

export default AudreyII;
