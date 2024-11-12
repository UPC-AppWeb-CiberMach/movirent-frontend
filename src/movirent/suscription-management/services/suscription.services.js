import {BaseService} from "@/shared/base.service.js";

export class Db {
    getAllSuscriptions() {
        return BaseService.http.get("/subscription");
    }
    getSuscriptionById(id) {
        return BaseService.http.get(`/subscription/${id}`);
    }
    getActiveSuscription() {
        return BaseService.http.get("/subscription");
    }

}

