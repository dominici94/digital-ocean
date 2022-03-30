<template>
  <main class="main">
    <Collaborations />
    <Deploy />
    <FirstSlider />
    <Features />
  </main>
</template>

<script>
import Collaborations from "../sections/Collaborations.vue";
import Deploy from "../../components/sections/Deploy.vue";
import FirstSlider from "../../components/sections/FirstSlider.vue";
import Features from "../../components/sections/Features.vue";

export default {
  name: "Main",
  components: {
    Collaborations,
    Deploy,
    FirstSlider,
    Features,
  },
};
</script>

<style lang="scss" scoped>
</style>