<template>
  <v-container class="circle-bg min-full-vh d-flex align-center">
    <v-row>
      <v-col class="d-none d-lg-block frame-border-bg pb-0" cols="12" lg="6">
        <v-img
          contain
          src="/ishan.png"
          class="rounded-xl mt-5 ml-5"
          gradient="to left top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)"
        />
      </v-col>

      <v-col cols="12" lg="6" class="d-flex justify-center align-start flex-column text-left px-lg-12">
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

        <p class="my-5 grey--text headline">
          I help businesses build <strong>  extraordinary web solutions </strong> and succeed together.
          A Kathmandu based <strong> Frontend Engineer </strong> helping clients bring
          their ideas into reality.
        </p>

        <v-btn
          large
          color="primary"
          depressed
          class="my-5"
          @click="$vuetify.goTo('#works')"
        >
          See my Works
        </v-btn>
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
  .frame-border-bg {
    background-size: 90%;
    background-position: left top;
    background-image: url('/frame-border.svg');
  }
  .display-2{
    font-weight: bold;
    font-family: 'Playfair Display', serif !important;
  }
</style>
