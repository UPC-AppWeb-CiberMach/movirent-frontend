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
    /* Cuadros de subscription */
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


        /* Botones de acción */
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
/* fake API */
import axios from 'axios';
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

    /* Eliminar algún plan de subcription */
    async cancelSubscription() {
      try {
        // Hacemos la solicitud DELETE a la fake API usando el id del plan seleccionado
        await axios.delete(`http://localhost:3000/plans/${this.selectedPlan.id}`);
        alert(`Tu suscripción al ${this.selectedPlan.name} ha sido cancelada.`);

        // Vista de error por si no podemos eliminar algun plan
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
/* Estilos para la que verá el cliente */
html, body, #app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Arial, sans-serif;
}



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.subscription-container {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #fff;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  margin-right: 10px;
}

.user-info {
  display: flex;
  align-items: center;
}

.profile-pic {
  width: 40px;
  border-radius: 50%;
  margin-left: 10px;
}

nav ul {
  display: flex;
  justify-content: right;
  padding: 10px;
  background-color: #fff;
  list-style: none;
  margin: 0;
  gap: 30px;
}

nav ul li {
  margin: 0 15px;
  cursor: pointer;
  color: #333;
  font-weight: bold;
}

.subscription-section {
  padding: 40px;
  text-align: center;
  background-color: #f0f0ff;
  flex-grow: 1;
}

.plans-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  gap: 30px;
}

.plan-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  text-align: center;
  cursor: pointer;
}

.plan-card h3 {
  font-size: 1.5rem;
}

.stars {
  margin: 10px 0;
  font-size: 1.25rem;
  color: gold;
}

.plan-card p {
  margin: 15px 0;
  font-size: 1rem;
}

.plan-card button {
  padding: 10px 20px;
  background-color: #f76c6c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.plan-card button:hover {
  background-color: #e35555;
}

.subscription-card {
  background-color: #eae8f4;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  margin: 0 auto;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.btn-green {
  background-color: #4caf50;
  color: white;
}

.btn-red {
  background-color: #f76c6c;
  color: white;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

footer {
  background-color: #77DD77;
  color: black;
  width: 100%;
  padding: 20px;
}

footer h4 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
}

.footer-content ul {
  list-style: none;
  padding: 0;
}

.footer-content li {
  margin: 10px 0;
}

.support-icon {
  width: 40px;
}
</style>