<template>
  <v-container style="width:100%" class="d-flex">
    <v-img contain max-width="100" src="/logo.svg" />

    <v-spacer />

    <v-btn v-for="menuItem in menuItems" :key="menuItem.text" text class="text-capitalize mx-2">
      {{ menuItem.text }}
    </v-btn>

    <!-- <v-btn
      icon
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn> -->
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        { text: 'Home' },
        { text: 'About Me' },
        { text: 'Works' },
        { text: 'Expertise' },
        { text: 'Journal' },
        { text: 'Contact' }
      ]
    }
  }
}
</script>
