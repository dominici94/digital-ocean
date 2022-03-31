<template>
  <footer class="footer">
    <div class="container-lg">
      <div class="row py-5">
        <div class="col-12 col-lg-4 head">
          <div class="img-container">
            <img src="../../assets/img/logo-small.svg" alt="" />
          </div>
          <h5 class="pt-2">
            <i class="fa-regular fa-copyright"></i> 2018 DigitalOcean, LLC. All
            rights reserved.
          </h5>
          <h6>Proudly made in NY</h6>
          <ul>
            <li><i class="fa-brands fa-twitter img"></i></li>
            <li><i class="fa-brands fa-facebook img"></i></li>
            <li><i class="fa-brands fa-instagram img"></i></li>
            <li><i class="fa-brands fa-youtube img"></i></li>
            <li><i class="fa-brands fa-linkedin img"></i></li>
          </ul>
        </div>

        <div class="col-12 col-md-6 col-lg-2">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Leadership</li>
            <li>Link</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Partner Network</li>
            <li>Referral Program</li>
            <li>Events</li>
            <li>Press</li>
            <li>Legal &amp; Security</li>
          </ul>
        </div>

        <div class="col-12 col-md-6 col-lg-2">
          <h4>Products</h4>
          <ul>
            <li>Droplets</li>
            <li>Spaces</li>
            <li>Kubernetes</li>
            <li>Load Balancers</li>
            <li>Block Storage</li>
            <li>Tools &amp; integrations</li>
            <li>One-Click Apps</li>
            <li>API</li>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Release Notes</li>
          </ul>
        </div>

        <div class="col-12 col-md-6 col-lg-2">
          <h4>Community</h4>
          <ul>
            <li>Tutorials</li>
            <li>Meetups</li>
            <li>Q&amp;A</li>
            <li>Write for Donations</li>
            <li>Droplets for Demos</li>
            <li>Hatch</li>
            <li>Shop Swag</li>
            <li>Research Program</li>
            <li>Currents Research</li>
            <li>Open Source</li>
          </ul>
        </div>

        <div class="col-12 col-md-6 col-lg-2">
          <h4>Support</h4>
          <ul>
            <li>Contact Support</li>
            <li>FAQ</li>
            <li>Network Status</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: rgb(2, 2, 44);
  color: gray;

  .head {
    li {
      display: inline-block;
      margin-right: 0.3125rem;

      .img {
        width: 1rem;
        margin-right: 0.625rem;
      }
    }
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  h4 {
    color: white;
  }
}
</style>