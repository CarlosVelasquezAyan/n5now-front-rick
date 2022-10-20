import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
  },
  getters: {
    getCharacters: (state) => state.characters,
  },
  actions: {
    async fetchCharacters({ commit }) {
      try {
        const data = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        commit("SET_CHARACTERS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = characters;
    },
  },
});
