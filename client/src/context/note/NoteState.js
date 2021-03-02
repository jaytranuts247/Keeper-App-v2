import React, { useReducer } from "react";
import axios from "axios";
import NoteContext from "./noteContext";
import noteReducer from "./noteReducer";

import {
	GET_NOTES,
	ADD_NOTE,
	DELETE_NOTE,
	UPDATE_NOTE,
	CLEAR_NOTES,
	SET_CURRENT,
	CLEAR_CURRENT,
	FILTER_NOTES,
	NOTE_ERROR,
	CLEAR_FILTER,
} from "../types";

// Load note
export const getNotes = async (dispatch) => {
	try {
		const res = await axios.get("/api/notes");
		dispatch({ type: GET_NOTES, payload: res.data });
	} catch (err) {
		console.log("Get Note Error", err);
		dispatch({
			type: NOTE_ERROR,
			payload: err.response,
		});
	}
};

// add note
export const addNote = async (dispatch, note) => {
	const config = {
		headers: {
			Content_Type: "application/json",
		},
	};

	try {
		const res = await axios.post("/api/notes", note, config);
		dispatch({ type: ADD_NOTE, payload: res.data });
	} catch (err) {
		console.log("error adding note");
		dispatch({ type: NOTE_ERROR, payload: err });
	}
};

// update note
export const updateNote = async (dispatch, note) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	try {
		const res = await axios.put(`/api/notes/${note.id}`, note, config);
		dispatch({ type: UPDATE_NOTE, payload: res.data });
	} catch (err) {
		console.log("error updating note", err);
		dispatch({ type: NOTE_ERROR, payload: err.response });
	}
};

// delete note
export const deleteNote = async (dispatch, id) => {
	try {
		await axios.delete(`/api/notes/${id}`);
		dispatch({ type: DELETE_NOTE, payload: id });
	} catch (err) {
		console.log("Error Deleting messgae");
		dispatch({ type: NOTE_ERROR, payload: err.response.msg });
	}
};

// filtered note
export const filterNote = (dispatch, text) => {
	dispatch({ type: FILTER_NOTES, payload: text });
};
// clear filter
export const clearFilter = (dispatch) => {
	dispatch({ type: CLEAR_FILTER });
};

export const setCurrent = (dispatch, note) => {
	dispatch({ type: SET_CURRENT, payload: note });
};

export const clearCurrent = (dispatch) => {
	dispatch({ type: CLEAR_CURRENT });
};

export const clearNote = (dispatch) => {
	dispatch({ type: CLEAR_NOTES });
};
const NoteState = (props) => {
	const initialState = {
		notes: null,
		current: null,
		filtered: null,
		error: null,
	};

	const [state, dispatch] = useReducer(noteReducer, initialState);

	return (
		<NoteContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{props.children}
		</NoteContext.Provider>
	);
};

export default NoteState;
