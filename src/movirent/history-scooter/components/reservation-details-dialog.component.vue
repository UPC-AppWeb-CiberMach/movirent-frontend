<template>
  <pv-card class="reservation-card" aria-label="Reservation Details">
    <template #header>
      <img :src="scooter.image" :alt="scooter.model" class="scooter-image" aria-label="Scooter Image" />
    </template>
    <template #title>
      <span aria-label="Reservation Title">{{ scooter.name }}</span>
    </template>
    <template #subtitle>
      <span aria-label="Scooter Brand and Model">{{ scooter.brand }} - {{ scooter.model }}</span>
    </template>
    <template #content>
      <div class="details-content">
        <p aria-label="Start Date: {{ reservation.startDate }}"><strong>Start Date:</strong> {{ reservation.startDate }}</p>
        <p aria-label="End Date: {{ reservation.endDate }}"><strong>End Date:</strong> {{ reservation.endDate }}</p>
        <p aria-label="Time: {{ reservation.time }} hours"><strong>Time:</strong> {{ reservation.time }} hrs</p>
        <p aria-label="Price: {{ reservation.price }}"><strong>Price:</strong> {{ reservation.price }}</p>
        <p aria-label="District: {{ scooter.district }}"><strong>District:</strong> {{ scooter.district }}</p>
        <p aria-label="Phone: {{ scooter.phone }}"><strong>Phone:</strong> {{ scooter.phone }}</p>
      </div>
    </template>
    <template #footer>
      <div class="footer-buttons">
        <pv-button :label="'Close'" @click="$emit('close')" class="close-button" aria-label="Close" />
      </div>
    </template>
  </pv-card>
</template>

<script setup>
defineProps({
  reservation: {
    type: Object,
    required: true
  },
  scooter: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.reservation-card {
  margin: auto;
  width: 100%;
  max-width: 600px;
  box-shadow: none;
}

.scooter-image {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}

.details-content {
  padding: 16px;
  text-align: left;
}

.footer-buttons {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

.close-button {
  width: 100px;
}
</style>