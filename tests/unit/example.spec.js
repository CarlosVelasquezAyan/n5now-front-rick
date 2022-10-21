import Vue from "vue";
import Vuetify from "vuetify";
import router from "../../src/router/index.js";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueI18n from "vue-i18n";
import Vuex from "vuex";

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(VueI18n);
localVue.use(router);
localVue.use(Vuex);

import CardRick from "../../src/components/CardRick.vue";
import CharacterList from "../../src/components/CharacterList.vue";
import CharacterImage from "../../src/components/CharacterImage.vue";

describe("CardRick.vue", () => {
  const messages = {
    en: {
      characterListLink: "Go to character list",
    },
    es: {
      characterListLink: "Ir al listado de personajes",
    },
  };
  const i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages,
  });
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("renders component when passed", () => {
    const $t = () => {};
    // render the component
    const wrapper = shallowMount(CardRick, {
      mocks: { $t },
      i18n,
      vuetify,
    });
    expect(wrapper.exists()).toBe(true);
  });
});

describe("CharacterList.vue", () => {
  const messages = {
    en: {
      header1: "Name",
      header2: "Species",
      header3: "Gender",
      header4: "Status",
      header5: "Location",
      header6: "Origin",
      header7: "Image",
    },
    es: {
      header1: "Nombre",
      header2: "Especie",
      header3: "Género",
      header4: "Estado",
      header5: "Localización",
      header6: "Origen",
      header7: "Foto",
    },
  };
  const i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages,
  });
  let actions;
  let store;
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
    actions = {
      fetchCharacters: jest.fn(),
    };
    store = new Vuex.Store({
      state: {},
      actions,
    });
  });
  it("renders component when passed", () => {
    // render the component
    const wrapper = shallowMount(CharacterList, {
      Vuex,
      localVue,
      i18n,
      vuetify,
      router,
      store,
    });
    expect(wrapper.exists()).toBe(true);
  });
});
describe("CharacterImage.vue", () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("renders component when passed", () => {
    const $t = () => {};
    // render the component
    const wrapper = shallowMount(CharacterImage, {
      mocks: { $t },
      vuetify,
      propsData: {
        src: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        alt: "Rick Sanchez",
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
