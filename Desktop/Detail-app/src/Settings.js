import React,{useState,useContext} from 'react';
import {InfoContext} from "./index";
import {ReadingContext} from "./index";
import Reciter from "./Reciters"
import Translation from "./Translations"
import Tooltip from "./Tooltip"
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import "./Set.css";


const useStyles = makeStyles({
  list: {
    width: "350px",
  },
  fullList: {
    width: "auto",
  },
  nested: {
    paddingLeft: "40px",
  },
});
const color={
  color: '#ABABAB'
};

export default function TemporaryDrawer() {
  const classes = useStyles();
const [closeStatus, setStatus]=useState(false);
  const [Showing, setShow]=useContext(InfoContext);

  const [ShowRead, setRead]=useContext(ReadingContext);

  const [Drawerstate, setDState] = useState({
        right: false,
  });
  
    const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDState({ ...Drawerstate, [side]: open });
  };
 
  const sideList = side => (
    <div className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, true)}
      onKeyDown={toggleDrawer(side, false)}
    >
       <div 
                  className="sidenavright-upper d-flex justify-content-between align-items-center"
                >
                  <h6>Settings</h6>
                  <a
                  className="closebtn"
                    id="sideNavTogglerInnerRight"
                  >
                    <i className="fas fa-times"></i>
                  </a>
                </div>
                
      <List>
      
    
        <ListItem button onClick={()=>setShow(!Showing)}>
                  <ListItemIcon style={color}> < i  class="fas fa-info-circle" ></i></ListItemIcon>
        <ListItemText primary={<Typography style={{ color: '#ABABAB', marginLeft:"-20px" }}>Surah Info</Typography>}/>
        </ListItem>

          <ListItem button onClick={()=>setRead(!ShowRead)}>
        <ListItemIcon style={color}><i class="fas fa-book-open"></i></ListItemIcon>
        <ListItemText primary={<Typography style={{ color: '#ABABAB', marginLeft:"-20px" }}>Reading</Typography>}/>
          </ListItem>

          <ListItem button>
          <ListItemIcon style={color}> 
            <i className="fas fa-lightbulb"></i></ListItemIcon>
            <ListItemText primary={<Typography style={{ color: '#ABABAB', marginLeft:"-20px" }}>Nightmode</Typography>}/>
                   </ListItem>
           </List>
      <Divider />
      <List>
           <Reciter/>
       <Translation/>
       <Tooltip/>
              </List>

      <Divider />
      <List subheader={<Typography style={{ color: '#ABABAB', marginLeft:"10px" }}>Font Size</Typography>}>
              <div className="sidenavright-lower">
                                  <div
                    className="arabic-size d-flex justify-content-between ml-4 mr-4 align-items-center"
                  >
                    <a href="javascript:void(0);">
                      <i class="fas fa-minus" style={color}></i>
                    </a>
                    <h6 style={color}>Arabic</h6>
                    <a href="javascript:void(0);">
                      <i class="fas fa-plus" style={color}></i>
                    </a>
                  </div>
                  <div
                    className="arabic-size d-flex justify-content-between ml-4 mr-4 align-items-center"
                  >
                     <a href="javascript:void(0);">
                      <i class="fas fa-minus" style={color}></i>
                    </a>
                    <h6 style={color}>Translation</h6>
                    <a href="javascript:void(0);">
                      <i class="fas fa-plus" style={color}></i>
                    </a>
                  </div>
                </div>
                
                </List>
    </div>
  );

  
  return (
    <div>
        
     
    <a className="btn" onClick={toggleDrawer('right', true)}> Settings <i class="fas fa-cog"></i></a>
    
            <Drawer transitionDuration={800} anchor="right" open={Drawerstate.right} onClose={toggleDrawer('right',false)}>
        {sideList('right')}
      </Drawer>
      
    </div>
    
  );
}