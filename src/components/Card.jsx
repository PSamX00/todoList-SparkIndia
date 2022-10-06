import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../css/card.css";

export const Card = ({ title, description, onDeleteHandler, id, tags }) => {
	return (
		<div className='todoCard'>
			<button
				onClick={() => {
					onDeleteHandler(id);
				}}
				className='deleteButton'
			>
				<CloseIcon />
			</button>{" "}
			<div className='title'>{title}</div>
			<p className='description'>{description}</p>
			<div className='tags'>
				{tags?.map((items) => (
					<span className='tagsName'>{items}</span>
				))}
			</div>
		</div>
	);
};
