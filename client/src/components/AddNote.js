import React, { useState, useRef, useEffect, useContext } from "react";
import HandleClickOutside from "./HandleClickOutside";
import { useSpring, animated } from "react-spring";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import "./animation.css";

import { addNote } from "../context/note/NoteState";
import NoteContext from "../context/note/noteContext";

// var interval = 3000;
const initialNote = { title: "", content: "" };

function AddNote(props) {
	const [note, setNote] = useState(initialNote);
	const [isExpand, setIsExpand] = useState(false);
	const ref = useRef(null); // ref to form div

	const { dispatch: noteDispatch } = useContext(NoteContext);

	const titleAnimation = useSpring({
		opacity: isExpand ? 1 : 0,
		height: isExpand ? "31px" : "0px",
		display: isExpand ? "block" : "none",

		from: {
			opacity: 0,
			height: "0px",
			display: "none",
		},
	});
	const noteAnimation = useSpring({
		height: isExpand ? "77px" : "31px",
		from: {
			height: "31px",
		},
	});

	const onChange = (e) => {
		const { name, value } = e.target;
		setNote((prevNote) => {
			return { ...prevNote, [name]: value };
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		addNote(noteDispatch, note);
		setNote(initialNote);
		setIsExpand(false);
	};

	const onClick = () => setIsExpand(true);

	const Collapse = () => setIsExpand(false);

	HandleClickOutside(ref, Collapse, isExpand);

	// Textarea auto expand

	function AutoResize() {
		this.style.height = "auto";
		this.style.height = this.scrollHeight + "px";
	}
	function setAutoResize() {
		const textarea = document.querySelector("#auto-resizing");
		textarea.addEventListener("input", AutoResize, false);
	}

	useEffect(() => {
		setAutoResize(); // eslint-disable-next-line
	}, []);

	return (
		<div className="for-form">
			<form
				ref={ref}
				onSubmit={onSubmit}
				className="create-note"
				style={noteAnimation}
			>
				<animated.input
					type="text"
					onChange={onChange}
					name="title"
					value={note.title}
					placeholder="Title"
					style={titleAnimation}
				/>

				<animated.textarea
					type="text"
					onChange={onChange}
					onClick={onClick}
					name="content"
					value={note.content}
					placeholder="Add note"
					style={noteAnimation}
					id="auto-resizing"
				/>

				<Zoom in={isExpand}>
					<Fab type="submit">
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default AddNote;
