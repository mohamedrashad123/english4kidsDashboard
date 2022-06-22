import { Stack } from '@mui/material';
import React from 'react';
import SearchInput from '../../inputs/SearchInput';
import CustomSelectMenu from '../../inputs/SelectInput';
import styles from './filter.module.css';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

const FilterOptions = () => {
	return (
		<div className={styles.FilterOptions}>
			<Stack spacing={3} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
				<SearchInput placeholder="Search for topics you want to learn..." />
				<Stack spacing={3} direction={{ xs: 'column', sm: 'row' }}>
					<CustomSelectMenu options={options} boxShadow="0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)" />
					<CustomSelectMenu options={options} boxShadow="0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)" />
				</Stack>
			</Stack>
		</div>
	);
};

export default FilterOptions;
