import React, {Component} from 'react';

class Child1 extends Component {

    constructor(props) {
        super(props);
        this.state = {food: 25};
        this.handleClicks = this.handleClicks.bind(this);
    };

        handleClicks() {
            this.props.feedAudreyII(this.state.food);
        };
   
    
    render() {
        return (
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Mmm Mmm Good!</h3>
              </div>
              <div className="panel-body text-center">
      
                <h3>Human Flesh</h3>
                <img
                  alt="Scared Girls"
                  src="http://www.toxel.com/wp-content/uploads/2011/10/fear08.jpg"
                  width="100%"
                  onClick={this.handleClicks}
                />
              </div>
            </div>
          );
    } 
};

export default Child1;
