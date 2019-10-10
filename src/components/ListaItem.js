import React, { Component } from 'react'
// import '../style/myStyle.css'
import '../style/_main.scss'
import { Link } from 'react-router-dom';
// import { Edit } from '@material-ui/icons';


export default class ListaItem extends Component {
    render() {
        return (
            <div className="content">
                <div className="header">
                    <div className="circle" >
                        <h1 className="list-id">{this.props.id}</h1>
                    </div>
                    <div>
                        <p className="title">{this.props.title}</p>
                    </div>
                    <div >

                        <Link className="btn" to={{ pathname: "/card", state: { id: this.props.id, title: this.props.title, body: this.props.body } }}>
                            Edit
                        </Link>

                    </div>
                </div>
                <div>
                    <img className="wallpaper" src="https://source.unsplash.com/1600x900/?nature" />
                </div>
                <div style={{ padding: "10px" }}>
                    <p className="body">{this.props.body}</p>
                </div>
            </div>
        )
    }
}
