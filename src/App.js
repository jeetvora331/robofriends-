import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

class App extends Component {
	constructor() {
		super();
		this.state = {
			state_robots: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ state_robots: users }));
		// this.setState({ state_robots: robots });
	}

	onSearch = (event) => {
		this.setState({ searchField: event.target.value });
	};
	render() {
		const newRobots = this.state.state_robots.filter((rob) => {
			return rob.name
				.toLowerCase()
				.includes(this.state.searchField.toLowerCase());
		});
		console.log(newRobots);
		return (
			<div className="tc">
				<h1 className="f1" style={{ fontFamily: "consolas" }}>
					RoboFriends
				</h1>
				<SearchBox onSearch={this.onSearch} />
				<Scroll>
					<CardList var_robots={newRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App;
