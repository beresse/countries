import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="row">
                <input type="text" placeholder="Rechercher un Pays" className="form-control-m" onChange={this.props.onChange}></input>
                <button class="nes-btn" onClick={this.props.onClick}>Rechercher</button>
            </div>
        )
    }
}