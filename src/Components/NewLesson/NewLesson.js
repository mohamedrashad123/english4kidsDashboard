import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CustomSelectMenu from '../inputs/SelectInput';
import UploadBox from '../UploadBox/UploadBox';
import CustomTextField from '../inputs/CustomTextField';
import classes from './newLesson.module.css';
import { Grid, InputLabel, TextareaAutosize } from '@mui/material';
import clsx from 'clsx';
import QuestionsList from './QuestionsList/QuestionsList';
import AnswersList from './AnswersList/AnswersList';
import { SaveIcon, UploadBoxIcon, UploadButtonIcon } from '../svg';
import newLessonController from '../../controllers/lessons/lessonController';
import { uploadImage } from '../../controllers/uploads/uploadImageController';

const gradeOptions = [
	{ value: 1, label: 'grade 1' },
	{ value: 2, label: 'grade 2' },
	{ value: 3, label: 'grade 3' },
];

const unitOptions = [
	// { value: 1, label: 'unit 1' },
	// { value: 2, label: 'unit 2' },
	// { value: 3, label: 'unit 3' },
	// { value: 4, label: 'unit 4' },
	// { value: 5, label: 'unit 5' },
	// { value: 6, label: 'unit 6' },
	// { value: 7, label: 'unit 7' },
	// { value: 8, label: 'unit 8' },
	// { value: 9, label: 'unit 9' },
	{ value: 10, label: 'unit 10' },
	{ value: 11, label: 'unit 11' },
	{ value: 12, label: 'unit 12' },
	{ value: 13, label: 'unit 13' },
	{ value: 14, label: 'unit 14' },
	{ value: 15, label: 'unit 15' },
	{ value: 16, label: 'unit 16' },
	{ value: 17, label: 'unit 17' },
	{ value: 18, label: 'unit 18' },
];

const inputFieldStyle = {
	boxShadow: '0px 4px 4px rgba(51, 51, 51, 0.02)',
};

function NewLesson() {
	const [unitId, setUnitId] = useState(null);
	const [gradeId, setGradeId] = useState(null);
	const [lessonTitle, setLessonTitle] = useState('');
	const [description, setLessonDiscription] = useState('');
	const [wordsInfo, setWordsInfo] = useState('');
	const [videoLink, setvideoLink] = useState('');
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState([]);
	const [questionTitle, setQuestionTitle] = useState('');
	const [answerTitle, setAnswerTitle] = useState('');
	const [grammarImage, setGrammarImage] = useState('');
	const [wordImage, setWordImage] = useState('');
	const [questionImage, setQuestionImage] = useState('');
	const [lessonImage, setLessonImage] = useState(null);

	const createLesson = async () => {
		const lessonData = {
			gradeId,
			unitId,
			title: lessonTitle,
			description,
			words_info: wordsInfo || null,
			video: videoLink,
			questions: JSON.stringify(questions),
			grammar_images: grammarImage,
			words_images: wordImage,
			lessonImage,
		};

		const lessonId = await newLessonController.createNewLesson(lessonData);

		if (lessonId) {
			setAnswers([]);
			setQuestions([]);
			setQuestionTitle('');
			setLessonDiscription('');
			setQuestionImage('');
			setGrammarImage('');
			setLessonImage(null);
			setWordImage('');
			setWordsInfo('');
			setvideoLink('');
			setAnswerTitle('');
			console.log('lesson created successfully');
		}
	};

	const changeLessonTitle = (event) => setLessonTitle(event.target.value);
	const changeLessonDescription = (event) => setLessonDiscription(event.target.value);
	const changeWordsInfo = (event) => setWordsInfo(event.target.value);
	const changeVideoLink = (event) => setvideoLink(event.target.value);
	const changeAnswerTitle = (event) => setAnswerTitle(event.target.value);
	const changeQuestionTitle = (event) => setQuestionTitle(event.target.value);
	const addNewAnswer = () => {
		setAnswers([...answers, { title: answerTitle, isCorrect: false }]);
		setAnswerTitle('');
	};

	const addNewQuestion = () => {
		setQuestions([...questions, { title: questionTitle, answers, image: questionImage || null }]);
		setAnswers([]);
		setQuestionTitle('');
		setAnswerTitle('');
	};

	const changeInputFileImage = async (event) => {
		switch (event.target.id) {
			case 'grammar':
				const grammarImage = await uploadImage(event.target.files[0], event.target.id);
				setGrammarImage(grammarImage);
				break;
			case 'word':
				const wordImage = await uploadImage(event.target.files[0], event.target.id);
				setWordImage(wordImage);
				break;
			case 'question':
				const questionImage = await uploadImage(event.target.files[0], event.target.id);
				setQuestionImage(questionImage);
				break;
		}
	};

	const changeLessonImage = (event) => setLessonImage(event.target.files[0]);

	const changeCorrectAnswer = (index) => {
		const answersClone = [...answers];
		answersClone[index].isCorrect = true;
		answersClone.forEach((answer, i) => (index !== i ? (answer.isCorrect = false) : null));
		setAnswers(answersClone);
	};

	return (
		<div style={{ width: '100%' }}>
			<Stack spacing={1} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
				<h2 className="h1">Add New Lesson</h2>
				<Button
					onClick={createLesson}
					variant="contained"
					className={clsx('primaryButton', classes.lessonButton)}
					startIcon={<SaveIcon color="#fff" fontSize="inherit" />}
				>
					Save lessons and questions
				</Button>
			</Stack>
			<section className={classes.lessonData}>
				<Stack spacing={3} className={classes.optionsContainer} direction={{ xs: 'column', sm: 'row' }}>
					<CustomSelectMenu changeValue={setGradeId} options={gradeOptions} boxShadow="0px 4px 16px rgba(51, 51, 51, 0.02)" />
					<CustomSelectMenu changeValue={setUnitId} options={unitOptions} boxShadow="0px 4px 16px rgba(51, 51, 51, 0.02)" />
				</Stack>
				<Grid container spacing={3} justifyContent="space-between" style={{ paddingTop: '30px' }}>
					<Grid item xs={12} lg={6} className={classes.lessonContent}>
						<CustomTextField
							onChange={changeLessonTitle}
							value={lessonTitle}
							className={classes.newLessonInput}
							style={inputFieldStyle}
							label="Lesson Title"
							id="lesson-title"
							placeholder="eg: How to spell animals words"
						/>
						<div className={classes.descriptionInput}>
							<Button
								onClick={() => document.getElementById('grammar').click()}
								variant="text"
								className={clsx([classes.uploadButton, 'primary_text'])}
							>
								Upload grammar image
								<input id="grammar" type="file" onChange={changeInputFileImage} hidden />
							</Button>
							<InputLabel shrink htmlFor="description">
								Lesson Description
							</InputLabel>
							<TextareaAutosize
								onChange={changeLessonDescription}
								id="description"
								aria-label="lesson description"
								placeholder="eg: How to spell animals words"
							/>
						</div>

						<div className={classes.questionTitleContainer}>
							<Button onClick={() => document.getElementById('word').click()} variant="text" className={clsx([classes.uploadButton, 'primary_text'])}>
								Upload a image
								<input id="word" type="file" onChange={changeInputFileImage} hidden />
							</Button>

							<CustomTextField
								onChange={changeWordsInfo}
								className={classes.newLessonInput}
								value={wordsInfo}
								style={inputFieldStyle}
								label="Lesson Words"
								id="lesson-title"
								placeholder="Short Description"
							/>
						</div>

						<CustomTextField
							onChange={changeVideoLink}
							value={videoLink}
							className={classes.newLessonInput}
							style={inputFieldStyle}
							label="Youtube Link"
							id="lesson-title"
							placeholder="eg: https://youtu.be/rxN8Iuo28oQ"
						/>
					</Grid>
					<Grid item xs={12} lg={6} className={classes.lessonImage}>
						<UploadBox>
							<UploadBoxIcon color="#8A8A8A" style={{ width: '66px', height: '66px' }} />
							<span>Upload a image of the lesson</span>
							<Button
								onClick={() => document.getElementById('lessonImage').click()}
								variant="contained"
								className={clsx('primaryButton', classes.lessonButton)}
								startIcon={<UploadButtonIcon color="#fff" fontSize="inherit" />}
							>
								<input onChange={changeLessonImage} id="lessonImage" type="file" hidden />
								Upload
							</Button>
						</UploadBox>
					</Grid>
				</Grid>
			</section>
			<section className={classes.lessonQuestions}>
				<h3 className="h5">Add related questions</h3>
				<Grid container spacing={3} justifyContent="space-between" style={{ paddingTop: '30px' }}>
					<Grid item xs={12} lg={6} className={classes.lessonContent}>
						<div className={classes.questionTitleContainer}>
							<Button
								onClick={() => document.getElementById('question').click()}
								variant="text"
								className={clsx([classes.uploadButton, 'primary_text'])}
							>
								Upload a image
								<input id="question" type="file" onChange={changeInputFileImage} hidden />
							</Button>
							<CustomTextField
								onChange={changeQuestionTitle}
								className={classes.newLessonInput}
								value={questionTitle}
								style={inputFieldStyle}
								label="Question Title"
								id="lesson-title"
								placeholder="eg: How to spell animals words"
							/>
						</div>
						<div className={classes.answerContainer}>
							<Button variant="outlined" onClick={addNewAnswer}>
								add
							</Button>
							<CustomTextField
								onKeyDown={(event) => {
									if (event.keyCode === 13) {
										addNewAnswer();
									}
								}}
								onChange={changeAnswerTitle}
								value={answerTitle}
								className={clsx(classes.newLessonInput, classes.answerInputContainer)}
								style={inputFieldStyle}
								label="Answer"
								id="lesson-title"
								placeholder="eg: How to spell animals words"
							/>
						</div>
						<Button
							onClick={addNewQuestion}
							variant="contained"
							className={clsx('primaryButton', classes.lessonButton)}
							startIcon={<SaveIcon color="#fff" fontSize="inherit" />}
						>
							Add another question
						</Button>
					</Grid>
					<Grid className={classes.answersSection} item xs={12} lg={4} style={{ width: '100%', flexBasis: '100%' }}>
						{answers.length ? <AnswersList answers={answers} changeCorrectAnswer={changeCorrectAnswer} /> : null}
					</Grid>
				</Grid>
				{questions.length ? <QuestionsList questions={questions} /> : null}
			</section>
		</div>
	);
}

export default NewLesson;
