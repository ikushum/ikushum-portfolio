<template>
  <v-footer class="pa-10" color="#212427">
    <v-container>
      <v-row align="center">
        <v-col
          cols="12"
          md="3"
        >
          <v-img
            :class="{'mx-auto': !$vuetify.breakpoint.mdAndUp}"
            contain
            max-width="150"
            src="/logo.svg"
            class="cursor-pointer"
            @click="$router.push('/')"
          />
        </v-col>

        <v-col cols="12" md="7" class="text-center">
          <v-btn
            v-for="menuItem in menuItems"
            :key="menuItem.text"
            dark
            text
            x-small
            class="text-capitalize mx-2"
            @click="navigate(menuItem)"
          >
            {{ menuItem.text }}
          </v-btn>
        </v-col>

        <v-col class="text-center text-md-right" cols="12" md="2">
          <v-icon
            dark
            class="mx-2"
            @click="() => {}"
          >
            mdi-facebook
          </v-icon>

          <v-icon
            dark
            class="mx-2"
            @click="() => {}"
          >
            mdi-instagram
          </v-icon>

          <v-icon
            dark
            class="mx-2"
            @click="() => {}"
          >
            mdi-twitter
          </v-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
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
    navigate (menuItem) {
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
