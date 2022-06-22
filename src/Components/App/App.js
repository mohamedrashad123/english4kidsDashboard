import './App.css';
import Content from '../Content/Content';
import CustomAppBar from '../Appbar/Appbar';
import { CssBaseline } from '@mui/material';
// import Navbar from "./Components/navbar/Navbar";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NewLesson from '../NewLesson/NewLesson';
import clsx from 'clsx';
import { Routes, Route } from 'react-router-dom';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	content: {
		display: 'flex',
		width: `calc(100% - ${drawerWidth}px)`,
		padding: theme.spacing(16, 7),
		backgroundColor: '#FAFAFA',
	},
}));

function App() {
	const classes = useStyles();
	// const theme = useTheme();
	return (
		<div className="App">
			<CssBaseline />
			<CustomAppBar />
			<main className={clsx(classes.content, 'content')}>
				<Routes>
					<Route path="/">
						<Route path="content" element={<Content />} />
						<Route path="lessons">
							<Route path="new" element={<NewLesson />} />
							<Route index element={<Content />} />
						</Route>
						<Route index element={<Content />} />
					</Route>
				</Routes>
				{/* <NewLesson /> */}
			</main>
			{/* <Navbar /> */}
		</div>
	);
}

export default App;
