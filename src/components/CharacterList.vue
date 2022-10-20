<template>
  <v-col>
    <v-data-table
      :headers="headers"
      :items="characters && characters.results && characters.results.length ? characters.results : []"
      item-key="name"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
    >
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
  </v-col>
</template>

<script>
import { mapActions } from 'vuex'
export default {
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
          text: this.$i18n.t('header1'),
          align: "center",
          sortable: true,
          value: "name",
        },
        {
          text: this.$i18n.t('header2'),
          align: "center",
          sortable: true,
          value: "species",
        },
        {
          text: this.$i18n.t('header3'),
          align: "center",
          sortable: true,
          value: "gender",
        },
        {
          text: this.$i18n.t('header4'),
          align: "center",
          sortable: true,
          value: "image",
        },
      ];
    },
    characters() {
      return this.$store.getters.getCharacters
    }
  },
  methods: {
    ...mapActions(['fetchCharacters'])
  },
  created() {
    this.fetchCharacters()
  },
};
</script>
