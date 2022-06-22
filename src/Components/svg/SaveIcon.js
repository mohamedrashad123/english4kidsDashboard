import React from 'react';

function SaveIcon({ color }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" fill="none" viewBox="0 0 19 18">
			<path
				fill={color}
				d="M2.5 18h14a2 2 0 002-2V5a1.002 1.002 0 00-.29-.71l-4-4A1.001 1.001 0 0013.5 0h-11a2 2 0 00-2 2v14a2 2 0 002 2zm10-2h-6v-5h6v5zm-2-12h-2V2h2v2zm-8-2h2v4h8V2h.59l3.41 3.41V16h-2v-5a2 2 0 00-2-2h-6a2 2 0 00-2 2v5h-2V2z"
			></path>
		</svg>
	);
}

export default SaveIcon;
