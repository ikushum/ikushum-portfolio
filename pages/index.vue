<template>
  <div>
    <app-header style="margin-top:-90px" />

    <div class="px-sm-10 px-5">
      <about />
      <my-works />
      <my-expertise />
      <testomonials />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import About from '@/components/About'
import MyWorks from '@/components/MyWorks/Index'
import MyExpertise from '@/components/MyExpertise'
import Testomonials from '@/components/Testomonials'
export default {
  components: { AppHeader, About, MyWorks, MyExpertise, Testomonials }
}
</script>
