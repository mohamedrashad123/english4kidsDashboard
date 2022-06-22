import React from 'react';

function UploadButtonIcon({ color }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
			<path
				fill={color}
				d="M6.375 4.446h1.732v7.93c0 .102.084.187.188.187H9.7a.188.188 0 00.187-.188V4.446h1.737c.157 0 .244-.18.148-.302L9.148.82a.187.187 0 00-.296 0L6.227 4.142a.188.188 0 00.148.304zm11.203 7.226h-1.406a.188.188 0 00-.188.188v3.609H2.016v-3.61a.188.188 0 00-.188-.187H.422a.188.188 0 00-.188.188v4.64c0 .415.336.75.75.75h16.032a.75.75 0 00.75-.75v-4.64a.188.188 0 00-.188-.188z"
			></path>
		</svg>
	);
}

export default UploadButtonIcon;
