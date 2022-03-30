<template>
  <section>
    <div class="container-lg py-5">
      <h2 class="text-center mb-3">
        Service your customers around the world from 12 regions.
      </h2>
      <div class="row">
        <ul class="col-12 col-lg-6">
          <li class="d-flex p-3">
            <div class="left">ams2</div>
            <div class="center">Amsterdam, Netherlands</div>
            <div class="right"><a href="#">Test speed ></a></div>
          </li>
          <li class="d-flex p-3">
            <div class="left">ams3</div>
            <div class="center">Amsterdam, Netherlands</div>
            <div class="right"><a href="#">Test speed ></a></div>
          </li>
          <li class="d-flex p-3">
            <div class="left">blr1</div>
            <div class="center">Bangalore, India</div>
            <div class="right"><a href="#">Test speed ></a></div>
          </li>
          <li class="d-flex p-3">
            <div class="left">fra1</div>
            <div class="center">Frankfurt, German</div>
            <div class="right"><a href="#">Test speed ></a></div>
          </li>
          <li class="d-flex p-3">
            <div class="left">lon1</div>
            <div class="center">London, UK</div>
            <div class="right"><a href="#">Test speed ></a></div>
          </li>
          <li class="d-flex p-3">
            <div class="left">nyc1</div>
            <div class="center">New York, USA</div>
            <div class="right"><a href="#">Test speed ></a></div>
          </li>
        </ul>
        <ul class="col-12 col-lg-6">
          <li class="d-flex p-3">
            <div class="left">ams2</div>
            <div class="center">Amsterdam, Netherlands</div>
            <div class="right"><a href="#">Test speed ></a></div>
          </li>
          <li class="d-flex p-3">
            <div class="left">ams3</div>
            <div class="center">Amsterdam, Netherlands</div>
            <div class="right"><a href="#">Test speed ></a></div>
          </li>
          <li class="d-flex p-3">
            <div class="left">blr1</div>
            <div class="center">Bangalore, India</div>
            <div class="right"><a href="#">Test speed ></a></div>
          </li>
          <li class="d-flex p-3">
            <div class="left">fra1</div>
            <div class="center">Frankfurt, German</div>
            <div class="right"><a href="#">Test speed ></a></div>
          </li>
          <li class="d-flex p-3">
            <div class="left">lon1</div>
            <div class="center">London, UK</div>
            <div class="right"><a href="#">Test speed ></a></div>
          </li>
          <li class="d-flex p-3">
            <div class="left">nyc1</div>
            <div class="center">New York, USA</div>
            <div class="right"><a href="#">Test speed ></a></div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Regions",
};
</script>

<style lang="scss" scoped>
section {
  background-color: darkblue;
  color: white;

  h2 {
    font-size: 2.1875rem;
  }

  li:not(:last-child) {
    border-bottom: 1px solid white;
  }
  .left,
  .right {
    width: 15%;
  }

  .center {
    width: 70%;
  }

  .left {
    text-transform: uppercase;
  }

  .right a {
    text-decoration: none;
    color: aqua;
  }
}
</style>