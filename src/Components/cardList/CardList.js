import { Grid } from '@mui/material';
import React from 'react';
import CardItem from '../cardItem/CardItem';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function CardList({}) {
	return (
		<Grid container spacing={2}>
			{items.map((i, index) => (
				<Grid item xs={12} sm={6} lg={4} key={index}>
					<CardItem />
				</Grid>
			))}
		</Grid>
	);
}

export default CardList;
