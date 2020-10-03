<template>
  <v-img
    :src="work.image"
    :height="height"
    dark
    class="rounded-lg pa-5"
    gradient="to left top, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.7)"
  >
    <div class="d-flex flex-column fill-height">
      <h1>{{ work.title }}</h1>
      <p class="caption">
        {{ work.description }}
      </p>

      <v-spacer />

      <v-btn class="ml-auto" text>
        View
      </v-btn>
    </div>
  </v-img>
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
  }
}
</script>
