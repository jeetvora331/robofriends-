import React from "react";

const Card = (props) => {
	const { name, email } = props;
	return (
		<div className="bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5">
			<img
				className="w-70"
				src={`https://robohash.org/${props.id}?resize=width:20,height:20`}
				alt="Robo Fig"
			/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
