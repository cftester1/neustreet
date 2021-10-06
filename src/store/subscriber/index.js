import { SubscribeService } from "../../services/subscriber/subscriber.service";

const state = {
	pending: false,
	success: false,
	message: null,
};

const mutations = {
	setPending(state, data) {
		state.pending = data;
	},
	setSuccess(state, data) {
		state.success = data;
	},
	setMessage(state, message) {
		state.message = message;
	},
	clearSubscribe(state) {
		state.pending = false;
		state.success = false;
		state.message = {};
	},
};

const actions = {
	subscribe({ commit }, user) {
		commit("setPending", true);
		return SubscribeService(user).then(
			(message) => {
				commit("setPending", false);
				commit("setSuccess", true);
				commit("setMessage", message);
				return Promise.resolve(message);
			},
			(error) => {
				commit("setPending", false);
				commit("setSuccess", false);
				commit("setMessage", {});
				return Promise.reject(error);
			}
		);
	},
	clear({ commit }) {
		LogoutService();
		commit("clearSubscribe");
	},
};

const getters = {};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
