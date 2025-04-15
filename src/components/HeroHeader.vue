<script setup>
</script>

<template>
  <div class="greetings">
    <img class="title" src="./../assets/img/eternal-nobg.png" />
    <h1>Eternal E-Sport</h1>
  </div>
</template>

<style scoped>
h1 {
  color: white;
  font-size: 14vw;
  position: relative;
  top: 15px;
  font-family: "NewOrder";
  font-weight: bolder;
  text-align: center;
  line-height: 1.1;
  margin: auto;
  padding: 0 10px;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.8);
}

@media (min-width: 500px) {
  h1 {
     font-size: 8rem;
    }
}

.greetings{
  width:100%;
  padding-top: 250px;
  background-image: url('./../assets/img/wallpaper.jpg');
  padding-bottom: 35vh;
  background-size: cover;
  background-attachment: fixed;
  background-position:center;
  box-shadow: inset 0 0 0 1000px rgba(56, 56, 56, 0.5);
}

.title {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 0;
  width: 95vw;
  max-width: 50vh;
}

h3{
  color: white;
  font-family: "GeneralSansSemiBold";
  position: relative;
  text-align: center;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
  font-size: 1.2rem;
}

a { 
  color: white; 
  text-decoration: none; 
}


</style>
