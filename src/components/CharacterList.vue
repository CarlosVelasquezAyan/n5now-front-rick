<template>
  <v-col>
    <v-data-table
      :headers="headers"
      :items="characters && characters.length ? characters : []"
      item-key="name"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
    >
      <template v-slot:item="{ item }">
        <img
          v-if="item.image"
          :src="item.image"
          :alt="item.name"
          width="200"
          height="300"
        />
        <span v-else>-</span>
      </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      characters: [],
      errors: [],
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Nombre",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "Especie",
          align: "start",
          sortable: false,
          value: "species",
        },
        {
          text: "Genero",
          align: "start",
          sortable: false,
          value: "gender",
        },
        {
          text: "house",
          align: "start",
          sortable: false,
          value: "house",
        },
        {
          text: "Foto",
          align: "start",
          sortable: false,
          value: "image",
        },
      ];
    },
  },
};
</script>
