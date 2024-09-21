import {BaseService} from "@/shared/base.service.js";

export class HistoryServices{
    getHistory(){
        return BaseService.http.get("/reservations")
    }
    getHistoryById(clientId){
        return BaseService.http.get(`/reservations?client_id=${clientId}`);
    }
}