<script setup>
</script>

<template>
  <div class="blocks-container">
    <div class="block large"></div> <!-- Large box -->
    <div class="block small"></div> <!-- Small box -->
    <div class="block small"></div> <!-- Small box -->
    <div class="block large"></div> <!-- Large box -->
    <div class="block large"></div> <!-- Large box -->
    <div class="block small"></div> <!-- Small box -->
  </div>
</template>

<style scoped>
.blocks-container {
  width: 50vw;
  min-width: 1000px;
  margin: auto;
  text-align: center;
  height: 600px;
  display: flex;
  flex-flow: column wrap; /* Allow wrapping of boxes */
  gap: 50px; /* Spacing between boxes */
  justify-content: center; /* Center the boxes horizontally */
}

.block {
  background-color: #f69201; /* Example color */
  border-radius: 8px;
  position: relative;
}

.block.large {
  height: 300px;
}

.block.small {
  height: 200px;
}
</style>