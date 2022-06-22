import React from 'react';
import classes from './uploadbox.module.css';

function UploadBox({ children }) {
	return <div className={classes.UploadBox}>{children}</div>;
}

export default UploadBox;
