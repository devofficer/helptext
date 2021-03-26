import React from 'react';

const FeedbackAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: [
				'/apps/feedback/:userId?'
			],
			component: React.lazy(() => import('./FeedbackApp'))
		}
	]
};

export default FeedbackAppConfig;
