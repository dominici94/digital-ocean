<template>
  <section class="p-5 text-center">
    <div class="container-lg">
      <h3 class="text-uppercase">innovative businesses trust digitalocean</h3>
      <div class="row mt-5">
        <div class="col-6 col-sm-2">
          <a href="#"><img src="../../assets/img/docker.svg" alt="balena" /></a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="#"><img src="../../assets/img/gitlab.svg" alt="gitlab" /></a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="#"><img src="../../assets/img/slack.svg" alt="slack" /></a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="#"
            ><img src="../../assets/img/hashicorp.svg" alt="hashicorp"
          /></a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="#"
            ><img src="../../assets/img/hashicorp.svg" alt="hashicorp"
          /></a>
        </div>
        <div class="col-6 col-sm-2">
          <a href="#"><img src="../../assets/img/splunk.svg" alt="splunk" /></a>
        </div>
      </div>

      <a id="redirect" href="#">
        View customer stories<i class="fa-solid fa-chevron-right arrow"></i
      ></a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Collaborations",
};
</script>

<style lang="scss" scoped>
section {
  background-color: #f3f5f9;
  h3 {
    color: grey;
  }
  .row {
    a {
      width: 100%;

      img {
        width: 80%;
      }
    }
  }
  #redirect {
    text-decoration: none;

    .arrow {
      font-size: 1rem;
      margin-left: 5px;
    }
  }
}
</style>

