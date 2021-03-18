import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import React, { useState, useRef, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border: `0px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  },
  textarea: {
  	padding: theme.spacing(1),
    width: '48%',
    fontSize: 24,
  },
  translate: {
	alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1),
    marginLeft: "50%"
  }
}));

function Widget5(props) {
	const classes = useStyles();

	const [result, setResult] = useState('');
	const [loading, setLoading] = React.useState(false);

    function handleSubmit() {
    	setLoading(true);

		let config = {
		  headers: {
		    'Access-Control-Allow-Origin': '*'
		  }
		}

        const data = {
        	mode: props.mode,
        	strength: props.strength,
        	maxlen: props.maxlen,
        	content: props.content
        }

        setTimeout(() => {
		    setResult('This is a test and your processing is done now.');
        	setLoading(false);
        }, 3000)

        // axios.post('https://newtextingbot.herokuapp.com/', data)
        // 	.then(res => {
        // 		setResult(res.data);
        // 		setLoading(false);
        // 	})
        // 	.catch(err => console.log(err));;
    }

    const [parentSize, setParentSize] = useState(0);
	const parentRef = useRef(null);

	useEffect(() => {
	    const { clientHeight, clientWidth } = parentRef.current;

	    setParentSize(Math.min(clientHeight, clientWidth));
	}, []);

	return (
		<Card className="w-full rounded-8 shadow">
			<Grid container alignItems="center" className={classes.root}>
				<TextareaAutosize
					className={classes.textarea}
				    rowsMax={30}
				    rowsMin={20} 
				    aria-label="maximum height"
				    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				        ut labore et dolore magna aliqua."
				    onChange={(e)=>{props.setContent(e.target.value)}}
				/>
		        <Divider orientation="vertical" flexItem/>
				<TextareaAutosize
					className={classes.textarea}
				    rowsMax={30}
				    rowsMin={20} 
				    aria-label="maximum height"
				    placeholder="..."
				    value={result}
				    onChange={(e)=>{setResult(e.target.value)}}
				/>
	        </Grid>
	        <div className="flex">
		        <Button 
		        	variant="contained" 
		        	color="secondary" 
		        	className={classes.translate}
		        	onClick={handleSubmit}
		        	ref={parentRef}
		        >
		        	{loading ?
						(<Fade
				            in={loading}
				            style={{
				                transitionDelay: loading ? '500ms' : '0ms',
				            }}
				            unmountOnExit
				        >
				            <CircularProgress size={0.6 * parentSize}/>
				        </Fade>) :
				        (<Icon className="text-16">send</Icon>)
		        	}
					<span className="mx-4">{props.mode}</span>
		        </Button>
	        </div>
		</Card>
	);
}

export default React.memo(Widget5);
