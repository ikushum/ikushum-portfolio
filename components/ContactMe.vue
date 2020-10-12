<template>
  <v-container class="d-flex align-center text-center">
    <div style="width:100%">
      <h2 class="display-2 mt-12">
        Let's Work Together
      </h2>

      <v-row class="pt-5" justify="center" align="center">
        <v-col
          v-for="(contact, index) in contacts"
          :key="index"
          xs="12"
          sm="4"
          md="2"
        >
          <v-hover
            v-slot:default="{ hover }"
          >
            <div
              class="cursor-pointer pa-5"
              :class="{[contact.color + ' lighten-5'] : hover}"
              @click="contact.callback"
            >
              <v-icon
                v-if="contact.icon"
                :color="contact.color"
                size="87"
                :class="{'bnw' : !hover}"
              >
                {{ contact.icon }}
              </v-icon>

              <v-img
                v-if="contact.image"
                :src="contact.image"
                width="84"
                :class="{'bnw' : !hover}"
                class="mx-auto"
                @click="contact.callback"
              />

              <div
                :class="(hover ? contact.color : 'grey') + '--text'"
                class="my-2 caption"
              >
                {{ contact.title }}
              </div>
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      contacts: [
        {
          image: 'gmail.svg',
          title: 'Write me an email',
          color: 'red',
          callback: () => window.open('mailto:ikushum@gmail.com')
        },
        {
          icon: 'mdi-linkedin',
          title: 'Find me on linkedin',
          color: 'blue',
          callback: () => window.open('https://www.linkedin.com/in/ikushum/')
        },
        {
          image: 'upwork.svg',
          title: 'Hire me on Upwork',
          color: 'green',
          callback: () => window.open('https://www.upwork.com/o/profiles/users/~01d59c7d222074ad1c/')
        }
      ]
    }
  }
}
</script>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
  .display-2{
    font-weight: bold;
    font-family: 'Playfair Display', serif !important;
  }
  .bnw {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  }
</style>
