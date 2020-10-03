<template>
  <v-container class="circle-bg min-full-vh d-flex align-center">
    <v-row>
      <v-col class="d-none d-lg-block" cols="12" lg="6">
        <v-img
          contain
          src="/ishan.png"
          class="rounded-xl"
          gradient="to left top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)"
        />
      </v-col>

      <v-col cols="12" lg="6" class="d-flex justify-center align-start flex-column text-left px-lg-12">
        <h2 class="display-2">
          About Me
        </h2>

        <div class="my-5">
          <h4 class="headline">
            Hello I'am <span class="primary--text font-italic"> Ishan Subedi</span>
          </h4>

          <h4 class="subtitle-1">
            Vue / Vuetify and Nuxt Developer
          </h4>
        </div>

        <p class="my-5 grey--text body-1">
          I'm a <strong> Freelance Frontend Engineer </strong> based in Kathmandu, Nepal.
          Have been providing value to <strong> high profile clients </strong> like yourself for 4 years.
          I've helped my clients build amazing web apps and watch them grow bigger and perform amazingly well
          in the market
        </p>

        <v-btn large color="primary" depressed class="my-5">
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
</style>
