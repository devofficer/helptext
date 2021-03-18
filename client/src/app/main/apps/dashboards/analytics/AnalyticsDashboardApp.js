import FuseAnimate from '@fuse/core/FuseAnimate';
import withReducer from 'app/store/withReducer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import reducer from './store';
import { selectWidgetsEntities, getWidgets } from './store/widgetsSlice';
import Widget5 from './widgets/Widget5';
import Widget9 from './widgets/Widget9';

function AnalyticsDashboardApp(props) {
	const dispatch = useDispatch();
	const widgets = useSelector(selectWidgetsEntities);

	useEffect(() => {
		dispatch(getWidgets());
	}, [dispatch]);

	if (_.isEmpty(widgets)) {
		return null;
	}

	const state = props.route.component.state;

	return (
		<div className="w-full">

			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<div className="flex flex-col md:flex-row sm:p-8 container">
					<div className="flex flex-1 flex-col min-w-0">

						<div className="widget w-full p-16 pb-32">
							<Widget5 
								content={state.content}
								mode={state.mode}
								strength={state.strength}
								maxlen={state.maxlen}
								setContent={state.setContent}
							/>
						</div>

					</div>

					<div className="flex flex-wrap w-full md:w-320 pt-16">
						<div className="mb-32 w-full sm:w-1/2 md:w-full">
							<div className="widget w-full p-16">
								<Widget9 
									mode={state.mode}
									strength={state.strength}
									setStrength={state.setStrength}
								/>
							</div>
						</div>
					</div>
				</div>
			</FuseAnimate>
		</div>
	);
}

export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);
