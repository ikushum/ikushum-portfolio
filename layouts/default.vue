<template>
  <v-app>
    <site-nav />
    <main>
      <nuxt />
    </main>
    <site-footer />
  </v-app>
</template>

<script>
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default {
  components: { SiteNav, SiteFooter }
}
</script>
