import React, { Component } from "react";

export default class Repo extends Component {
	render() {
		let repo = this.props.repo;
		return (
			<div className="repo" key={repo.id}>
                <div>
				<a href={repo.html_url}>{repo.name}</a>
                <p>{repo.description}</p>

                </div>
				<div className="stats-container">
                    <p><i class="fas fa-code-branch"></i>: {repo.forks}</p>
					<p>
						<i class="fas fa-star"></i>: {repo.stargazers_count}
					</p>
					<p>
						<i class="fas fa-eye"></i>: {repo.watchers_count}
					</p>
				</div>
			</div>
		);
	}
}
