<template>
  <v-img
    gradient="to right top, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.7)"
    src="/header-bg.svg"
    cover
    class="full-vh black d-flex align-center text-center white--text"
  >
    <v-container>
      <h1 class="display-2 font-weight-bold">
        Vue / Vuetify And Nuxt Rockstar
      </h1>

      <div class="my-10">
        <h2 class="headline">
          Namaste, I’m Ishan Subedi
        </h2>
        <h3 class="body-1">
          From the roots of Himalaya
        </h3>
      </div>

      <v-btn
        large
        color="primary"
        depressed
        @click="$emit('click-action')"
      >
        {{ actionText }}
      </v-btn>
    </v-container>
  </v-img>
</template>

<script>
export default {
  props: {
    actionText: {
      type: String,
      default: 'About Me'
    }
  }
}
</script>

<style scoped>
.display-2{
  font-family: 'Playfair Display', serif !important;
  font-weight: bold;
}
</style>
