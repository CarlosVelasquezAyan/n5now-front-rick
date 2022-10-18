<template>
  <v-card class="mx-auto" max-width="344">
    <v-img src="@/assets/Rick_and_Morty.svg"></v-img>
    <v-card-title> Rick and Morty </v-card-title>
    <v-card-actions>
      <router-link :to="{ name: 'rick-and-morty-characters' }">
        <v-btn color="orange lighten-2" text>
          {{ $t("characterListLink") }}</v-btn
        >
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
