
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./layout.css";
import dropdown from "../data/dropdown";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import HomeIcon from '@material-ui/icons/Home';
import Icon from '@material-ui/core/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import UserManagement from "../views/adminSetting/userManagement";
import SideNavigate from "../component/sideNavigate";
import userData from "../data/userData";
import Product from "../views/adminSetting/productcateogory";
import { useGridApiOptionHandler } from '@material-ui/data-grid';
import { useHistory } from "react-router";
import {withRouter} from "react-router"
const drawerWidth = 240;


function Layout({children,pathDynamic}) {
  
    const history = useHistory();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [menuName, setMenuName] = React.useState(false);
    const [sidenavControl, setSideNavControl] = React.useState([]);
    const [dropdownPath, setDropdownPath] = React.useState('');
    const [dropdownoptions, setDropdownOptions] = React.useState(dropdown)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [linkPath, setLinkPath] = React.useState('');
    const [age, setAge] = React.useState(false);
    const [dummy,setDummy] = React.useState(false);
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
        },
        appBar: {
          background: '#fff',
          color: "black",
          zIndex: theme.zIndex.drawer + 1,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        },
        appBarShift: {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        menuButton: {
          marginRight: 36,
        },
        hide: {
          display: 'none',
        },
        drawer: {
          width: drawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
        },
        drawerOpen: {
          background: '#fff',
          width: drawerWidth,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        drawerClose: {
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          overflowX: 'hidden',
          width: theme.spacing(7) + 1,
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
          },
        },
        toolbar: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: theme.spacing(0, 1),
          // necessary for content to be below app bar
          ...theme.mixins.toolbar,
        },
        content: {
          flexGrow: 1,
          padding: theme.spacing(3),
        },
        btn: {
          color: "#424949",
        }
      }));
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = (type) => {
      setAnchorEl(null);
      console.log('type', type);
    };
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleSideLinks = (path) => {
      setLinkPath(path)
      pathDynamic(path)
      history.push(path)
    }
    useEffect(() => {
      debugger;
      // props.pathDynamic(dropdownPath)
      console.log('hiited');
      setAge(false)
      
    },[age]);
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const handlesideBar = async (children, name, path) => {
      debugger;
      setAnchorEl(null);
      console.log("children", children)
      await setSideNavControl(old => children
      )
      setMenuName(name);
      await setDropdownPath(path);
       pathDynamic(path);
       history.push(path);
       setAge(true);
      console.log("path", dropdownPath);
    }
    const checkDelt = (children,name,path) =>{
      debugger;
      setAge("hii")
      
    }
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const classes = useStyles();
          
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.btn}>
                {menuName == "" ? menuName : menuName}<ArrowDropDownIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onChange={handleChange}

              >
                {dropdownoptions.map(dropdown => {
                  return (
                     <MenuItem key={dropdown.id} onClick={() => handlesideBar(dropdown.children, dropdown.name, dropdown.path)} > {dropdown.name}</MenuItem>
                    // <MenuItem key={dropdown.id} onClick={() => handlesideBar(dropdown.children, dropdown.name, dropdown.path)} > {dropdown.name}</MenuItem>
                    //  <MenuItem key={dropdown.id} onClick={() => handlesideBar(dropdown.children, dropdown.name,dropdown.path)}   ><Link to={dropdown.path}  key={dropdown.id} className="menulist">{dropdown.name}</Link></MenuItem>
                  );
                })}
              </Menu>
              {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
        >
          {dropdownoptions.map(dropdown => {
          return(
            <MenuItem key={dropdown.id} onClick={handleClose} value={dropdown.name} ><Link to={dropdown.path}  onClick={()=> handlesideBar(dropdown.children,dropdown.name)} key={dropdown.id} className="menulist">{dropdown.name}</Link></MenuItem>
          );
        })} 
          
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
              {/* <select>
        {dropdownoptions.map(dropdown => {
                  return (
                    <option key={dropdown.id} onClick={handleClose}  ><Link to={dropdown.path} onClick={() => handlesideBar(dropdown.children, dropdown.name,dropdown.path)} key={dropdown.id} className="menulist">{dropdown.name}</Link></option>
                  );
        })}
        </select> */}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <List>
            {sidenavControl.map((side, index) => {
              return (
                <div>
                  <ListItem button key={side.id} onClick={() => handleSideLinks(side.path)}>
                    <ListItemIcon>{index % 2 === 0 ? <FontAwesomeIcon icon={side.icons} /> : <FontAwesomeIcon icon={side.icons} />}</ListItemIcon>
                    <ListItemText>{side.name}</ListItemText>

                    {/* <ListItemText><Link to={dropdownPath + side.path} onClick={()=>handleSideLinks(side.path)} className="menulist">{side.name}</Link></ListItemText> */}
                  </ListItem>
                </div>
              );
            })}

          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {/* <CovidTracker/> */}
          <Switch>
            {<Route path={dropdownPath}>
              <UserManagement />

            </Route>}
            <div>
                {children}
            </div>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
            
            
           
        
  
}

export default Layout;
