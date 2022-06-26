import './App.css';
import Content from '../Content/Content';
import CustomAppBar from '../Appbar/Appbar';
import { CssBaseline } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import NewLesson from '../NewLesson/NewLesson';
import clsx from 'clsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	content: {
		display: 'flex',
		width: `calc(100% - ${drawerWidth}px)`,
		padding: theme.spacing(16, 7),
		backgroundColor: '#FAFAFA',
		height: '100Vh',
	},
}));

function App() {
	const classes = useStyles();
	return (
		<div className="App">
			<BrowserRouter>
				<CssBaseline />
				<CustomAppBar />
				<main className={clsx(classes.content, 'content')}>
					<Routes>
						<Route path="/">
							<Route path="content" element={<Content />} />
							<Route path="lessons">
								<Route path=":lessonId" element={<NewLesson />} />
								<Route path="new" element={<NewLesson />} />
								<Route index element={<Content />} />
							</Route>
							<Route index element={<Content />} />
						</Route>
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
