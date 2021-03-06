import classes from './CardItem.module.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';
import iamge from './cardimage.jpg';
import { Button, IconButton } from '@material-ui/core';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { BenIcon } from '../svg';
import { useNavigate } from 'react-router-dom';

export default function CardItem({ item }) {
	const style = {
		boxShadow: '2px 4px 30px rgba(166, 166, 166, 0.1)',
		borderRadius: '10px',
		background: '#ffffff',
	};
	const navigate = useNavigate();

	return (
		<Card style={style} sx={{ maxWidth: '100%', textAlign: 'left', position: 'relative' }}>
			<CardActionArea>
				<CardMedia component="img" height="140" image={item?.image || iamge} alt={item?.title} />
			</CardActionArea>
			<IconButton aria-label="fingerprint" color="secondary" className={classes.optionsBtn}>
				<MoreVertOutlinedIcon fontSize="inherit" size="small" />
			</IconButton>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{item?.title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{item?.description}
				</Typography>
			</CardContent>
			<div className={classes.cardBottom}>
				<Stack className="text-center" spacing={2} direction={{ xs: 'column', xl: 'row' }} justifyContent="space-between">
					<div className="d-flex justify-content-between align-self-center gap-3">
						<span>
							<YouTubeIcon style={{ color: '#6E41E2' }} /> 30 minutes
						</span>
						<span>
							<BenIcon color="#6E41E2" /> {item?.questionsCount || 0} tasks
						</span>
					</div>
					<Button
						onClick={() => navigate(`/lessons/${item.ID}`)}
						style={{ padding: '10px 20px' }}
						variant="contained"
						className="primaryButton"
						startIcon={<EditOutlinedIcon />}
					>
						Edit Lesson
					</Button>
				</Stack>
			</div>
		</Card>
	);
}
