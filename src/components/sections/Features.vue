<template>
  <section>
    <div class="container-lg my-5">
      <h2 class="text-center">
        <strong>The features your business needs</strong>
      </h2>

      <div class="row">
        <div class="col-12 col-md-4 py-3">
          <div class="img-container">
            <img src="../../assets/img/pred-pricing.svg" alt="img-def" />
          </div>
          <div class="d-flex flex-column">
            <h4>Predictable pricing</h4>
            <p>
              Leave complex pricing structure behind. Always know what you'll
              pay per month with a flat, industry-leading pricing structure.
            </p>
            <a href="#">Pricing ></a>
          </div>
        </div>

        <div class="col-12 col-md-4 py-3">
          <div class="img-container">
            <img src="../../assets/img/world-class.svg" alt="img-def" />
          </div>
          <div class="d-flex flex-column">
            <h4>World-class service</h4>
            <p>
              Free round-the-clock technical support for all customers. You'll
              feel the love.
            </p>
            <a href="#">Support ></a>
          </div>
        </div>
        <div class="col-12 col-md-4 py-3">
          <div class="img-container">
            <img src="../../assets/img/reliable-platform.svg" alt="img-def" />
          </div>
          <div class="d-flex flex-column">
            <h4>Reliable platform</h4>
            <p>
              More the 100.000 developer teams worldwide trust DigitalOcean to
              support their business with a 99.99% uptime SLA for all services.
            </p>
            <a href="#">Security ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Features",
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 2.1875rem;
}

h4 {
  font-weight: bold;
}
p {
  color: grey;
}

a {
  text-decoration: none;
}
</style>