import React, {Component} from 'react';

class Child3 extends Component {

    constructor(props) {
        super(props);
        this.state = {food: 6};
        this.handleClicks = this.handleClicks.bind(this);
    };
    
            handleClicks() {
                this.props.feedAudreyII(this.state.food);
            };
    
    render() {
        return (
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">NOMMMSSSS</h3>
              </div>
              <div className="panel-body text-center">
      
                <h3>Yoda Poo</h3>
                <img
                  alt="Scared Girls"
                  src="http://afcsoyfoods.com/media/2014/02/afc-organic-tofu-firm-14oz.png"
                  width="100%"
                  onClick={this.handleClicks}
                />
              </div>
            </div>
          );
    } 
};

export default Child3;