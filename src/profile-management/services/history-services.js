import {BaseService} from "@/shared/base.service.js";

export class HistoryServices{
    getHistoryByClientId(clientId){
        return BaseService.http.get(`/reservations?client_id=${clientId}`);
    }
    getScooterByScooterId(scooterId){
        return BaseService.http.get(`/scooters/${scooterId}`);
    }
    async deleteReservationById(reservationId){
        try{
            const response = await BaseService.http.delete(`/reservations/${reservationId}`);
            return response.data;
        }catch(error){
            console.error("Error deleting reservation:", error);
            throw error;
        }
    }
}