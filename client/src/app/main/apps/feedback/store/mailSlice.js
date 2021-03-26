import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';

export const getMail = createAsyncThunk('feedbackApp/mail/getMail', async params => {
	const response = await axios.get('/api/mail-app/mail', { params });
	const data = await response.data;
	return data;
});

export const updateMail = createAsyncThunk('feedbackApp/mail/updateMail', async (_data, { getState, dispatch }) => {
	const { id } = getState().feedbackApp.mail;

	const response = await axios.post('/api/mail-app/update-mail', { id, ..._data });
	const data = await response.data;

	dispatch(showMessage({ message: 'Mail Saved' }));

	return data;
});

const mailSlice = createSlice({
	name: 'feedbackApp/mail',
	initialState: null,
	reducers: {},
	extraReducers: {
		[getMail.fulfilled]: (state, action) => action.payload,
		[updateMail.fulfilled]: (state, action) => ({
			...state,
			...action.payload
		})
	}
});

export default mailSlice.reducer;
