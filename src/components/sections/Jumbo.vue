<template>
  <section class="jumbo">
    <div class="container-lg">
      <div class="row py-5">
        <div class="text-side col-lg-6 col-12">
          <h2>The simplest cloud platform for developers &amp; teams</h2>
          <p>
            Deploy, manage, and scale cloud applications faster and more
            efficiently on DigitalOcean. We make managing infrastructure easy
            for teams and businesses, whether you're running one virtual machine
            or ten thousand.
          </p>
        </div>

        <div class="info-side offset-lg-1 col-lg-5 offset-1 col-10">
          <h2>Deploy your app in seconds</h2>
          <h2 class="blue">Get started now.</h2>
          <div class="input-group my-3">
            <input type="email" class="form-control" placeholder="Email" />
          </div>
          <div class="input-group my-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <a href="#"
            ><button class="btn btn-primary w-100 my-2">
              Create your account
            </button></a
          >
          <a href="#"
            ><img
              src="../../assets/img/google-icon.png"
              alt="logo google"
              class="img-lg"
            /><img
              src="../../assets/img/google-icon.png"
              alt="logo google"
              class="img-xs"
            /><button class="btn btn-light w-100">
              Sign up with google
            </button></a
          >
          <h5>
            By signing up you agree to the <a href="#">Terms of Service</a>
          </h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Jumbo",
};
</script>

<style lang="scss" scoped>
.jumbo {
  background-image: url("../../assets/img/bg-banner-home.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  .row {
    align-items: center;

    .text-side {
      color: white;

      h2 {
        font-size: 2.75rem;
        font-weight: bold;
      }
      p {
        font-size: 1.4375rem;
      }
    }

    .info-side {
      background-color: whitesmoke;
      border-radius: 0.3125rem;
      padding: 1.25rem 0.9375rem;
      text-align: center;
      position: relative;

      h2 {
        font-weight: bold;
        font-size: 1.875rem;
      }

      .blue {
        color: #0049ff;
      }

      img {
        position: absolute;
        bottom: 65px;
        left: 25px;
        width: 20px;
      }

      .img-xs {
        display: none;
        position: absolute;
        bottom: 85px;
        left: 25px;
      }

      .img-lg {
        display: block;
      }

      h5 {
        font-size: 1rem;
        margin-top: 0.625rem;
      }
    }
  }
}

// X-Small 	None 	<576px
// Small 	sm 	≥576px
// Medium 	md 	≥768px
// Large 	lg 	≥992px
// Extra large 	xl 	≥1200px
// Extra extra large 	xxl 	≥1400px

@media only screen and (min-width: 440px) {
  .img-lg {
    display: none;
  }

  .img-xs {
    display: block;
  }
}
</style>