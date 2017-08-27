import React, {Component} from 'react';

class Child2 extends Component {

    constructor(props) {
        super(props);
        this.state = {food: 12};
        this.handleClicks = this.handleClicks.bind(this);
    };
    
            handleClicks() {
                this.props.feedAudreyII(this.state.food);
            };
    
    render() {
        return (
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Tasty Treats</h3>
              </div>
              <div className="panel-body text-center">
      
                <h3>Yoda Poo</h3>
                <img
                  alt="Scared Girls"
                  src="http://www.cellphonetaskforce.org/wp-content/uploads/2012/01/frog-left.jpg"
                  width="100%"
                  onClick={this.handleClicks}
                />
              </div>
            </div>
          );
    } 
};

export default Child2;