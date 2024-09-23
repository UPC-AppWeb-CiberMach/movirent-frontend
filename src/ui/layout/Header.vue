<template>
  <header class="header">
    <div class="logo">MoviRent</div>
    <nav>
      <a href="#">Perfil</a>
      <a href="#">Mi suscripción</a>
      <a href="#">Scooters</a>
    </nav>
    <div class="user-info">
      <span>Hola, Antonella Oré</span>
      <img src="https://via.placeholder.com/40" alt="Avatar" class="avatar" />
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: #5cb85c;
}

nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  text-decoration: none;
  color: #2f2f2f;
  font-weight: bold;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  border-radius: 50%;
}
</style>
