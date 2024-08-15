import React, { Component } from 'react'

export default class BoxClass extends Component {

    constructor() {
        super();
        this.result = "";
    }

    getResult =()=>{
        if (this.props.title === "Computer" &&
            this.props.result !== "TIE" &&
            this.props.result !== null
          ){
            this.result = this.props.result === "WIN" ? "LOSE" : "WIN";
          }
          else{
            this.result = this.props.result;
          }
    }
  render() {
    return (
        <div className={`box ${this.result}`}>
        <h2>{this.props.title}</h2>
        <img className="item-img" alt="" 
        src={this.props.item ? this.props.item.img : "https://mblogthumb-phinf.pstatic.net/20120711_299/king940_1342016154926eKCVn_JPEG/%C1%D9%B8%AE%BE%F0.jpg?type=w800"} />
        <h2>{this.result ? this.result : "게임을 시작해주세요!"}</h2>
        </div>
    )
  }
}
