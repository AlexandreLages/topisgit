import axios from 'axios';

const settingsAxios = axios.create({
	headers: {
		'Authorization': 'token bed79dd8750c68b050ed07310ce59f50683c365d'
	}
});

export default class ApiUtils {
	static async getRepositoriesGithub(language, page) {
		const repositories = await settingsAxios.get(`https://api.github.com/search/repositories?q=${language}&per_page=10&page=${page}&sort=stars`);
		return repositories;
	}
}