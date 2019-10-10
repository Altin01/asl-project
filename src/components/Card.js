import React, { Component } from 'react'
import { withRouter } from 'react-router';
import axios from 'axios'


export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.location.state.title,
            body: this.props.location.state.body
        }
    }

    handleSubmit(data) {
        axios.put(`posts/${this.props.location.state.id}`)
            .then(res => {
                alert("Card Edit with success");
                this.props.history.push("/");
            })
            .catch(err => console.log(err));
    }

    render() {

        // const { title, body } = this.props.location.state;
        return (
            <div className="card-content">
                {/* <h1>{props.location.state.id}</h1> */}

                <p>Title</p>
                <textarea className="text-input" rows="4" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })}></textarea>
                <p>Body</p>
                <textarea className="text-input" rows="4" value={this.state.body} onChange={(event) => this.setState({ body: event.target.value })}></textarea>
                <button onClick={() => this.handleSubmit(this.state)} className="edit-button" >Edit Post</button>

            </div>
        )
    }
}
