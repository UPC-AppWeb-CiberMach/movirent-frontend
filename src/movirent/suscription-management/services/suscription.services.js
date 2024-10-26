import {BaseService} from "@/shared/base.service.js";

export class Db {
    getAllSuscriptions() {
        return BaseService.http.get("/suscriptions");
    }
    createSuscription(subscription) {
        return BaseService.http.post("/suscriptions", subscription);
    }
}

