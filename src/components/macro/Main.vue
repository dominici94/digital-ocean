<template>
  <main class="main">
    <Collaborations />
    <Deploy />
    <FirstSlider />
  </main>
</template>

<script>
import Collaborations from "../sections/Collaborations.vue";
import Deploy from "../../components/sections/Deploy.vue";
import FirstSlider from "../../components/sections/FirstSlider.vue";

export default {
  name: "Main",
  components: {
    Collaborations,
    Deploy,
    FirstSlider,
  },
};
</script>

<style lang="scss" scoped>
</style>