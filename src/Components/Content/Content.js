import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import classes from './Home.module.css';
import AddIcon from '@mui/icons-material/Add';
import clsx from 'clsx';
import FilterOptions from './filter/Filter';
import CardList from '../cardList/CardList';
import { useNavigate } from 'react-router-dom';

const Content = () => {
	const navigate = useNavigate();

	const redirectToNewLesson = () => navigate('/lessons/new');
	return (
		<div className={clsx(classes.Home)}>
			<header>
				<Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between">
					<h2>Content</h2>
					<Button onClick={redirectToNewLesson} variant="contained" className="primaryButton" startIcon={<AddIcon fontSize="inherit" />}>
						Add New Lesson
					</Button>
				</Stack>
			</header>
			<FilterOptions />
			<div style={{ marginTop: '50px' }}>
				<CardList />
			</div>
		</div>
	);
};

export default Content;
