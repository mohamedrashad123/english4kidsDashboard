import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { FormControl, InputLabel, InputBase } from '@mui/material';

const CustomInput = styled(InputBase)(({ theme, style }) => ({
	'label + &': {
		marginTop: theme.spacing(4),
		color: 'rgba(17, 17, 17, 0.48) !important',
	},
	'& .MuiInputBase-input': {
		...style,
		borderRadius: 4,
		position: 'relative',
		backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : '#2b2b2b',
		fontSize: 16,
		width: '100%',
		height: '100%',
		padding: '10px 12px',
		transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
		// boxShadow: `0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)`,
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:focus': {
			// boxShadow: `0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)`,
			// borderColor: theme.palette.primary.main,
			border: 'none',
		},
		'&::placeholder': {
			color: 'rgba(17, 17, 17, 0.48) !important',
		},
	},
}));

function CustomTextField({ defaultValue, id, label, onChange, onKeyDown, placeholder, style, className, value }) {
	return (
		<FormControl variant="standard" className={className}>
			<InputLabel style={{ color: 'rgba(17, 17, 17, 0.48) !important', fontFamily: 'roboto', fontSize: '18px' }} shrink htmlFor={id}>
				{label}
			</InputLabel>
			<CustomInput
				defaultValue={defaultValue}
				value={value || ''}
				onChange={onChange}
				onKeyDown={onKeyDown}
				id={id}
				placeholder={placeholder}
				style={style}
			/>
		</FormControl>
	);
}

export default CustomTextField;
