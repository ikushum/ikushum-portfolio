<template>
  <v-container style="width:100%" class="d-flex align-center">
    <v-img contain max-width="100" src="/logo.svg" class="cursor-pointer" @click="$router.push('/')" />

    <v-spacer />

    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="menuItem in menuItems"
        :key="menuItem.text"
        :text="!menuItem.isCta"
        :outlined="!!menuItem.isCta"
        :color="menuItem.isCta ? 'primary lighten-1' : 'white'"
        :class="{'text-capitalize': !menuItem.isCta}"
        tile
        depressed
        class="mx-2"
        @click="jumpTo(menuItem)"
      >
        {{ menuItem.text }}
      </v-btn>
    </template>

    <v-btn
      v-else
      icon
      class="mt-2"
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

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
