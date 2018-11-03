import React from 'react';
import MemoryGame from './MemoryGame';
import { connect } from 'react-redux';

class DashboardPage extends React.Component {

  state = {
    gameStarted: false
  }

  handleStart = () => {
    this.setState({ gameStarted: true });
  }

  handleEnd = () => {
    this.setState({ gameStarted: false });
  }

  render() {
    console.log(this.props.highScore);
    if (!this.state.gameStarted) {
      return (
        <div className="dashboard-page">
          <button className="button" onClick={this.handleStart}>Start Game</button>
          <p>Your high score is {this.props.highScore}</p>
        </div>
      );
    }
    return (
      <div className="dashboard-page">
        <MemoryGame handleEnd={this.handleEnd} />
        <button className="button" onClick={this.handleEnd}>End Game</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  highScore: state.game.highScore
});

export default connect(mapStateToProps)(DashboardPage);
