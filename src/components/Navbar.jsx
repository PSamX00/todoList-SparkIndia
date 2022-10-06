import React, { useContext } from "react";
import LocalContext from "../context/LocalContext";
import { InputForm } from "./childcomponents/InputForm";
import SearchIcon from "@mui/icons-material/Search";
import "../css/navbar.css";

export const Navbar = () => {
	const { taskArrayCopy, setTaskArrayCopy, setTaskArray } =
		useContext(LocalContext);

	const handleSearchBar = (e) => {
		const searchTask = taskArrayCopy.filter((items, index) => {
			return items.title
				.toLowerCase()
				.includes(e.target.value.toLowerCase());
		});
		setTaskArray(searchTask);
	};

	return (
		<div className='navbar'>
			<SearchIcon
				style={{
					backgroundColor: "orange",
					height: "100%",
					width: "20%",
				}}
			/>
			<input
				type={"text"}
				placeholder={"Search"}
				onChange={handleSearchBar}
			/>
		</div>
	);
};
