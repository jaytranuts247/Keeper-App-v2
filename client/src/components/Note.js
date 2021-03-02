import React, { useState, useEffect, useContext } from "react";
// import { useTransition, useSpring, animated } from "react-spring";
import { deleteNote, updateNote } from "../context/note/NoteState";

import DeleteIcon from "@material-ui/icons/Delete";
import SendIcon from "@material-ui/icons/Send";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import NoteContext from "../context/note/noteContext";

function Note(props) {
	const [IsEdit, setIsEdit] = useState(false);
	const { dispatch: noteDispatch } = useContext(NoteContext);
	const [note, setNote] = useState({
		id: "",
		title: "",
		content: "",
	});

	function AutoResize() {
		this.style.height = "auto";
		this.style.height = this.scrollHeight + "px";
	}

	function setAutoResize() {
		const textarea1 = document.querySelector("#auto-resizing1");
		console.log(textarea1);
		textarea1.addEventListener("input", AutoResize, false);
	}

	useEffect(() => {
		const newNote = {
			id: props.id,
			title: props.title,
			content: props.content,
		};
		setNote(newNote);
		// updateNote(noteDispatch, note);
		if (IsEdit) setAutoResize();
	}, [IsEdit, props.content, props.id, props.title]);

	const onDelete = (e) => {
		e.preventDefault();
		console.log("Delete iTem");
		deleteNote(noteDispatch, note.id);
	};

	const onChange = (e) => {
		const { name, value } = e.target;
		setNote((prevNote) => {
			return { ...prevNote, [name]: value };
		});
	};

	const onEditNote = () => {
		updateNote(noteDispatch, note);
		setIsEdit(false);
	};

	const onEdit = () => {
		return (
			<div className="note">
				<input
					type="text"
					name="title"
					value={note.title}
					onChange={onChange}
				/>
				<textarea
					id="auto-resizing1"
					type="text"
					name="content"
					value={note.content}
					onChange={onChange}
				/>
				<button onClick={onEditNote}>
					<SendIcon />
				</button>
				<button onClick={() => setIsEdit(false)}>
					<CloseIcon />
				</button>
			</div>
		);
	};

	const onShow = () => {
		return (
			<div className="note">
				<h1>{note.title}</h1>
				<p>{note.content}</p>
				<button onClick={onDelete}>
					<DeleteIcon />
				</button>
				<button onClick={() => setIsEdit(true)}>
					<EditIcon />
				</button>
			</div>
		);
	};

	return IsEdit ? onEdit() : onShow();
}

export default Note;
