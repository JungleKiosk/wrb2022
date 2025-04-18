<script>
import HorizonH from "./tools/wrb22.vue";

export default {
  name: "Tools",
  components: {
    HorizonH
  }
};
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-8 p-3">
      <h1>Tools</h1>
      <h2>{{ $t('tools.subtitle') }}</h2>
      <p>{{ $t('tools.description') }}</p>

      <!-- qui mostri il tuo HorizonH -->
      <HorizonH />
      <!-- oppure, in kebab-case:
           <horizon-h /> 
      -->
    </div>
  </div>
</template>

<style scoped></style>
