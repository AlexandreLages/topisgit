import axios from 'axios';

const settingsAxios = axios.create({
	headers: {
		'Authorization': 'token 72a00f5ecf53c0071a9b86729149176096150c76'
	}
});

export default class ApiUtils {
	static async getRepositoriesGithub(language, page) {
		const repositories = await settingsAxios.get(`https://api.github.com/search/repositories?q=${language}&per_page=10&page=${page}&sort=stars`);
		return repositories;
	}
}