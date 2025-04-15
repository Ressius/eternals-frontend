<script setup>
import SmallHeroHeader from '../components/SmallHeroHeader.vue'
</script>

<template>
  <main>
    <SmallHeroHeader msg="Notre Équipe" />
    <div class="content">
      <div class="team">
        <div class="block">
          <img src="../assets/crew/canard.gif" />
          <h3>Canard</h3>
          <p>Test Desc</p>
        </div>
      </div>
    </div>
    
  </main>
</template>

<style scoped>
.team{
  display: flex;
  flex-wrap: wrap;
  gap:50px;
  color: white;
  padding: 50PX 10vw;
  justify-content: space-evenly;
}

.block{
  width: 400px;
  padding-bottom: 60px;
}

.block img{
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  display: block;
  border-radius: 20px;
}

h3{
  font-family: "GeneralSansBold";
  line-height: 1.2;
  font-size: 2rem;
  margin: 20px 0;
}
</style>
