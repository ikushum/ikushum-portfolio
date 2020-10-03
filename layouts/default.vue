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
      <app-bar-content />
    </v-app-bar>

    <v-app-bar
      dark
      fixed
      color="#212427"
      inverted-scroll
      class="px-12"
      scroll-threshold="65"
    >
      <app-bar-content />
    </v-app-bar>

    <v-main>
      <v-container style="max-width:2300px" class="pa-0">
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
            <v-btn v-for="menuItem in menuItems" :key="menuItem.text" dark text class="text-capitalize mx-2">
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
import AppBarContent from '@/components/AppBarContent'
export default {
  components: { AppBarContent },
  data () {
    return {
      title: 'ikushum',

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
