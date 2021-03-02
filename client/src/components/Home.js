import React, { useEffect, useState, useContext } from "react";
import { XMasonry, XBlock } from "react-xmasonry";

import Note from "./Note";
import AddNote from "./AddNote";
import AuthContext from "../context/auth/authContext";
import NoteContext from "../context/note/noteContext";

import { getNotes } from "../context/note/NoteState";

const Home = () => {
	const { state: noteState, dispatch: noteDispatch } = useContext(NoteContext);

	const { loadUser, user } = useContext(AuthContext);

	useEffect(() => {
		console.log("load user");
		loadUser();
	}, []);

	useEffect(() => {
		console.log("getting notes from user");
		getNotes(noteDispatch);
	}, [noteDispatch]);

	return (
		<>
			<AddNote />
			<div className="container">
				{user && (
					<XMasonry center responsive smartUpdateCeil={1000}>
						{noteState.notes &&
							noteState.notes.map((note, index) => {
								return (
									<XBlock key={note._id}>
										<Note
											id={note._id}
											title={note.title}
											content={note.content}
										/>
									</XBlock>
								);
							})}
					</XMasonry>
				)}
			</div>
		</>
	);
};

export default Home;
