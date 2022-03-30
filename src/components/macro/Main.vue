<template>
  <main class="main">
    <Collaborations />
    <Deploy />
  </main>
</template>

<script>
import Collaborations from "../sections/Collaborations.vue";
import Deploy from "../../components/sections/Deploy.vue";

export default {
  name: "Main",
  components: {
    Collaborations,
    Deploy,
  },
};
</script>

<style lang="scss" scoped>
</style>