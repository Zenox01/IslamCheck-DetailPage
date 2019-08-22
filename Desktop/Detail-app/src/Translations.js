import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
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
    
 {/* translations */}
 <ListItem button onClick={handleClick} style={color}>
        <ListItemIcon style={color} >
        <i class="fas fa-list"></i>
        </ListItemIcon>
        <ListItemText primary={<Typography style={{ color: '#ABABAB', marginLeft:"-20px" }}>Translations </Typography>}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      
      
      {/* TRASNLATIONS LIST */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
             </ListItemIcon>
            <ListItemText primary={<Typography style={{ color: '#ABABAB', marginLeft:"-20px" }}>Translations Item </Typography>} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
             </ListItemIcon>
            <ListItemText primary={<Typography style={{ color: '#ABABAB', marginLeft:"-20px" }}>Translations Item 2</Typography>} />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

