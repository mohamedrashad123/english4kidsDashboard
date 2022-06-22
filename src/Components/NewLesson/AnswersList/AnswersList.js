import classes from './answersList.module.css';
import React from 'react';
import { Stack } from '@mui/material';
import { IconButton } from '@material-ui/core';
import { DeleteIcon, EditIcon } from '../../svg';
import clsx from 'clsx';

// const answers = [
// 	{ ID: 1, title: 'First answer' },
// 	{ ID: 2, title: 'Second answer' },
// 	{ ID: 3, title: 'Third answer' },
// 	{ ID: 4, title: 'Fourth answer' },
// ];

function AnswersList({ answers, changeCorrectAnswer }) {
	return (
		<div className={classes.answersListContainer}>
			<h6 className="h6" style={{ color: 'rgba(17, 17, 17, 0.48)' }}>
				Answers
			</h6>
			{answers.length
				? answers.map((answer, index) => {
						return (
							<Stack
								onClick={() => changeCorrectAnswer(index)}
								style={{ width: '100%', flexBasis: '100%' }}
								key={index}
								direction="row"
								spacing={2}
								className={clsx(classes.answerContainer, answer.isCorrect ? classes.correctAnswer : '')}
								alignItems="center"
								justifyContent="space-between"
							>
								<span>{answer.title}</span>
								<div>
									<IconButton aria-label="edit">
										<EditIcon color="#6E41E2" />
									</IconButton>
									<IconButton aria-label="delete">
										<DeleteIcon color="#C43939" />
									</IconButton>
								</div>
							</Stack>
						);
				  })
				: null}
		</div>
	);
}

export default AnswersList;
