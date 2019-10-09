import React, { Component } from 'react'
// import '../style/myStyle.css'
import '../style/_main.scss'

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
                    <div>
                        <button>Edit</button>
                    </div>
                </div>
                {/* <div className="title">
                    <h1>{this.props.title}</h1>

                </div>

                <div className="primary">

                    <h5 className="body">{this.props.body}</h5>
 
                </div> */}
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
