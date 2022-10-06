import { useState } from "react";
import LocalContext from "./LocalContext";

const ContextState = ({ children }) => {
	const [todo, setTodo] = useState({
		title: "",
		description: "",
		tags: [],
	});
	const [taskArray, setTaskArray] = useState([]);
	const [taskArrayCopy, setTaskArrayCopy] = useState([]);
	const [error, setError] = useState(false);

	return (
		<LocalContext.Provider
			value={{
				todo,
				setTodo,
				taskArray,
				setTaskArray,
				taskArrayCopy,
				setTaskArrayCopy,
				error,
				setError,
			}}
		>
			{children}
		</LocalContext.Provider>
	);
};

export default ContextState;
