import { combineReducers } from '@reduxjs/toolkit';
import folders from './foldersSlice';
import mail from './mailSlice';
import mails from './mailsSlice';

const reducer = combineReducers({
	mails,
	mail,
	folders
});

export default reducer;
