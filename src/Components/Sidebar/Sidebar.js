import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { HomeIcon, GamesIcon, ContentIcon, SettingIcon } from '../svg';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';

const items = [
	{ text: 'Home', Icon: HomeIcon, path: '/' },
	{ text: 'Content', Icon: ContentIcon, path: '/content' },
	{ text: 'Games', Icon: GamesIcon, path: '/games' },
	{ text: 'Setting', Icon: SettingIcon, path: '/setting' },
];

export default function SideBar(props) {
	const [isActive, setIsActive] = useState(0);

	const changeActiveLink = (index) => setIsActive(index);

	return (
		<div>
			<List>
				{items.map((item, index) => (
					<NavLink to={item.path} key={index} className={clsx(classes.item, isActive === index ? classes.ActiveItem : '', 'mt-5')}>
						<ListItem onClick={() => changeActiveLink(index)} button>
							<ListItemIcon>
								<item.Icon fill={isActive === index ? '#6E41E2' : '#8A8A8A'} />
							</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					</NavLink>
				))}
			</List>
		</div>
	);
}
