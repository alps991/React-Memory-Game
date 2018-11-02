import React from 'react';
import MemoryGame from './MemoryGame';

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
    if (!this.state.gameStarted) {
      return (
        <div className="dashboard-page">
          <button className="button" onClick={this.handleStart}>Start Game</button>
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

export default DashboardPage;
