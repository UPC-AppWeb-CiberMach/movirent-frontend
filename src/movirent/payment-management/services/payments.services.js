import {BaseService} from "@/shared/base.service.js";

export class PaymentService {
    static createPayment(payment){
        return BaseService.http.post("/payments",payment)
    }
}