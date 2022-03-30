<template>
  <section class="text-center py-5">
    <div class="text py-3">
      <h2 class="pb-2">Get started now.</h2>
      <a href="#"><button class="btn btn-light">Create your account</button></a>
    </div>
  </section>
</template>

<script>
export default {
  name: "GetStarted",
};
</script>

<style lang="scss" scoped>
section {
  background-color: navy;
  color: white;

  h2 {
    font-size: 2.5rem;
  }
  button {
    color: dodgerblue;
  }
}
</style>