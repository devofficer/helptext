import React from 'react';

const PremiumConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/premium',
			component: React.lazy(() => import('./Premium'))
		}
	]
};

export default PremiumConfig;
