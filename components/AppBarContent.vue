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
        @click="$vuetify.goTo(menuItem.goto)"
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
  data () {
    return {
      menuItems: [
        { text: 'Home', goto: '#home' },
        { text: 'About Me', goto: '#about' },
        { text: 'Works', goto: '#works' },
        { text: 'Expertise', goto: '#expertise' },
        { text: 'Testomonials', goto: '#testomonials' }
        // { text: 'Journal', goto: '#home' },
        // { text: 'Contact', goto: '#home' }
      ]
    }
  }
}
</script>
