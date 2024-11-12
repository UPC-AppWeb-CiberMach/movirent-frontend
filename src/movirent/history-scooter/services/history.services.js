import {BaseService} from "@/shared/base.service.js";

export class HistoryServices{

    getReserveById(reserveId){
        return BaseService.http.get(`/History/${reserveId}`);
    }
    getScooterById(scooterId){
        return BaseService.http.get(`/History/${scooterId}`);
    }
    getOwnerById(userId){
        return BaseService.http.get(`/History/${userId}`);
    }

}