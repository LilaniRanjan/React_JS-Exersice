import React, {Component} from 'react'

class Forms extends Component{
    constructor(){
        super()
        this.state={
            Username: '',
            Comment: '',
            Topic: 'react'
        }
    }

    HandelUsernameChange =(e)=>{
        this.setState({
            Username: e.target.value
        })
    }

    HandelCommentChange= (e)=>{
        this.setState({
            Comment: e.target.value
        })
    }

    HandelTopicChange= (e)=>{
        this.setState({
            Topic: e.target.value
        })
    }

    HandelFormSubmit= (event)=>{
        alert (`${this.state.Username} --- ${this.state.Comment} --- ${this.state.Topic}`)
        event.preventDefault()

    }

    render(){
        return(
            <div>
                <form onSubmit={this.HandelFormSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.Username} onChange={this.HandelUsernameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.Comment} onChange={this.HandelCommentChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.Topic} onChange={ this.HandelTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>

            </div>
        )
    }
}

export default Forms