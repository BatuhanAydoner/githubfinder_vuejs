import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: [],
    user: {},
    repos: [],
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getUser(state) {
      return state.user;
    },
    getRepos(state) {
      return state.repos;
    },
  },
  mutations: {
    setUsers(state, value) {
      state.users = [...value];
    },
    setUser(state, value) {
      state.user = { ...value };
    },
    setRepos(state, value) {
      state.repos = [...value];
    },
    clearAll(state) {
      state.users = [];
      state.user = {};
      state.repos = [];
    },
  },
  actions: {
    setUsers(mutations, value) {
      mutations.commit("setUsers", value);
    },
    setUser(mutations, value) {
      mutations.commit("setUser", value);
    },
    setRepos(mutations, value) {
      mutations.commit("setRepos", value);
    },
  },
});
