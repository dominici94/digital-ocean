<template>
  <section>
    <div class="container-lg">
      <div class="row">
        <div class="text text-center col-12 py-5">
          <h3>Deploy and scale seamlessly</h3>
          <p>
            Our optimized configuration process saves your team time when
            running and scaling distributed applications, AI &amp; machine
            learning worklaoads, hosted services, client websites, or CI/CD
            environments.
          </p>
        </div>
        <ul class="col-12 offset-md-1 col-md-2 list-group list-group-flush">
          <li class="list-item">Deploy</li>
          <li class="list-item">Manage</li>
          <li class="list-item">Secure</li>
          <li class="list-item">Scale</li>
          <li class="list-item">Monitor</li>
        </ul>
        <div class="row col-12 offset-md-1 col-md-4 my-3">
          <div class="img-container">
            <img src="../../assets/img/cluster-deploy.svg" alt="icona 1" />
          </div>
          <div class="text-par">
            <h4>Cluster deployments</h4>
            <p>
              Provision multiple Droplets (virtual machines) in seconds with our
              control panel, CLI, or directly against our API.
            </p>
          </div>
        </div>
        <div class="row col-12 col-md-4 my-3">
          <div class="img-container">
            <img src="../../assets/img/optimized-compute.svg" alt="icona 2" />
          </div>
          <div class="text-par">
            <h4>Optimized compute types</h4>
            <p>
              Get the compute resources you need with Standard or Optimized
              Droplets.
            </p>
          </div>
        </div>
        <div class="row col-12 offset-md-4 col-md-4 my-3">
          <div class="img-container my-3">
            <img src="../../assets/img/one-click.svg" alt="icona 3" />
          </div>
          <div class="text-par">
            <h4>One-click apps</h4>
            <p>
              Skip the install and configuration process with pre-built open
              source images supporting Rails, Cassandra, Docker, and more.
            </p>
          </div>
        </div>
        <div class="row col-12 col-md-4 my-3">
          <div class="img-container">
            <img src="../../assets/img/global.svg" alt="icona 4" />
          </div>
          <div class="text-par">
            <h4>Global availability</h4>
            <p>Deploy to any od our data center regions arount the world.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Deploy",
};
</script>

<style lang="scss" scoped>
.text {
  h3 {
    font-size: 2.1875rem;
  }
  p {
    color: gray;
    font-size: 0.75rem;
    font-weight: bold;
  }
}

ul {
  padding-left: 0.625rem;
  list-style: none;

  .list-item {
    border-left: 2px solid lightgray;
    padding: 0.3125rem;
    color: grey;
  }
}
.text-par {
  p {
    color: grey;
  }
}
</style>