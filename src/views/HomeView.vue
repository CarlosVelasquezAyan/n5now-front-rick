<template>
  <v-container>
    <v-row>
      <v-col>
        <CardRick />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardRick from "./../components/CardRick.vue";

export default {
  name: "HomeView",
  components: {
    CardRick,
  },
};
</script>
