import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import classes from './Home.module.css';
import AddIcon from '@mui/icons-material/Add';
import clsx from 'clsx';
import FilterOptions from './filter/Filter';
import CardList from '../cardList/CardList';
import { useNavigate } from 'react-router-dom';

let searchTimeout = null;
const Content = () => {
	const navigate = useNavigate();
	const [unitId, setUnitId] = useState('');
	const [search, setSearch] = useState('');
	const [gradeId, setGradeId] = useState('');

	const changeUnit = (unitId) => setUnitId(unitId);
	const changeGrade = (unitId) => setGradeId(unitId);
	const handleSearch = (event) => {
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => {
			setSearch(event.target.value);
		}, 800);
	};

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
			<FilterOptions changeUnit={changeUnit} handleSearch={handleSearch} changeGrade={changeGrade} />
			<div style={{ marginTop: '50px' }}>
				<CardList gradeId={gradeId} unitId={unitId} search={search} />
			</div>
		</div>
	);
};

export default Content;
