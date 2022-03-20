import React, { Component } from 'react';
import '../styles/Tile.css';

class Tile extends Component {
  render() {
    let over = this.props.over ? 'over' : '';
    if (this.props.value === 0) {
      return (
        <div className="tile black" onClick={() => this.props.handleClick(this.props.i, this.props.j)}>
          <div></div>
        </div>
      );
    } else if (this.props.value === 1) {
      return (
        <div className="tile white" onClick={() => this.props.handleClick(this.props.i, this.props.j)}>
          <div></div>
        </div>
      );
    }
    return (<div className={"tile " + over} onClick={() => this.props.handleClick(this.props.i, this.props.j)}></div>);
  }
}

export default Tile;