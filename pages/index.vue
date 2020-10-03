<template>
  <div>
    <app-header style="margin-top:-90px" />
    <about />
    <my-works />
    <my-expertise />
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import About from '@/components/About'
import MyWorks from '@/components/MyWorks/Index'
import MyExpertise from '@/components/MyExpertise'
export default {
  components: { AppHeader, About, MyWorks, MyExpertise }
}
</script>
