import React from "react";
import "./card.css";
import { useHistory } from "react-router-dom";
import { Card } from "antd";

import { HeartFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { SEARCH_MOVIE } from "../../store/constants";

const { Meta } = Card;

const CustomCard = (props: any) => {
	let history = useHistory();
	const dispatch = useDispatch();

	const { value }: any = props;

	const viewDetails = (data: any) => {
		dispatch({ type: SEARCH_MOVIE, payload: data });

		history.push(`/details?i=${data}`);
	};

	return (
		<div className="container" onClick={() => viewDetails(value.imdbID)}>
			<img
				src={value.Poster}
				alt="Notebook"
				style={{ width: "100%", height: "100%" }}
			/>
			<div className="content">
				<div>
					<strong>{value.Title}</strong>
					<p>{value.Year}</p>
				</div>
			</div>
		</div>
		// {/* <Card
		// 	className="custom-card"
		// 	cover={
		// 		<img className="container photo" alt="example" src={value.Poster} />
		// 	}
		// 	actions={[<HeartFilled />]}
		// >
		// 	<Meta title={value.Title} />

		// 	<Meta description={value.Year} />
		// </Card> */}
	);
};

export default CustomCard;
