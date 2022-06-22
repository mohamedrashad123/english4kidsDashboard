import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SideBar from '../Sidebar/Sidebar';
import profileImage from './profile.svg';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { LogoutIcon } from '../svg';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 999999999,
		background: '#ffffff',
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		boxShadow: '2px 4px 30px rgba(166, 166, 166, 0.1)',
	},
	appBarShift: {
		marginLeft: drawerWidth,
		// width: `calc(100% - ${drawerWidth}px)`,
		width: `100%`,
		boxShadow: '2px 4px 30px rgba(166, 166, 166, 0.1)',
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
		boxShadow: '2px 4px 30px rgba(166, 166, 166, 0.1)',
		zIndex: 9999999,
	},
	drawerOpen: {
		border: '0px',
		paddingLeft: '8px',
		paddingTop: '70px',
		// boxShadow: '2px 4px 30px rgba(166, 166, 166, 0.1)',
		borderRadius: '0px 30px 30px 0px',
		width: drawerWidth,
		overflowX: 'hidden',
		justifyContent: 'space-between',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		border: '0px',
		paddingTop: '70px',
		paddingLeft: '8px',
		// boxShadow: '2px 4px 30px rgba(166, 166, 166, 0.1)',
		borderRadius: '0px 30px 30px 0px',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		justifyContent: 'space-between',
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
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	sidebar: {
		position: 'absolute',
		left: '0%',
		right: '0%',
		top: '0%',
		bottom: '0%',
	},
}));

// This is the component that controls what to show
// export default function CustomAppBar() {
// 	const classes = useStyles();

// 	return (
// 		<div className={classes.root}>
// 			<CssBaseline />
// 			<AppBarMenu />
// 			<Content />
// 		</div>
// 	);
// }

// // This is the content component
// function Content() {
// 	const classes = useStyles();

// 	return (
// 		<React.Fragment>
// 			<main className={classes.content}>
// 				<div className={classes.toolbar} />
// 				<Typography paragraph>
// 					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor
// 					purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque
// 					non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet
// 					nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis
// 					imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue
// 					eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
// 				</Typography>
// 				<Typography paragraph>
// 					Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
// 					integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
// 					Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus
// 					viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi
// 					tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
// 					viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
// 				</Typography>
// 			</main>
// 		</React.Fragment>
// 	);
// }

// This is the appbar component
export default function CustomAppBar() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(true);

	const handleDrawerOpen = () => {
		setOpen(!open);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar style={{ width: '100%', justifyContent: 'space-between' }}>
					{/* <IconButton onClick={handleDrawerOpen}>{theme.direction === "rtl" || !open ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton> */}
					{/* <IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}
					>
						<MenuIcon />
					</IconButton> */}
					<Typography color="textPrimary" variant="h6" noWrap>
						English<span className="primary_text">4</span>kids
					</Typography>
					<div>
						<span className="primary_text">mohamed</span>
						<img className="rounded" src={profileImage}></img>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx(classes.drawer, {
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<SideBar />
				<div>
					<ListItem className="mb-5" style={{ color: '#E55858' }} button>
						<ListItemIcon>
							<LogoutIcon />
						</ListItemIcon>
						<ListItemText primary={'Logout'} />
					</ListItem>
					<div className={clsx(classes.toolbar, 'justify-content-center')}>
						<IconButton onClick={handleDrawerOpen}>{theme.direction === 'rtl' || !open ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
					</div>
				</div>
			</Drawer>
		</div>
	);
}
