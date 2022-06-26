import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardItem from '../cardItem/CardItem';
import lessonController from '../../controllers/lessons/lessonController';

function CardList({ gradeId, unitId, search }) {
	const [lessons, setLessons] = useState([]);

	const getLessons = async () => {
		const lessonList = await lessonController.getListOfLessons(gradeId, unitId, search);
		setLessons(lessonList);
	};

	useEffect(() => {
		getLessons();
	}, [gradeId, unitId, search]);

	return (
		<Grid container spacing={2}>
			{lessons.map((item, index) => (
				<Grid item xs={12} sm={6} lg={4} key={index}>
					<CardItem item={item} />
				</Grid>
			))}
		</Grid>
	);
}

export default CardList;
