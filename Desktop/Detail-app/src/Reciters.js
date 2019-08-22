import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const color={
    color: '#ABABAB'
  };
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  function handleClick() {
    setOpen(!open);
  }
  

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {/* Reciters */}
      <ListItem button onClick={handleClick} style={color}>
        <ListItemIcon style={color} >
        <i className="fas fa-microphone"/>
        </ListItemIcon>
        <ListItemText primary={<Typography style={{ color: '#ABABAB', marginLeft:"-20px" }}>Reciters </Typography>}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      {/* RECITERS LIST */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText primary={<Typography style={{ color: '#ABABAB', marginLeft:"-20px" }}>Reciters </Typography>} />
          </ListItem>
        </List>
      </Collapse>
  
    
    </List>
  );
}

