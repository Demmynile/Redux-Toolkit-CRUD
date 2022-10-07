import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	
		{id : '1' , name : 'bayo' , email : 'kala'},
		{id : '2' , name : 'kehinde' , email : 'sala'}
]

const userSlice = createSlice({
	name : 'users',
	initialState,
	reducers : {
		addUser: (state , action) => {
			state = state.push(action.payload)
		}
	}


});

export const {addUser} =  userSlice.actions;

export default userSlice.reducer