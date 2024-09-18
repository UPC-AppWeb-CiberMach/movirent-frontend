<template>
  <div id="app">
    <h1>Preguntas Frecuentes(FAQ)</h1>
    <FrequentlyQuestionsComponent />
    <PrivacyPolicy />
  </div>
</template>

<script>
import FrequentlyQuestionsComponent from './the-informations/components/frequently-questions.component.vue';
import PrivacyPolicy from './the-informations/components/privacy-policy.component.vue';

export default {
  name: 'App',
  components: {
    FrequentlyQuestionsComponent,
    PrivacyPolicy
  }
};
</script>

<style>

</style>