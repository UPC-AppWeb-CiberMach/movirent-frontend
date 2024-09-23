<template>
  <div class="scooter-card">
    <img :src="scooter.image" alt="Scooter" />
    <h3>{{ scooter.name }}</h3>
    <p>{{ scooter.district }}</p>
    <pv-button label="Ver detalle" class="p-button-success" @click="viewDetail" />
  </div>
</template>

<script>
export default {
  props: {
    scooter: Object,
  },
  methods: {
    viewDetail() {
      this.$emit('view-detail', this.scooter.id);
    },
  },
};
</script>

<style scoped>
.scooter-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 220px;
  height: auto;
}

img {
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
}

h3 {
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

p {
  color: #777;
  margin-bottom: 1rem;
}
</style>
