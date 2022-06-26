import { Stack } from '@mui/material';
import React, { useState } from 'react';
import SearchInput from '../../inputs/SearchInput';
import CustomSelectMenu from '../../inputs/SelectInput';
import styles from './filter.module.css';

const gradeOptions = [
	{ value: 1, label: 'grade 1' },
	{ value: 2, label: 'grade 2' },
	{ value: 3, label: 'grade 3' },
];

const unitOptions = [
	// { value: 1, label: 'unit 1' },
	// { value: 2, label: 'unit 2' },
	// { value: 3, label: 'unit 3' },
	// { value: 4, label: 'unit 4' },
	// { value: 5, label: 'unit 5' },
	// { value: 6, label: 'unit 6' },
	// { value: 7, label: 'unit 7' },
	// { value: 8, label: 'unit 8' },
	// { value: 9, label: 'unit 9' },
	{ value: 10, label: 'unit 10' },
	{ value: 11, label: 'unit 11' },
	{ value: 12, label: 'unit 12' },
	{ value: 13, label: 'unit 13' },
	{ value: 14, label: 'unit 14' },
	{ value: 15, label: 'unit 15' },
	{ value: 16, label: 'unit 16' },
	{ value: 17, label: 'unit 17' },
	{ value: 18, label: 'unit 18' },
];

const FilterOptions = ({ handleSearch, changeUnit, changeGrade }) => {
	return (
		<div className={styles.FilterOptions}>
			<Stack spacing={3} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
				<SearchInput placeholder="Search for topics you want to learn..." onChange={handleSearch} />
				<Stack spacing={3} direction={{ xs: 'column', sm: 'row' }}>
					<CustomSelectMenu
						changeValue={changeGrade}
						options={gradeOptions}
						boxShadow="0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)"
					/>
					<CustomSelectMenu
						changeValue={changeUnit}
						options={unitOptions}
						boxShadow="0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)"
					/>
				</Stack>
			</Stack>
		</div>
	);
};

export default FilterOptions;
