import React, { Component } from "react";
import Result from "./Result";

export default class Results extends Component {
	renderAmount = (n = this.props.userData.length) => {
        let array = [];
        if (n > this.props.userData.length) {
            n = this.props.userData.length
        }
		for (let i = 0; i < n; i++) {
			array.push(this.props.userData.items[i]);
        }
        return array
	};
	render() {
		return (
			<div className="results-container">
				{this.renderAmount(1).map(user => (
					<Result userData={user} resetSearch={this.props.resetSearch} />
				))}
			</div>
		);
	}
}
