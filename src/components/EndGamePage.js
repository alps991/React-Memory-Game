import React from 'react';

class EndGamePage extends React.Component {
    render() {
        return (
            <div>
                You made it to level {this.props.level}
            </div>
        );
    }
}

export default EndGamePage;