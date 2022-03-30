<template>
  <main class="main">
    <Collaborations />
    <Deploy />
    <FirstSlider />
    <Features />
    <Regions />
    <SecondSlider />
    <GetStarted />
  </main>
</template>

<script>
import Collaborations from "../sections/Collaborations.vue";
import Deploy from "../../components/sections/Deploy.vue";
import FirstSlider from "../../components/sections/FirstSlider.vue";
import Features from "../../components/sections/Features.vue";
import Regions from "../../components/sections/Regions.vue";
import SecondSlider from "../../components/sections/SecondSlider.vue";
import GetStarted from "../../components/sections/GetStarted.vue";

export default {
  name: "Main",
  components: {
    Collaborations,
    Deploy,
    FirstSlider,
    Features,
    Regions,
    SecondSlider,
    GetStarted,
  },
};
</script>

<style lang="scss" scoped>
</style>