import { postData } from '../../constant/axiosClon';

const lessonBaseRoute = '/lessons';
export default {
	createNewLesson: async (lessonData) => {
		console.log(lessonData);
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
};
