<template>
  <div>
    <PaymentComponent />
    <SubscriptionComponent />
  </div>
</template>

<script>
import PaymentComponent from './PaymentComponent.vue';
import SubscriptionComponent from './SubscriptionComponent.vue';

export default {
  components: {
    PaymentComponent,
    SubscriptionComponent
  }
};
</script>

<style scoped>
</style>