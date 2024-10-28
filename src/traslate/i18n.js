import { createI18n } from 'vue-i18n';

const messages = {
    es: {
        movirent: {
            name: 'Nombre del equipo',
            address: 'Dirección',
            marca: 'Marca de Scooter',
            phone: 'Teléfono',
            model: 'Modelo de Scooter',
            imgUrl: 'URL de la imagen',
            price: 'Costo de alquiler',
            tituloResultado: 'Sus Scooter registrados',
            titleGeneral: 'Registro de Scooter',
            nuevoScooter: 'Registrar nuevo Scooter',
            titleCard: 'Mis Scooter',
            redesSociales: 'Nuestras redes sociales',
            soporte: 'Soporte',
            names: 'Quienes Somos',
            question: 'Preguntas Frecuentes',
            policy: 'Políticas de Privacidad',
            description: '© 2024 -Todos los derechos reservados - MoviRent',
            titleQuienesSomos: '¿Quiénes somos?',
            welcome: '¡Bienvenido a MoviRent!'
        },
        buttons: {
            profile: 'Perfil',
            subscription: 'Mi Suscripción',
            reviews: 'Reseñas',
            reservations: 'Reservas',
            scooter: 'Scooter',
            history: 'Historial',
            logout: 'Cerrar Sesión'
        },
        titles: {
            title: '¿Tus datos son incorrectos o deseas actualizarlos? ¡Edítalos!'
        }
    },
    en: {
        movirent: {
            name: 'Team Name',
            address: 'Address',
            marca: 'Scooter Brand',
            phone: 'Phone',
            model: 'Scooter Model',
            imgUrl: 'Image URL',
            price: 'Rental Cost',
            tituloResultado: 'Your Registered Scooters',
            titleGeneral: 'Scooter Registration',
            nuevoScooter: 'Register New Scooter',
            titleCard: 'My Scooters',
            redesSociales: 'Our Social Networks',
            soporte: 'Support'
        },
        buttons: {
            profile: 'Profile',
            subscription: 'My Subscription',
            reviews: 'Reviews',
            reservations: 'Reservations',
            scooter: 'Scooter',
            history: 'History',
            logout: 'Logout'
        },
        titles: {
            title: 'Is your information incorrect or do you want to update it? Edit them!'
        }
    }
};

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages
});

export default i18n;