import { getData, postData, putData } from '../../constant/axiosClon';
import { cdnLink } from '../../constant/const';

const lessonBaseRoute = '/lessons';
export default {
	createNewLesson: async (lessonData) => {
		const formData = new FormData();

		Object.entries(lessonData).forEach(([key, value]) => {
			if (value !== null) formData.append(key, value);
		});
		const { statusCode, lessonId } = await postData(lessonBaseRoute, formData);

		if (statusCode === 200 && lessonId) {
			return lessonId;
		}

		return false;
	},
	updateLesson: async (lessonData, lessonId) => {
		const formData = new FormData();

		Object.entries(lessonData).forEach(([key, value]) => {
			if (value !== null) formData.append(key, value);
		});
		const { statusCode, success } = await putData(`${lessonBaseRoute}/${lessonId}`, formData);

		if (statusCode === 200 && success) return true;
		return false;
	},
	getListOfLessons: async (gradeId = '', unitId = '', search = '') => {
		const {
			data: { lessons, statusCode },
		} = await getData(`/lessons?gradeId=${gradeId}&unitId=${unitId}&search=${search}`);

		if (statusCode === 200)
			return lessons.map((lesson) => {
				return { ...lesson, videoMinutes: 18, image: `${cdnLink}/lessons/${lesson.image}` };
			});
		return [];
	},
	getDetails: async (lessonId) => {
		const {
			data: { lesson_details, statusCode },
		} = await getData(`${lessonBaseRoute}/${lessonId}`);

		if (statusCode === 200) return lesson_details;
		return null;
	},
};
