import ApiClient from '@/movirent/resenas/services/Api-Client.js';

export default {
    fetchScooters() {
        return ApiClient.getScooters();
    },

    fetchScooterDetails(id) {
        return ApiClient.getScooterById(id);
    },

    addReview(scooterId, review) {

        return ApiClient.postReview(scooterId, review);
    }
};
