<template>
  <v-navigation-drawer
    :value="value"
    fixed
    dark
    width="80%"
    color="#212427"
    @input="$emit('input', $event)"
  >
    <v-list class="py-0">
      <v-list-item class="py-1">
        <v-list-item-content>
          <v-img contain max-width="100" src="/logo.svg" />
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item
        v-for="menuItem in menuItems"
        :key="menuItem.text"
        link
        class="text-capitalize mx-2 text-left"
        @click="navigate(menuItem)"
      >
        <v-list-item-content>
          {{ menuItem.text }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true
    },
    value: {
      type: Boolean,
      default: false
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

      this.$emit('input', false)
    }
  }
}
</script>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
