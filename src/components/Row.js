import React, { Component } from 'react';
import '../styles/Row.css';
import '../styles/Tile.css';
import Tile from './Tile';

class Row extends Component {
  render() {
    return (<div className="row">
      <Tile over={this.props.over} key="0" i={this.props.i} j={0} handleClick={this.props.handleClick} value={this.props.array[0]} />
      <Tile over={this.props.over} key="1" i={this.props.i} j={1} handleClick={this.props.handleClick} value={this.props.array[1]} />
      <Tile over={this.props.over} key="2" i={this.props.i} j={2} handleClick={this.props.handleClick} value={this.props.array[2]} />
      <Tile over={this.props.over} key="3" i={this.props.i} j={3} handleClick={this.props.handleClick} value={this.props.array[3]} />
      <Tile over={this.props.over} key="4" i={this.props.i} j={4} handleClick={this.props.handleClick} value={this.props.array[4]} />
      <Tile over={this.props.over} key="5" i={this.props.i} j={5} handleClick={this.props.handleClick} value={this.props.array[5]} />
      <Tile over={this.props.over} key="6" i={this.props.i} j={6} handleClick={this.props.handleClick} value={this.props.array[6]} />
      <Tile over={this.props.over} key="7" i={this.props.i} j={7} handleClick={this.props.handleClick} value={this.props.array[7]} />
    </div>);
  }
}

export default Row;