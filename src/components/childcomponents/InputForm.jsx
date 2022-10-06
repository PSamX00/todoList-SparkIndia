import React, { useContext } from "react";
import LocalContext from "../../context/LocalContext";
import "../../css/input.css";
export const InputForm = ({
	type,
	placeholder,
	value,
	name,
	handleInputChange,
}) => {
	const handleInput = (e) => {
		const itemName = e.target.name;
		const itemValue = e.target.value;

		return handleInputChange(itemName, itemValue);
	};

	return (
		<>
			<input
				className='input'
				type={type}
				placeholder={placeholder}
				value={value}
				name={name}
				onChange={handleInput}
				autoComplete='off'
			/>
		</>
	);
};
