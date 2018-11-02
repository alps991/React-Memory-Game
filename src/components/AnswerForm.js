import React from 'react';

class AnswerForm extends React.Component {

    state = {
        input: ""
    };

    handleChange = (e) => {
        this.setState({ input: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.checkAnswer(this.state.input);
    }

    render() {
        return (
            <div className="content-container">
                Enter this string below:
                <form className="form">
                    <input className="text-input" type="text" onChange={this.handleChange} value={this.state.input} />
                    <button className="button" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default AnswerForm;