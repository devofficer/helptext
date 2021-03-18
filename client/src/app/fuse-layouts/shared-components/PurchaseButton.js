import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import React from 'react';

function PurchaseButton({ className }) {
	return (
		<Button
			component="a"
			href="https://quillbot.com/premium"
			target="_blank"
			rel="noreferrer noopener"
			role="button"
			className={clsx('', className)}
			variant="contained"
			color="secondary"
		>
			<Icon className="text-16">shopping_cart</Icon>
			<span className="mx-4">Get Premium</span>
		</Button>
	);
}

export default PurchaseButton;
