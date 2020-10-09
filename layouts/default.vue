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
  </v-app>
</template>

<script>
import TheNavDrawer from '@/components/TheNavDrawer'
import AppBarContent from '@/components/AppBarContent'
export default {
  components: { TheNavDrawer, AppBarContent },
  data () {
    return {
      isDrawerOpen: false,
      menuItems: [
        { text: 'Home', goto: '#home' },
        { text: 'About Me', goto: '#about' },
        { text: 'Works', goto: '#works' },
        // { text: 'Expertise', goto: '#expertise' },
        { text: 'Testomonials', goto: '#testomonials' },
        { text: 'Journals', page: '/journals' }
        // { text: 'Contact', goto: '#home' }
      ]
    }
  }
}
</script>
