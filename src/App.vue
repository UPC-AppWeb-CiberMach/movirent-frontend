<template>
  <div class="subscription-container">
    <header>
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="MoviRent Logo" class="logo">
        <h1></h1>
      </div>
      <div class="user-info">
        <span>Hola, Antonella Oré</span>
        <img src="@/assets/user.png" alt="Profile" class="profile-pic">
      </div>
    </header>

    <nav>
      <ul>
        <li>Perfil</li>
        <li>Mi suscripción</li>
        <li>Scooters</li>
      </ul>
    </nav>

    <section class="subscription-section">
      <h2>Suscripción</h2>
      <p>En MoviRent contamos con tres planes de suscripción que te brindarán beneficios únicos.</p>

      <div v-if="!planSelected" class="plans-container">
        <div class="plan-card" @click="selectPlan(monthlyPlan)">
          <h3>Plan Mensual</h3>
          <p class="stars">⭐</p>
          <p>Plan con acceso a 7 días de la semana 100% garantizado los scooters.</p>
          <p>S/. {{ monthlyPlan.price }}</p>
          <button>Suscríbete</button>
        </div>

        <div class="plan-card" @click="selectPlan(quarterlyPlan)">
          <h3>Plan Trimestral</h3>
          <p class="stars">⭐⭐</p>
          <p>Plan con acceso a 30 días cuenta con beneficio de rentar scooter deportivos.</p>
          <p>S/. {{ quarterlyPlan.price }}</p>
          <button>Suscríbete</button>
        </div>

        <div class="plan-card" @click="selectPlan(annualPlan)">
          <h3>Plan Anual</h3>
          <p class="stars">⭐⭐⭐</p>
          <p>Plan con acceso con todos los beneficios durante 1 año.</p>
          <p>S/. {{ annualPlan.price }}</p>
          <button>Suscríbete</button>
        </div>
      </div>

      <div v-if="planSelected" class="subscription-card">
        <h2>Mi Suscripción</h2>
        <p>Esta es tu suscripción actual, puedes cambiarla cuando gustes.</p>
        <h3>{{ selectedPlan.name }}</h3>
        <p>{{ selectedPlan.description }}</p>
        <p><strong>Precio:</strong> S/. {{ selectedPlan.price }}</p>

        <div class="actions">
          <button class="btn btn-green" @click="changePlan">Cambiar</button>
          <button class="btn btn-red" @click="showCancelModal = true">Cancelar</button>
        </div>

        <div v-if="showCancelModal" class="modal-overlay">
          <div class="modal-content">
            <p>¿Estás segur@ de cancelar tu membresía?</p>
            <p>No habrá reembolso del dinero</p>
            <button class="btn btn-green" @click="closeModal">Regresar</button>
            <button class="btn btn-red" @click="cancelSubscription">Cancelar</button>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="footer-content">
        <div class="info-section">
          <h4>Explora e informa</h4>
          <ul>
            <li>Danos tu opinión</li>
            <li>Preguntas frecuentes</li>
            <li>Política de privacidad</li>
          </ul>
        </div>
        <div class="social-section">
          <h4>Redes Sociales</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twiter</li>
          </ul>
          <h5></h5>
          <h5>© MoviRent 2024 Todos los derechos reservados</h5>
        </div>
        <div class="support-section">
          <h4>Soporte</h4>
          <img src="@/assets/whatsapp.png" alt="WhatsApp Soporte" class="support-icon">
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

import axios from 'axios';  // Importamos axios
export default {
  data() {
    return {
      planSelected: false,
      selectedPlan: null,
      showCancelModal: false,
      monthlyPlan: {
        id: 1,
        name: 'Plan Mensual',
        description: 'Plan con acceso a 7 días de la semana 100% garantizado los scooters.',
        price: 39,
      },
      quarterlyPlan: {
        id: 2,
        name: 'Plan Trimestral',
        description: 'Plan con acceso a 30 días cuenta con beneficio de rentar scooter deportivos.',
        price: 99,
      },
      annualPlan: {
        id: 3,
        name: 'Plan Anual',
        description: 'Plan con acceso con todos los beneficios durante 1 año.',
        price: 199,
      },
    };
  },
  methods: {
    selectPlan(plan) {
      this.planSelected = true;
      this.selectedPlan = plan;
    },
    closeModal() {
      this.showCancelModal = false;
    },
    async cancelSubscription() {
      try {
        // Hacemos la solicitud DELETE a la fake API usando el id del plan seleccionado
        await axios.delete(`http://localhost:3000/plans/${this.selectedPlan.id}`);
        alert(`Tu suscripción al ${this.selectedPlan.name} ha sido cancelada.`);

        // Ocultamos el modal y regresamos al estado inicial
        this.showCancelModal = false;
        this.planSelected = false;
      } catch (error) {
        console.error('Error al cancelar la suscripción:', error);
        alert('Hubo un error al cancelar tu suscripción. Intenta nuevamente.');
      }
    },
    changePlan() {
      alert('Funcionalidad para cambiar la suscripción');
    },
  },
};
</script>

<style>

</style>