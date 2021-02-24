import React, { useState } from "react";
import { XMasonry, XBlock } from "react-xmasonry";

import Note from "./Note";
import AddNote from "./AddNote";
import InitialNotes from "./notes";

const Home = () => {
	const [notes, setNotes] = useState(InitialNotes);
	// const [isDelete, setIsDelete] = useState(false);

	function addNoteHandler(note) {
		setNotes((prevNotes) => {
			return [...prevNotes, note];
		});
	}

	function onEditNote(idx, toUpdateNote) {
		const newNotes = [...notes];
		newNotes[idx] = toUpdateNote;
		setNotes(newNotes);
	}
	function deleteNote(id) {
		setNotes((notes) =>
			notes.filter((note, idx) => {
				return note.key !== id;
			})
		);
	}
	return (
		<>
			<AddNote addNoteHandler={addNoteHandler} />
			<div className="container">
				<XMasonry>
					{notes.map((note, index) => {
						return (
							<XBlock key={note.key}>
								<Note
									id={note.key}
									title={note.title}
									content={note.content}
									deleteNote={deleteNote}
									onEditNote={onEditNote}
								/>
							</XBlock>
						);
					})}
				</XMasonry>
			</div>
		</>
	);
};

export default Home;
