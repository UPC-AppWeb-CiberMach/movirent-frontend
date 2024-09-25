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


</style>