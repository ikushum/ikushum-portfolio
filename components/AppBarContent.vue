<template>
  <v-container style="width:100%" class="d-flex">
    <v-img contain max-width="100" src="/logo.svg" />

    <v-spacer />

    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="menuItem in menuItems"
        :key="menuItem.text"
        text
        class="text-capitalize mx-2"
        @click="jumpTo(menuItem)"
      >
        {{ menuItem.text }}
      </v-btn>
    </template>

    <v-btn
      v-else
      icon
      @click="$emit('show-nav-drawer')"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    jumpTo (menuItem) {
      if (menuItem.page) {
        this.$router.push(menuItem.page)
      }

      if (document.querySelector(menuItem.goto)) {
        this.$vuetify.goTo(menuItem.goto)
      }
    }
  }
}
</script>
