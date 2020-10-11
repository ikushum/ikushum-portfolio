<template>
  <v-hover v-slot:default="{ hover }">
    <v-img
      :src="work.image"
      :height="height"
      dark
      class="pa-5 cursor-pointer"
      :gradient="`to left top, rgba(0, 0, 0, ${hover ? 0.7 : 0.5}), rgba(0, 0, 0, ${hover ? 0.9 : 0.8})`"
      @click="openExternal(work)"
    >
      <div class="d-flex flex-column fill-height">
        <h1>{{ work.title }}</h1>
        <p class="caption">
          {{ work.description }}
        </p>

        <v-spacer />

        <v-btn
          v-if="hover"
          tile
          dark
          depressed
          outlined
          class="mx-auto"
          @click="openExternal(work)"
        >
          VISIT
        </v-btn>

        <v-spacer />
      </div>
    </v-img>
  </v-hover>
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      required: true
    },
    height: {
      type: [String, Number],
      default: 200
    }
  },
  methods: {
    openExternal (work) {
      if (!work.link) {
        return
      }

      window.open(work.link)
    }
  }
}
</script>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
