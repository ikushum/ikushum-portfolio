<template>
  <v-app>
    <v-app-bar
      dark
      fixed
      color="#212427"
      class="px-12"
      height="65px"
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
            <v-btn
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              dark
              text
              x-small
              absoluteclass="text-capitalize mx-2"
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
      title: 'ikushum',
      isDrawerOpen: false,
      menuItems: [
        { text: 'Portfolio', page: '/' },
        { text: 'Journals', page: '/journals' }
      ]
    }
  }
}
</script>
