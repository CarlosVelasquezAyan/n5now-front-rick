<template>
  <div class="text-center" data-app>
    <v-tooltip bottom>
      <template #activator="{ on }">
        <v-img
          :src="src"
          style="
            max-width: 100px !important;
            margin: 5px 5px 5px 0px !important;
          "
          :alt="alt"
          v-on="on"
          @click="zoom(src)"
        >
        </v-img>
      </template>
      <span>{{ $t("clickImg") }}</span>
    </v-tooltip>

    <v-dialog v-model="dialog" max-width="80vh">
      <div
        v-if="selectedImage"
        class="text-sm-center justify-center"
        max-width="85vh"
      >
        <img
          :src="selectedImage"
          alt=""
          width="100%"
          style=""
          @click.stop="selectedImage = null"
        />
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    src: null,
    alt: null,
  },
  data() {
    return {
      dialog: false,
      selectedImage: null,
    };
  },
  methods: {
    zoom(img) {
      this.dialog = true;
      this.selectedImage = img;
    },
  },
};
</script>
