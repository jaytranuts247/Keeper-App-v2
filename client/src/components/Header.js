import React, { useContext } from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import NoteContext from "../context/note/noteContext";
import { clearNote } from "../context/note/NoteState";

function Header() {
	const { isAuthenticated, user, logoutUser } = useContext(AuthContext);
	const { dispatch: noteDispatch } = useContext(NoteContext);

	const onLogout = () => {
		logoutUser();
		clearNote(noteDispatch);
	};

	return (
		<header>
			<h1>
				<HighlightIcon />
				Keeper{" "}
			</h1>
			<div>
				{user && isAuthenticated ? (
					<div>
						<h3>
							Welcome <span>{user.name}</span>
						</h3>
						<Link to="/" onClick={onLogout}>
							<h3>Log Out</h3>
						</Link>
					</div>
				) : (
					<div>
						<Link to="/signin">
							<h3>Sign In</h3>
						</Link>
						<Link to="/register">
							<h3>Register</h3>
						</Link>
					</div>
				)}
			</div>
		</header>
	);
}

export default Header;
