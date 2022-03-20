import React, { Component } from 'react';
import Row from './components/Row';
import './App.css';
import './styles/Table.css';

class App extends Component {
  constructor(props) {
    super(props);
    // our table with positions of pieces
    let positions = new Array(8);
    for(let i = 0; i < 8; i++) {
      positions[i] = new Array(8);
    }
    // 0 - black
    // 1 - white
    positions[3][3] = 1;
    positions[3][4] = 0;
    positions[4][3] = 0;
    positions[4][4] = 1;

    this.state = {
      array: positions,
      size: 8,
      black_turn: true,
      gameOver: false
    };

    // check for availability of move
    this.handleClick = this.handleClick.bind(this);
    // change the color of eaten pieces
    this.checkMove = this.getEatenPieces.bind(this);
  }

  getEatenPieces(i, j, apply, black_turn) {
    let newArray = [...this.state.array];
    let first = black_turn === undefined ? (~~!this.state.black_turn) :(~~!black_turn);
    let second = ~~!first;
    let firstX, firstY;
    let moved = false;
    let foundMove = false;

    // step right
    let foundFirst = false;
    let column = j;
    while (column > 0) {
      column--;
      if(newArray[i][column] !== second){
        if(newArray[i][column] === first) {
          foundFirst = true;
          firstX = i;
          firstY = column;
        }
        break;
      }
    }
    if(foundFirst && firstY < j-1) {
      if (!apply) {
        return {
          foundMove:true, moved:false
        };
      }
      for(let column = firstY+1; apply && column < j; column++) {
        newArray[i][column] = first;
        moved = true;
      }
      if(apply && newArray[i][j] !== first) {
        newArray[i][j] = first;
      }
    }

    // step left
    foundFirst = false;
    column = j;
    while (column < 7) {
      column++;
      if(newArray[i][column] !== second){
        if(newArray[i][column] === first) {
          foundFirst = true;
          firstX = i;
          firstY = column;
        }
        break;
      }
    }
    if(foundFirst && firstY > j+1) {
      if (!apply) {
        return {foundMove:true, moved:false};
      }
      for(let column = firstY-1; apply && column > j; column--) {
        newArray[i][column] = first;
        moved = true;
      }
      if(apply && newArray[i][j] !== first) {
        newArray[i][j] = first;
      }
    }

    // step up
    foundFirst = false;
	  var row = i;
	  while (row < 7) {
      row++;
      if(newArray[row][j] !== second){
        if(newArray[row][j] === first) {
          foundFirst = true;
          firstX = row;
          firstY = j;
        }
        break;
      }
	  }
    if(foundFirst && firstX > i+1) {
      if (!apply) {
        return {foundMove:true, moved:false};
      }
      for(let row = firstX-1; apply && row > i; row--) {
        newArray[row][j] = first;
        moved = true;
      }
      if(apply && newArray[i][j] !== first) {
        newArray[i][j] = first;
      }
    }

    // step down
    foundFirst = false;
    row = i;
    row = i;
    while (row > 0) {
      row--;
      if(newArray[row][j] !== second){
        if(newArray[row][j] === first) {
          foundFirst = true;
          firstX = row;
          firstY = j;
        }
        break;
      }
    }
    if(foundFirst && firstX < i-1) {
      if (!apply) {
        return {foundMove:true, moved:false};
      }
      for(let row = firstX+1; apply && row < i; row++) {
        newArray[row][j] = first;
        moved = true;
      }
      if(apply && newArray[i][j] !== first) {
        newArray[i][j] = first;
      }
    }

    // step up right
    foundFirst = false;
    row = i;
    column = j;
    while (row < 7 && column > 0) {
      row++;
      column--;
      if(newArray[row][column] !== second){
        if(newArray[row][column] === first) {
          foundFirst = true;
          firstX = row;
          firstY = column;
        }
        break;
      }
    }
    if(foundFirst && firstX > i+1 && firstY < j+1) {
      if (!apply) {
        return {foundMove:true, moved:false};
      }
      for(let row = firstX-1, column = firstY+1; apply && row > i && column < j; row--, column++) {
        newArray[row][column] = first;
        moved = true;
      }
      if(apply && newArray[i][j] !== first) {
        newArray[i][j] = first;
      }
    }

    // step up left
    foundFirst = false;
    row = i;
    column = j;
    while (row < 7 && column < 7) {
      row++;
      column++;
      if(newArray[row][column] !== second){
        if(newArray[row][column] === first) {
          foundFirst = true;
          firstX = row;
          firstY = column;
        }
        break;
      }
    }
    if(foundFirst && firstX > i+1 && firstY > j+1) {
      if (!apply) {
        return {foundMove:true, moved:false};
      }
      for(let row = firstX-1, column = firstY-1; apply && row > i && column > j; row--, column--) {
        newArray[row][column] = first;
        moved = true;
      }
      if(apply && newArray[i][j] !== first) {
        newArray[i][j] = first;
      }
    }


    // step down left
    foundFirst = false;
    row = i;
    column = j;
    while (row > 0 && column < 7) {
      row--;
      column++;
      if(newArray[row][column] !== second){
        if(newArray[row][column] === first) {
          foundFirst = true;
          firstX = row;
          firstY = column;
        }
        break;
      }
    }
    if(foundFirst && firstX < i-1 && firstY > j+1) {
      if (!apply) {
        return {foundMove:true, moved:false};
      }
      for(let row = firstX+1, column = firstY-1; apply && row < i && column > j; row++, column--) {
        newArray[row][column] = first;
        moved = true;
      }
      if(apply && newArray[i][j] !== first) {
        newArray[i][j] = first;
      }
    }

    // step down right
    foundFirst = false;
    row = i;
    column = j;
    while (row > 0 && column > 0) {
      row--;
      column--;
      if(newArray[row][column] !== second){
        if(newArray[row][column] === first) {
          foundFirst = true;
          firstX = row;
          firstY = column;
        }
        break;
      } 
    }
    if(foundFirst && firstX < i-1 && firstY < j-1) {
      if (!apply) {
        return {foundMove:true, moved:false};
      }
      for(let row = firstX+1, column = firstY+1; apply && row < i && column < j; row++, column++) {
        newArray[row][column] = first;
        moved = true;
      }
      if(apply && newArray[i][j] !== first) {
        newArray[i][j] = first;
      }
    }

    if(apply) {
      this.setState({
        array: newArray
      });
    }
    return {foundMove: foundMove, moved: moved};
  }

  handleClick(i, j) {
    if(this.state.array[i][j] !== undefined) {
      return;
    }

    let moved = this.getEatenPieces(i, j, true).moved;
    let black_turn = this.state.black_turn;
    if(moved) {
      let hasMove = false;
      for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
          if(this.state.array[i][j] === undefined) {
            if(this.getEatenPieces(i, j, false, !black_turn).foundMove) {
              hasMove = true;
              break;
            }
          }
        }
        // if the move was made, move goes to the other player
        if(hasMove) {
          this.setState({black_turn: !black_turn});
          break;
        }
      }
      // if the move can't be made, move goes to the other player
      if(!hasMove) {
        for(let i = 0; i < 8; i++) {
          for(let j = 0; j < 8; j++) {
            if(this.state.array[i][j] === undefined) {
              if(this.getEatenPieces(i, j, false).foundMove) {
                hasMove = true;
                break;
              }
            }
          }
          if(hasMove) {
            break;
          }
        }
        // if the move can't be made by both of players, game over
        if(!hasMove) {
          this.setState({gameOver: true});
        }
      }
    }
  }
  render() {
    return (
      <div>
        <div className="table">
          <Row over={this.state.gameOver} key={0} i={0} handleClick={this.handleClick} array={this.state.array[0]} />
          <Row over={this.state.gameOver} key={1} i={1} handleClick={this.handleClick} array={this.state.array[1]} />
          <Row over={this.state.gameOver} key={2} i={2} handleClick={this.handleClick} array={this.state.array[2]} />
          <Row over={this.state.gameOver} key={3} i={3} handleClick={this.handleClick} array={this.state.array[3]} />
          <Row over={this.state.gameOver} key={4} i={4} handleClick={this.handleClick} array={this.state.array[4]} />
          <Row over={this.state.gameOver} key={5} i={5} handleClick={this.handleClick} array={this.state.array[5]} />
          <Row over={this.state.gameOver} key={6} i={6} handleClick={this.handleClick} array={this.state.array[6]} />
          <Row over={this.state.gameOver} key={7} i={7} handleClick={this.handleClick} array={this.state.array[7]} />
        </div>
      </div>
    );
  }
}

export default App;