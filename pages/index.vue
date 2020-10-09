<template>
  <div>
    <app-header
      id="home"
      style="margin-top:-90px"
      @click-action="$vuetify.goTo('#about')"
    />

    <div class="px-sm-10 px-5">
      <about id="about" />
      <my-works id="works" />
      <testomonials id="testomonials" />
      <!-- <my-expertise id="expertise" /> -->
      <my-journal />
      <contact-me id="contact" class="my-12" />
    </div>
  </div>
</template>

<script>
import About from '@/components/About'
import AppHeader from '@/components/Header'
import MyJournal from '@/components/MyJournal'
import ContactMe from '@/components/ContactMe'
import MyWorks from '@/components/MyWorks/Index'
import Testomonials from '@/components/Testomonials'
// import MyExpertise from '@/components/MyExpertise'

export default {
  components: {
    About,
    MyWorks,
    ContactMe,
    MyJournal,
    AppHeader,
    Testomonials
    // MyExpertise,
  },
  head () {
    return {
      title: ''
    }
  }
}
</script>
