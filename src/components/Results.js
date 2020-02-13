import React, { Component } from 'react'
import Result from './Result';

export default class Results extends Component {
    renderAmount = (n = this.props.userData.length) => {
        for (let i = 0; i < n; i++) {
            return <Result userData={this.props.userData.items[i]} />
        }
    }
    render() {
        return (
        <div className="results-container">
            {this.renderAmount(1)}
        </div>
        )
    }
}
