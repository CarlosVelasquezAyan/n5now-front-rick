<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col>
        <h1 class="text-uppercase">{{ $t("characterListTitle") }}</h1>
        <CharacterList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CharacterList from "../../../components/CharacterList";
export default {
  name: "ListView",
  components: {
    CharacterList,
  },
};
</script>
