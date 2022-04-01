<template>
  <footer class="footer">
    <div class="container-lg">
      <div id="question" class="questionsAnswers">
        <div class="notifiche">2</div>
        <img src="../../assets/img/shark.png" alt="squalo" />
      </div>
      <div class="text-qa visible">
        Can I help answer any questions you have about DigitalOcean?
      </div>
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

  // .container-lg {
  //   position: relative;
  // }

  .questionsAnswers {
    // height: 200px;
    position: fixed;
    bottom: 1.25rem;
    right: 1.25rem;
    width: 60px;
    height: 60px;
    padding: 0.625rem 0;
    border-radius: 0.3125rem;
    background-color: #041fb6;
    cursor: pointer;
    -webkit-box-shadow: 2px 2px 15px -1px rgba(0, 0, 0, 0.4);
    box-shadow: 2px 2px 15px -1px rgba(0, 0, 0, 0.4);

    .notifiche {
      position: absolute;
      top: -12px;
      right: -12px;
      padding: 0 7px;
      background-color: red;
      color: white;
      font-weight: bold;
      border: 4px solid white;
      border-radius: 50%;
      cursor: pointer;
    }

    img {
      width: 100%;
    }
  }
  .text-qa {
    height: 60px;
    width: 375px;
    font-size: 18px;
    color: black;
    line-height: 25px;
    background-color: white;
    border-radius: 5px;
    padding: 5px 20px;
    position: fixed;
    bottom: 1.25rem;
    right: 6.25rem;
    -webkit-box-shadow: 2px 2px 15px -1px rgba(0, 0, 0, 0.4);
    box-shadow: 2px 2px 15px -1px rgba(0, 0, 0, 0.4);

    &::after {
      content: "\f0da";
      font-weight: 900;
      font-family: "Font Awesome 5 Free";
      font-size: 28px;
      color: white;
      position: absolute;
      bottom: 5px;
      right: -8px;
    }
  }

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

  .visible {
    display: block;
  }

  .invisible {
    display: none;
  }
}
</style>