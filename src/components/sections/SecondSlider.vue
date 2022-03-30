<template>
  <section>
    <div
      class="
        container-lg
        text-center
        d-flex
        flex-wrap
        justify-content-center
        pb-5
      "
    >
      <div class="text py-5">
        <h2><strong>Development teams love DigitalOcean</strong></h2>
      </div>

      <!-- INSERISCO LO SLIDER -->
      <div
        id="carouselExampleIndicators"
        class="carousel carousel-dark slide mb-3 px-5 w-75"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../assets/img/slide.jpg"
              class="d-block w-100"
              alt="img1"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/img/slide.jpg"
              class="d-block w-100"
              alt="img2"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/img/slide.jpg"
              class="d-block w-100"
              alt="img3"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- FINE SLIDER -->
    </div>
  </section>
</template>

<script>
export default {
  name: "SecondSlider",
};
</script>

<style lang="scss" scoped>
section {
  background-color: whitesmoke;
}
</style>