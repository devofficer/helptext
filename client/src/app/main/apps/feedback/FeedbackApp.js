import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import MailDetails from './mail/MailDetails';
import MailToolbar from './mail/MailToolbar';
import MailList from './mails/MailList';
import MailsToolbar from './mails/MailsToolbar';
import reducer from './store';

function FeedbackApp(props) {

	const pageLayout = useRef(null);
	const routeParams = useParams();

	return (
		<FusePageCarded
			classes={{
				root: 'w-full',
				content: 'flex flex-col',
				header: 'items-center min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			contentToolbar={routeParams.userId ? <MailToolbar /> : <MailsToolbar />}
			content={routeParams.userId ? <MailDetails /> : <MailList />}
			ref={pageLayout}
			innerScroll
		/>
	);
}

export default withReducer('feedbackApp', reducer)(FeedbackApp);
