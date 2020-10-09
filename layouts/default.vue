<template>
  <v-app>
    <v-app-bar
      app
      flat
      dark
      hide-on-scroll
      class="px-12"
      height="90px"
      color="transparent"
    >
      <app-bar-content
        :menu-items="menuItems"
        @show-nav-drawer="isDrawerOpen = true"
      />
    </v-app-bar>

    <v-app-bar
      dark
      fixed
      color="#212427"
      inverted-scroll
      class="px-12"
      height="65px"
      scroll-threshold="65"
    >
      <app-bar-content
        :menu-items="menuItems"
        @show-nav-drawer="isDrawerOpen = true"
      />
    </v-app-bar>

    <the-nav-drawer
      v-model="isDrawerOpen"
      :menu-items="menuItems"
    />

    <v-main>
      <v-container style="max-width:2300px" class="pa-0 pb-12">
        <nuxt />
      </v-container>
    </v-main>

    <the-footer :menu-items="menuItems" />
  </v-app>
</template>

<script>
import TheFooter from '@/components/TheFooter'
import TheNavDrawer from '@/components/TheNavDrawer'
import AppBarContent from '@/components/AppBarContent'
export default {
  components: { TheNavDrawer, AppBarContent, TheFooter },
  data () {
    return {
      isDrawerOpen: false,
      menuItems: [
        { text: 'Home', goto: '#home' },
        { text: 'About', goto: '#about' },
        { text: 'Works', goto: '#works' },
        // { text: 'Expertise', goto: '#expertise' },
        { text: 'Testomonials', goto: '#testomonials' },
        { text: 'Journals', page: '/journals' },
        { text: 'Contact', isCta: 'true', goto: '#contact' }
      ]
    }
  }
}
</script>
