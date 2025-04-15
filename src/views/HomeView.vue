<script setup>
import Blocks from '../components/Blocks.vue';
import HeroHeader from '../components/HeroHeader.vue'
import OurPartners from '../components/OurPartners.vue';

</script>

<template>
  <main>
    <HeroHeader />
    <div class="fade">
      <OurPartners />
    </div>
    <div class="content" style="background-color: #111;">
      <h2>Saison Été 2025</h2>
      <Blocks />
    </div>
  </main>
</template>

<style scoped>  
.fade{
  background: linear-gradient(to bottom, rgba(56, 56, 56, 0), #6A6D7A);
  height: 20vh;
  margin-top: -20vh;
  width: 100%;
}

body {
  width:100vw;
  overflow-x:hidden;
}


h2{
  font-weight: bolder;
  font-size: 60px;
  margin-bottom: 30px;
  color: white;
  text-align: center;
  padding-top: 40px;
}
</style>
