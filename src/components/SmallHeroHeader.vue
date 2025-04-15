<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <div class="fade"></div>
  </div>
</template>

<style scoped>
h1 {
  color: white;
  font-size: 5rem;
  position: relative;
  top: 0;
  text-align: center;
  width: 100%;
  padding: 0 20px;
  line-height: 1.1;
  margin-top: 80px;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.8);
}

.greetings{
  padding-top: 100px;
  background-image: url('./../assets/img/wallpaper.jpg');
  box-shadow: inset 0 0 0 1000px rgba(56, 56, 56, 0.5);
  padding-bottom: 15vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
}

.title {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 0;
  width: 50vh;
}

h3{
  color: white;
  font-family: "GeneralSansSemiBold";
  position: relative;
  text-align: center;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
}

.fade{
  background: linear-gradient(to bottom, rgba(56, 56, 56, 0), #6A6D7A);
  position: absolute;
  bottom: 0;
  height: 10vh;
  margin-top: -30vh;
  width: 100%;
}

@media (max-width: 1000px){
  .greetings{
    background-size: cover;
    background-position: center;
  }
}

@media (max-width: 600px) {

  h1 {
    font-size: 2rem;
    margin-top: 30px;
  }

  .title {
    width: 90%;
  }
}
</style>
