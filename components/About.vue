<template>
  <v-container class="circle-bg min-full-vh d-flex align-center">
    <v-row align="center">
      <v-col class="d-none d-sm-block" sm="6" cols="12">
        <v-img
          contain
          src="/ishan.jpg"
          lazy-src="/ishan-lazy.jpg"
          gradient="to left top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)"
        />
      </v-col>

      <v-col
        sm="6"
        cols="12"
        class="d-flex justify-center align-start flex-column text-left px-lg-12"
      >
        <h2 class="display-2 my-5">
          About Me
        </h2>

        <!-- <div class="my-5">
          <h4 class="headline">
            Hello I'am <span class="primary--text font-italic"> Ishan Subedi</span>
          </h4>

          <h4 class="subtitle-1">
            Vue / Vuetify and Nuxt Developer
          </h4>
        </div> -->

        <p class="my-5 grey--text text--darken-2 headline">
          I help businesses build <strong>  extraordinary web solutions </strong> and succeed together.
          A Kathmandu based <strong> Frontend Engineer </strong> helping clients bring
          their ideas into reality.
        </p>

        <v-hover
          v-slot:default="{ hover }"
        >
          <v-btn
            tile
            large
            outlined
            class="my-5"
            :color="hover ? 'primary' : 'black'"
            @click="$vuetify.goTo('#works')"
          >
            See my Works
          </v-btn>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .circle-bg {
    background-size: 40%;
    background-position: center;
    background-image: url('/circle.svg');
  }
  .display-2{
    font-weight: bold;
    font-family: 'Playfair Display', serif !important;
  }
</style>
