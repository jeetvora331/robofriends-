import React from "react";
import Card from "./Card";
// import { robots } from "./robots";

const CardList = (props) => {
	// const cardComponent = props.var_robots.map((user, i) => {
	// 	return <Card key={i} id={user.id} name={user.name} email={user.email} />;
	// });
	return (
		<div>
			{/* {cardComponent}; */}
			{props.var_robots.map((user, i) => {
				return (
					<Card key={i} id={user.id} name={user.name} email={user.email} />
				);
			})}
			{/* <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} /> */}
			{/* <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} /> */}
		</div>
	);
};

export default CardList;
