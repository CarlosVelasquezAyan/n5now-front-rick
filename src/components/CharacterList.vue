<template>
  <v-col>
    <v-data-table
      :headers="headers"
      :items="
        characters && characters.results && characters.results.length
          ? characters.results
          : []
      "
      :server-items-length="
        characters && characters.info && characters.info.count
          ? characters.info.count
          : 0
      "
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
    >
      // eslint-disable-next-line no-use-before-define
      <template v-slot:item.image="{ item }">
        <CharacterImage v-if="item.image" :src="item.image" :alt="item.name" />
        <span v-else> - </span>
      </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="
          characters && characters.info && characters.info.pages
            ? characters.info.pages
            : 0
        "
        @input="fetchCharacters(page)"
      ></v-pagination>
    </div>
  </v-col>
</template>

<script>
import { mapActions } from "vuex";
import CharacterImage from "../components/CharacterImage.vue";

export default {
  components: {
    CharacterImage,
  },
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      errors: [],
    };
  },
  computed: {
    headers() {
      return [
        {
          text: this.$i18n.t("header1"),
          align: "center",
          sortable: false,
          value: "name",
        },
        {
          text: this.$i18n.t("header2"),
          align: "center",
          sortable: false,
          value: "species",
        },
        {
          text: this.$i18n.t("header3"),
          align: "center",
          sortable: false,
          value: "gender",
        },
        {
          text: this.$i18n.t("header4"),
          align: "center",
          sortable: false,
          value: "status",
        },
        {
          text: this.$i18n.t("header5"),
          align: "center",
          sortable: false,
          value: "location.name",
        },
        {
          text: this.$i18n.t("header6"),
          align: "center",
          sortable: false,
          value: "origin.name",
        },
        {
          text: this.$i18n.t("header7"),
          align: "center",
          sortable: false,
          value: "image",
        },
      ];
    },
    characters() {
      return this.$store.getters.getCharacters;
    },
  },
  methods: {
    ...mapActions(["fetchCharacters"]),
  },
  created() {
    this.fetchCharacters(this.page);
  },
};
</script>
