import React from 'react';
import AnswerForm from './AnswerForm';
import EndGamePage from './EndGamePage';
import { connect } from 'react-redux';
import { setHighScore } from '../actions/game';

class MemoryGame extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            level: 1,
            input: false,
            currString: this.generateString(1)
        };

        setTimeout(() => {
            this.setState({ input: true });
        }, 2000);
    }

    generateString = (level) => {
        let newString = "";
        for (let i = 0; i < level + 3; i++) {
            newString += Math.floor(Math.random() * 10).toString();
        }
        return newString;
    }

    checkAnswer = (input) => {
        if (input === this.state.currString) {
            this.setState((prevState) => ({
                level: prevState.level + 1,
                input: false,
                currString: this.generateString(prevState.level + 1),
                gameOver: false
            }));
            setTimeout(() => {
                this.setState({ input: true });
            }, 2000);
        } else {
            this.setState({ gameOver: true });
            this.props.setHighScore(this.state.level);
        }
    }

    render() {
        if (!this.state.input) {
            return (
                <div className="content-container">
                    {this.state.currString}
                </div>
            );
        }
        if (this.state.gameOver) {
            return (
                <EndGamePage level={this.state.level} />
            );
        }
        return (
            <AnswerForm checkAnswer={this.checkAnswer} />
        );

    }
}

const mapDispatchToProps = (dispatch) => ({
    setHighScore: (level) => dispatch(setHighScore(level))
});

export default connect(undefined, mapDispatchToProps)(MemoryGame);