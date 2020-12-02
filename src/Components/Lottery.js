import React, { Component } from 'react';
import Ball from './Ball';
import '../css/Lottery.css';

class Lottery extends Component{
    
    static defaultProps = {
        title:'Lotto',
        maxBalls:6,
        maxNum:40
    }
    constructor(props){
        super(props);
        this.state= {
            arr : Array.from({length: this.props.maxBalls})
        }  
        this.handleClick = this.handleClick.bind(this);
      
    
    }
    
    genRandom(){
         
         this.setState(cur => ({
            arr: cur.arr.map(n => Math.floor(Math.random()*this.props.maxNum + 1))
         }))
    }

    handleClick(){
        this.genRandom();
    }

    render(){
        return (
            <section className="Lottery-component">
                <h1>{this.props.title}</h1>
                {this.state.arr.map(ball => <Ball num={ball} /> )}
                <br></br>
                <button onClick={this.handleClick}>Generate</button>
            </section> 
            
        )
    }
}
export default Lottery;