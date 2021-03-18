import AppBar from '@material-ui/core/AppBar';
import { makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import PurchaseButton from 'app/fuse-layouts/shared-components/PurchaseButton';
import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectToolbarTheme } from 'app/store/fuse/settingsSlice';
import FullScreenToggle from '../../shared-components/FullScreenToggle';

const useStyles = makeStyles(theme => ({
	root: {}
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

function ToolbarLayout1(props) {
	const toolbarTheme = useSelector(selectToolbarTheme);

	const classes = useStyles(props);

	return (
		<ThemeProvider theme={toolbarTheme}>
			<AppBar
				id="fuse-toolbar"
				className={clsx(classes.root, 'flex relative z-10 shadow-md')}
				color="default"
				style={{ backgroundColor: toolbarTheme.palette.background.paper }}
			>
				<Toolbar className="p-0 min-h-48 md:min-h-64">
					<div className="flex flex-1">
						<Avatar className={classes.orange}>Logo</Avatar>
				        <Button 
				        	color={props.mode==="Paraphrase"?"secondary":"primary"}
				        	onClick={()=>{props.onChange("Paraphrase")}}
				        >
				        	Paraphraser
				        </Button>
						<Button 
				        	color={props.mode==="Summarize"?"secondary":"primary"}
				        	onClick={()=>{props.onChange("Summarize")}}
						>
							Summarizer
						</Button>
					</div>

					<div className="flex items-center px-8">
						<FullScreenToggle />
						<PurchaseButton />
						<UserMenu />
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default React.memo(ToolbarLayout1);
