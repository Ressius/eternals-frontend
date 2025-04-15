<script setup>
</script>

<script>
import "keen-slider/keen-slider.min.css"
import KeenSlider from "keen-slider"

const animation = { duration: 100000, easing: (t) => t }

export default {
  name: "Slider",
  mounted() {
    this.slider = new KeenSlider(this.$refs.slider, {
      loop: true,
      renderMode: "performance",
      drag: false,
      slides: { perView: "auto" },
      created(s) {
        s.moveToIdx(5, true, animation)
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
    })
  },
  beforeDestroy() {
    if (this.slider) this.slider.destroy()
  },
}
</script>

<template>
  <div class="partners">
    <div ref="slider" class="keen-slider logos-container">
        <div class="keen-slider__slide number-slide1">
          <img src="../assets/img/pr.png" alt="Partner Logo" />
        </div>
        <div class="keen-slider__slide number-slide2">
          <img src="../assets/img/salvatore.png" alt="Partner Logo" />
        </div>
        <div class="keen-slider__slide number-slide4">
          <img src="../assets/img/adt.png" alt="Partner Logo" />
        </div>
        <div class="keen-slider__slide number-slide5">
          <img src="../assets/img/votrepoutine.png" alt="Partner Logo" />
        </div>
        <div class="keen-slider__slide number-slide1">
          <img src="../assets/img/pr.png" alt="Partner Logo" />
        </div>
        <div class="keen-slider__slide number-slide2">
          <img src="../assets/img/salvatore.png" alt="Partner Logo" />
        </div>
        <div class="keen-slider__slide number-slide4">
          <img src="../assets/img/adt.png" alt="Partner Logo" />
        </div>
        <div class="keen-slider__slide number-slide5">
          <img src="../assets/img/votrepoutine.png" alt="Partner Logo" />
        </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: white;
  font-size: 2.5rem;
  font-family: "GeneralSansSemiBold";
  line-height: 1.1;
}

.partners {
  text-align: center;
  overflow: hidden;
}

.keen-slider__slide {
  flex: 0 0 auto; /* Prevent slides from shrinking */
  width: auto; /* Ensure slides fit their content */
  max-width: 350px;
}

.logos-container {
  position: relative;
  overflow: visible;
}

img {
  height: 200px;
  margin-top:5%;
  transition: transform 0.3s ease; /* Smooth scaling on hover */
  cursor: pointer;
}

img:hover {
  transform: scale(1.05); /* Slightly enlarge the logo */
}
</style>