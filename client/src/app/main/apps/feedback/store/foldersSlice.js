import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFolders = createAsyncThunk('feedbackApp/folders/getFolders', async () => {
	const response = await axios.get('/api/mail-app/folders');
	const data = await response.data;

	return data;
});

const foldersAdapter = createEntityAdapter({});

export const { selectAll: selectFolders, selectById: selectFolderById } = foldersAdapter.getSelectors(
	state => state.feedbackApp.folders
);

const foldersSlice = createSlice({
	name: 'feedbackApp/folders',
	initialState: foldersAdapter.getInitialState({}),
	reducers: {},
	extraReducers: {
		[getFolders.fulfilled]: foldersAdapter.setAll
	}
});

export default foldersSlice.reducer;
