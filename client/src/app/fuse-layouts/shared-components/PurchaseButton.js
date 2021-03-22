import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

function PurchaseButton({ className }) {

	const [getMenu, setGetMenu] = useState(null);

	const getMenuClick = event => {
		setGetMenu(event.currentTarget);
	};

	const getMenuClose = () => {
		setGetMenu(null);
	};

	return (
		<>
			<Button
				rel="noreferrer noopener"
				className={clsx('', className)}
				variant="contained"
				color="secondary"
				onClick={getMenuClick}
			>
				<Icon className="text-16">shopping_cart</Icon>
				<span className="mx-4">Get Things</span>
			</Button>
			<Popover
				open={Boolean(getMenu)}
				anchorEl={getMenu}
				onClose={getMenuClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				classes={{
					paper: 'py-8'
				}}
			>
				<>
					<MenuItem 
						component={Link} 
						to="/premium" 
						role="button"
						onClick={getMenuClose}
					>
						<ListItemIcon className="min-w-40">
							<Icon>work_outline</Icon>
						</ListItemIcon>
						<ListItemText primary="Premium" />
					</MenuItem>
					<MenuItem 
						component="a" 
						href="https://chrome.google.com/webstore/detail/quillbot/iidnbdjijdkbmajdffnidomddglmieko?hl=en-US" 
						role="button"
						target="_blank"
						onClick={getMenuClose}
					>
						<ListItemIcon className="min-w-40">
							<Icon>extension</Icon>
						</ListItemIcon>
						<ListItemText primary="Extension" />
					</MenuItem>
				</>
			</Popover>
		</>
	);
}

export default PurchaseButton;
