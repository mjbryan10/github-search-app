import React, { Component } from "react";

export default class Result extends Component {
	render() {
		return (
			<div className="result-container">
				<input className="result-reset" type="button" value="X" onClick={this.props.resetSearch} />
				<div className="result-header">
					<img src="" alt="" />
					<div className="result-bio">
						<h3>{this.props.searchVal}</h3>
						<p>This is some text about me..</p>
					</div>
				</div>
			</div>
		);
	}
}
