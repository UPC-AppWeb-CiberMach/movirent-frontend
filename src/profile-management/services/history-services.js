import {BaseService} from "@/shared/base.service.js";

export class HistoryServices{
    getReserveByClientId(clientId){
        return BaseService.http.get(`/reservations?client_id=${clientId}`);
    }
    getReserveById(reserveId){
        return BaseService.http.get(`/reservations/${reserveId}`);
    }
    getScooterById(scooterId){
        return BaseService.http.get(`/scooters/${scooterId}`);
    }
    getOwnerById(ownerId){
        return BaseService.http.get(`/users/${ownerId}`);
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