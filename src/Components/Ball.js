import React, { Component } from 'react';

import '../css/Ball.css'

class Ball extends Component{

    render(){
        return(
            <div className="All-inside">
                <div className="All Ball-ind">
                    {this.props.num}
                </div>
            </div>
            
        )
    }

}

export default Ball;