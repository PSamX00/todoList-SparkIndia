import React, { useContext } from "react";
import LocalContext from "../context/LocalContext";
import { Card } from "./Card";
import { InputForm } from "./childcomponents/InputForm";
import "../css/todo.css";
import { Navbar } from "./Navbar";
import AddIcon from "@mui/icons-material/Add";

export const Todo = () => {
	const {
		todo,
		setTodo,
		taskArray,
		setTaskArray,
		setTaskArrayCopy,
		error,
		setError,
	} = useContext(LocalContext);

	const handleOnChange = (name, value) => {
		if (name === "tags") {
			let tags_list = value.split(",");

			setTodo((prevState) => {
				return { ...prevState, tags: tags_list };
			});
		} else {
			setTodo({ ...todo, [name]: value });
		}
	};

	const handleAdd = () => {
		if (todo.title && todo.title.trim().length) {
			setTaskArray([...taskArray, todo]);
			setError(false);
		} else {
			setError(!error);
		}

		setTodo({
			title: "",
			description: "",
			tags: [],
		});

		setTaskArrayCopy([...taskArray, todo]);
	};

	const handleDelete = (id) => {
		let removeTask = taskArray.filter((_, index) => {
			return index !== id;
		});

		setTaskArray(removeTask);
	};

	return (
		<div className='Container'>
			<h1>TODO LIST</h1>
			<div className='todoInput'>
				<InputForm
					type={"text"}
					placeholder={"Enter Task Title"}
					name={"title"}
					value={todo.title}
					handleInputChange={handleOnChange}
				/>
				{error && (
					<p style={{ color: "red" }}>Title is required</p>
				)}
				<InputForm
					type={"text"}
					placeholder={"Enter Task Description"}
					name={"description"}
					value={todo.description}
					handleInputChange={handleOnChange}
				/>{" "}
				<InputForm
					type={"text"}
					placeholder={"Enter Task tags"}
					name={"tags"}
					value={todo.tags.join(",")}
					handleInputChange={handleOnChange}
				/>
				<p className='caution'>Enter tags separated by comma</p>
				<button onClick={handleAdd}>
					<AddIcon />
				</button>
			</div>
			<div className='navbarDiv'>
				<p>Search your Tasks</p>
				<Navbar />
			</div>
			<div className='CardsSection'>
				{taskArray.map((items, index) => (
					<Card
						key={index}
						id={index}
						title={items.title}
						description={items.description}
						tags={items.tags}
						onDeleteHandler={handleDelete}
					/>
				))}
			</div>
		</div>
	);
};
