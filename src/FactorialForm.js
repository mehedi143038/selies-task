import React, { Component } from 'react';

class FactorialForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            comment: '',
            topic: 'react'
        }
    }

    handleUsernameChange = event =>{
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = event =>{
        this.setState({
            comment: event.target.value
        })
    }

    handleTopicChange = event =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const {username, comment, topic} =this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username: </label>
                        <input 
                            type="text"
                            value={username}
                            onChange={this.handleUsernameChange}
                        />
                    </div><br/>

                    <div>
                        <label>Comment: </label>
                        <textarea 
                            value= {comment}
                            onChange= {this.handleCommentChange}
                        />
                    </div><br/>

                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="vue">Vue</option>
                            <option value="angular">Angular</option>
                        </select>
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default FactorialForm;