<template>
  <main class="main">
    <Collaborations />
  </main>
</template>

<script>
import Collaborations from "../sections/Collaborations.vue";

export default {
  name: "Main",
  components: {
    Collaborations,
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: #f3f5f9;
}
</style>