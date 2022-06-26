import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInput({ placeholder, onChange }) {
	const style = {
		boxShadow: '0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)',
		borderRadius: '4px',
	};

	return (
		<Paper component="form" style={style} sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
			<IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
				<SearchIcon />
			</IconButton>
			<InputBase sx={{ ml: 1, flex: 1 }} placeholder={placeholder} onChange={onChange} inputProps={{ 'aria-label': 'search google maps' }} />
		</Paper>
	);
}
