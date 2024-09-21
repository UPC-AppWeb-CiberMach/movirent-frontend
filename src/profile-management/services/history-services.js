import {BaseService} from "@/shared/base.service.js";

export class HistoryServices{
    getHistoryByClientId(clientId){
        return BaseService.http.get(`/reservations?client_id=${clientId}`);
    }
    getScooterByScooterId(scooterId){
        return BaseService.http.get(`/scooters/${scooterId}`);
    }
}