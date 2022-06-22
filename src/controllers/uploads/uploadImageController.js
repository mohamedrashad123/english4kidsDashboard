import { postData } from '../../constant/axiosClon';

const uploadImageBaseRoute = '/upload';
export const uploadImage = async (image, folder) => {
	const formData = new FormData();

	formData.append('image', image);
	formData.append('folder', folder);

	const { statusCode, imageName } = await postData(uploadImageBaseRoute, formData);

	if (statusCode === 200 && imageName) {
		return imageName;
	}

	return '';
};
