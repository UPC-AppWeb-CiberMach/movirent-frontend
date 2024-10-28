
export default {
    async fetchScooterDetails(scooterId) {
        try {
            const response = await fetch(`http://localhost:3000/scooters/${scooterId}`);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching scooter details:', error);
            throw error;
        }
    },

    async fetchScooterReviews(scooterId) {
        try {
            const response = await fetch(`http://localhost:3000/scooters/${scooterId}/reviews`);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching scooter reviews:', error);
            throw error;
        }
    },

    async addReview(scooterId, review) {
        try {
            const response = await fetch(`http://localhost:3000/scooters/${scooterId}/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(review)
            });
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error adding review:', error);
            throw error;
        }
    }
}