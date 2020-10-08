<template>
  <v-container class="min-full-vh d-flex align-center">
    <div style="width:100%">
      <h2 class="display-2 my-12">
        My Expertise
      </h2>

      <v-row class="my-5">
        <v-col
          v-for="expertise in expertises"
          :key="expertise.title"
          xs="12"
          sm="6"
          md="6"
        >
          <v-list-item class="px-0">
            <v-list-item-content>
              <v-list-item-title class="display-1 d-flex align-center">
                <v-avatar tile class="mx-4">
                  <v-img contain :src="expertise.image" />
                </v-avatar>
                <div class="circle-bg py-5 pr-5" v-text="expertise.title" />
              </v-list-item-title>
              <div class="grey--text px-2 pa-2 line-height-25">
                {{ expertise.description || 'Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy it is based on a number of factors, including ad placement' }}
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      expertises: [
        {
          title: 'Vue',
          description: 'I have leveraged Vue to turn a number of business ideas into live working products. Be it supercharging a part of your application with Vue or building a complete SPA out of it, I\'m the right person you need.',
          image: '/expertise/vue.svg'
        },
        { title: 'Nuxt', description: 'I have used Nuxt to build applications that behave friendly not just with the users, but also with the crawlers the search engines release into the chaotic web. You can count on me for building both Universal and SPA apps.', image: '/expertise/nuxt.svg' },
        { title: 'Vuetify', description: 'I have leveraged Vuetify to significantly speed up the development process and still keeping the UI perfectly flawless. If you want your app to be up and running as soon and possible, let me do the Vuetify magic for you.', image: '/expertise/vuetify.svg' },
        { title: 'Firebase', description: 'I have used the Firebase Client SDK to perform all sorts of queries on both Cloud Firestore and Realtime Database. Written serverless codes with Cloud Functions. Used the Authentication, Storage, and Hosting services.', image: '/expertise/firebase.svg' }
        // { title: 'Tailwind', description: 'A short description', image: 'https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1596675041/tailwind-css-logo.svg' },
        // { title: 'SASS', description: 'A short description', image: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg' }
      ]
    }
  }
}
</script>

<style scoped>
  .circle-bg {
    background-size: contain;
    background-position: right;
    background-image: url('/circle.svg');
  }
  .line-height-25 {
    line-height: 25px;
  }
  .display-2{
    font-weight: bold;
    font-family: 'Playfair Display', serif !important;
  }
</style>
