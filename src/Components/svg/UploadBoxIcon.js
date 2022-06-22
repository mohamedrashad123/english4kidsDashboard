import React from 'react';

function UploadBoxIcon({ color }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="67" height="66" fill="none" viewBox="0 0 67 66">
			<path
				fill="#8A8A8A"
				d="M33.5 26.813L23.187 37.124l2.909 2.908 5.341-5.321V57.75H12.875v4.125h18.563a4.125 4.125 0 004.125-4.125V34.712l5.341 5.321 2.908-2.908L33.5 26.812z"
			></path>
			<path
				fill={color}
				d="M48.969 45.375h-1.032V41.25h1.032a9.275 9.275 0 00.734-18.523l-1.68-.132-.205-1.675a14.425 14.425 0 00-28.634 0l-.206 1.675-1.681.132a9.275 9.275 0 00.734 18.523h1.032v4.125H18.03a13.4 13.4 0 01-2.681-26.532 18.55 18.55 0 0136.3 0 13.4 13.4 0 01-2.681 26.532z"
			></path>
		</svg>
	);
}

export default UploadBoxIcon;
