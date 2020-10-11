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

    <the-footer :menu-items="menuItems" />
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

<style>
.nuxt-content-highlight > .filename {
  font-family: Roboto;
  right: 0;
  top: 0;
  position: absolute;
  margin-right: 0.8rem;
  font-size: 0.8rem;
  color: rgba(203, 213, 224, 1);
  font-weight: 300;
  z-index: 10;
  margin-top: 0.5rem;
}
.v-application code {
  all: initial;
  all: unset;
  font-size: 1rem;
  font-family: Consolas, Roboto Mono, monospace;
}
.nuxt-content-highlight {
  font-family: Consolas;
  font-size: 1rem;
  position: relative;
  z-index: 1;
  border-radius: 6px;
}
</style>
