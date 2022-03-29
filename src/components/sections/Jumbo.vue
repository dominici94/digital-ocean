<template>
  <section class="jumbo">
    <div class="container-lg">
      <div class="text-side">
        <h2>The simplest cloud platform for developers &amp; teams</h2>
        <p>
          Deploy, manage, and scale cloud applications faster and more
          efficiently on DigitalOcean. We make managing infrastructure easy for
          teams and businesses, whether you're running one virtual machine or
          ten thousand.
        </p>
      </div>

      <div class="info-side">
        <h2>Deploy your app in seconds</h2>
        <h2 class="blue">Get started now.</h2>
        <div class="input-group my-3">
          <input type="email" class="form-control" placeholder="Email" />
        </div>
        <div class="input-group my-3">
          <input type="password" class="form-control" placeholder="Password" />
        </div>
        <a href="#"
          ><button class="btn btn-primary w-100 my-2">
            Create your account
          </button></a
        >
        <a href="#" class="google"
          ><img
            src="../../assets/img/google-icon.png"
            alt="logo google"
          /><button class="btn btn-light w-100">Sign up with google</button></a
        >
        <h5>By signing up you agree to the <a href="#">Terms of Service</a></h5>
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
  height: 31.25rem;
  display: flex;
  align-items: center;

  .container-lg {
    display: flex;
    align-items: center;

    .text-side {
      width: 50%;
      color: white;

      h2 {
        font-size: 3.75rem;
        font-weight: bold;
      }
      p {
        font-size: 1.4375rem;
      }
    }

    .info-side {
      width: calc(50% - 6.25rem);
      margin-left: 6.25rem;
      background-color: whitesmoke;
      border-radius: 0.3125rem;
      padding: 1.25rem 0.9375rem;
      text-align: center;

      h2 {
        font-weight: bold;
        font-size: 1.875rem;
      }

      .blue {
        color: #0049ff;
      }

      img {
        width: 20px;
      }

      .google {
        position: relative;

        img {
          position: absolute;
          top: 50px;
          right: 490px;
          z-index: 999;
        }
      }

      h5 {
        font-size: 1rem;
        margin-top: 0.625rem;
      }
    }
  }
}
</style>