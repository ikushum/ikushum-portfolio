<template>
  <div>
    <app-header id="home" style="margin-top:-90px" />

    <div class="px-sm-10 px-5">
      <about id="about" />
      <my-works id="works" />
      <my-expertise id="expertise" />
      <testomonials id="testomonials" />
      <my-journal id="journal" />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import About from '@/components/About'
import MyWorks from '@/components/MyWorks/Index'
import MyExpertise from '@/components/MyExpertise'
import Testomonials from '@/components/Testomonials'
import MyJournal from '@/components/MyJournal'
export default {
  components: { AppHeader, About, MyWorks, MyExpertise, Testomonials, MyJournal }
}
</script>
