import { fetchArticles } from "../../services/content/content.service";
const state = {
	posts: [],
};

const mutations = {
	setData(state, data) {
		state.posts = data;
	},
};

const actions = {
	getPosts({ commit }) {
		const data = fetchArticles();
		commit("setData", data);
	},
};

const getters = {
	postsData() {
		return state.posts;
	},
};

export default { namespaced: true, state, mutations, actions, getters };
