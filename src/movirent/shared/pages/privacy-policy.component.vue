<template>
  <div class="privacy-policy">
    <h2>Política de Privacidad</h2> <br>
    <p>En MoviRent, nos comprometemos a proteger tu privacidad y a garantizar la seguridad de tus datos personales. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos tu información cuando usas nuestra plataforma.</p>

    <section>
      <h3>1. Información que recopilamos</h3>
      <p>Recopilamos información personal que proporcionas al registrarte como tu nombre, dirección de correo electrónico y detalles de pago. También podemos recopilar información técnica sobre el dispositivo que utilizas para acceder a nuestra plataforma.</p>
    </section>

    <section>
      <h3>2. Uso de tu información</h3>
      <p>Utilizamos tu información personal para poder ofrecerte nuestros servicios, procesar pagos y mejorar la experiencia de usuario. No compartimos tu información personal con terceros sin tu consentimiento, salvo en los casos que la ley lo requiera.</p>
    </section>

    <section>
      <h3>3. Seguridad de tus datos</h3>
      <p>Mantenemos medidas de seguridad técnicas y organizativas para proteger tu información contra el acceso no autorizado, pérdida o alteración. Nos esforzamos por garantizar que tus datos estén protegidos en todo momento.</p>
    </section>

    <section>
      <h3>4. Derechos del usuario</h3>
      <p>Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento. Si deseas ejercer alguno de estos derechos, ponte en contacto con nosotros a través de nuestros canales de soporte.</p>
    </section>

    <section>
      <h3>5. Cambios a esta política</h3>
      <p>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Notificaremos cualquier cambio importante a través de nuestra plataforma o por correo electrónico.</p>
    </section>

    <section>
      <h3>6. Contacto</h3>
      <p>Si tienes alguna pregunta o inquietud sobre nuestra política de privacidad, no dudes en contactarnos en: <strong>soporte@movirent.com</strong></p>
    </section>
  </div>
</template>

<script>
export default {
  name: "PrivacyPolicy"
}
</script>

<style scoped>
.privacy-policy {
  font-family: 'Open Sans', sans-serif;
  background-color: #ffffff;
  color: #000000;
  padding: 20px;
  line-height: 1.6;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: #513c86;
}
h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1b;
}

p {
  margin-bottom: 15px;
}

strong {
  font-weight: 600;
}

section {
  margin-bottom: 20px;
}
</style>