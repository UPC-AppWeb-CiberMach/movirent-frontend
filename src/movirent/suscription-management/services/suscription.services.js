import {BaseService} from "@/shared/base.service.js";

export class Db {
    getAllSuscriptions() {
        return BaseService.http.get("/suscriptions");
    }
    getSuscriptionById(id) {
        return BaseService.http.get(`/suscriptions/${id}`);
    }
    getActiveSuscription() {
        return BaseService.http.get("/suscriptions");
    }

}

