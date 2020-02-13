import React from "react";
import Repo from "./Repo";

export default function Repos(props) {
	function repoIterator() {
		let array = [];
		for (let i in props.repos) {
			let repo = props.repos[i];
			array.push(repo);
		}
		return array;
	}
	return (
		<div className="repos-container">
			{repoIterator().map(repo => (
				<Repo repo={repo} />
			))}
		</div>
	);
}
