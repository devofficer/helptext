import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';

function Widget9(props) {

	const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    props.setMode(e.target.value === 1 ? "Paraphrase" : "Summarize");
    setAnchorEl(null);
  };
	
	return (
		<TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
            	<Typography className="h1 px-12">Settings</Typography>
            </TableCell>
            <TableCell align="right">
            	<IconButton aria-label="more">
            		<Icon>more_vert</Icon>
            	</IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">Transfer Mode :</TableCell>
            <TableCell align="right">
              <div>
					      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
					        {props.mode}
					      </Button>
					      <Menu
					        id="simple-menu"
					        anchorEl={anchorEl}
					        keepMounted
					        open={Boolean(anchorEl)}
					        onClose={ ()=>{setAnchorEl(null)} }
					      >
					        <MenuItem 
					        	value={1}
					        	onClick={handleClose} 
					        >
					        	Paraphrase
					        </MenuItem>
					        <MenuItem 
					        	value={2}
					        	onClick={handleClose} 
					        >
					        	Summarize
					        </MenuItem>
					      </Menu>
					    </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Strength :</TableCell>
            <TableCell align="right">
              <Slider
					      defaultValue={1}
					      aria-labelledby="discrete-slider"
					      valueLabelDisplay="auto"
					      step={1}
					      marks
					      min={0}
					      max={3}
					      onChange={(e, newValue)=>{props.setStrength(newValue)}}
			        />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Visualize Mode :</TableCell>
            <TableCell align="right">
              <Select
                className="w-full"
			          onChange={(e)=>{console.log(e.target.value)}}
			        >
			          <MenuItem value="">
			            <em>None (default)</em>
			          </MenuItem>
			          <MenuItem value="highlight">Highlight</MenuItem>
			        </Select>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
	);
}

export default React.memo(Widget9);
