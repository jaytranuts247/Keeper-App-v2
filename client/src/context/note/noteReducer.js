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

const noteReducer = (state, action) => {
	switch (action.type) {
		case GET_NOTES:
			return {
				...state,
				notes: action.payload,
			};
		case ADD_NOTE:
			return {
				...state,
				notes: [action.payload, ...state.notes],
			};
		case DELETE_NOTE:
			return {
				...state,
				notes: state.notes.filter((note) => note._id !== action.payload),
			};
		case UPDATE_NOTE:
			return {
				...state,
				notes: state.notes.map((note) =>
					note._id === action.payload._id ? action.payload : note
				),
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case FILTER_NOTES:
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null,
			};
		case CLEAR_NOTES:
			return {
				...state,
				notes: null,
				current: null,
				filtered: null,
				error: null,
			};
		case NOTE_ERROR:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default noteReducer;
