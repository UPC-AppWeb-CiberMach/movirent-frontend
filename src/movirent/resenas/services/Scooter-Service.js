import ApiClient from '@/movirent/resenas/services/Api-Client.js';

export default {
    fetchScooters() {
        return ApiClient.getScooters();
    },

    fetchScooterDetails(id) {
        return ApiClient.getScooterById(id);
    },

    addReview(scooterId, review) {
        // Simulamos la adición de la reseña al scooter con ID scooterId
        return ApiClient.postReview(scooterId, review);
    }
};
