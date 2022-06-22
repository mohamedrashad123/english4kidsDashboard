import classes from './questionsList.module.css';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@material-ui/core';
import { DeleteIcon, EditIcon } from '../../svg';
// import { DeleteIcon, EditIcon } from '../../svg';

function createData(ID, title, correctAnswer) {
	return { ID, title, correctAnswer };
}

// const questions = [
// 	createData(1, 'How to spell animals words How to spell animals words', 'The same way'),
// 	createData(2, 'How to spell animals words How to spell animals words', 'The same way'),
// 	createData(3, 'How to spell animals words How to spell animals words', 'The same way'),
// 	createData(4, 'How to spell animals words How to spell animals words', 'The same way'),
// 	createData(5, 'How to spell animals words How to spell animals words', 'The same way'),
// 	createData(6, 'How to spell animals words How to spell animals words', 'The same way'),
// 	createData(7, 'How to spell animals words How to spell animals words', 'The same way'),
// ];

function QuestionsList({ questions }) {
	return (
		<div className={classes.questionsListContainer}>
			<h6 className="h6" style={{ color: 'rgba(17, 17, 17, 0.48)' }}>
				Questions
			</h6>
			<TableContainer style={{ width: '100%', height: '100%', boxShadow: 'none' }} component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
					<TableHead>
						<TableRow>
							<TableCell>No</TableCell>
							<TableCell align="left">Question</TableCell>
							<TableCell align="left">Correct Answer</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{questions.length
							? questions.map((question, index) => (
									<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell style={{ color: 'rgba(17, 17, 17, 0.48)' }} component="th" scope="row">
											#{index + 1}
										</TableCell>
										<TableCell style={{ color: 'rgba(17, 17, 17, 0.48)' }} align="left">
											{question.title}
										</TableCell>
										<TableCell style={{ color: 'rgba(17, 17, 17, 0.48)' }} align="left">
											{question.answers.find((answer) => answer.isCorrect === true)?.title || ''}
										</TableCell>
										<TableCell align="right">
											<IconButton aria-label="edit">
												<EditIcon color="#6E41E2" />
											</IconButton>
											<IconButton aria-label="delete">
												<DeleteIcon color="#C43939" />
											</IconButton>
										</TableCell>
									</TableRow>
							  ))
							: null}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default QuestionsList;
