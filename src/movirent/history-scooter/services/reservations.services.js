
import { BaseService } from "@/shared/base.service.js";

export class ReservationService {
    static getAllReservations() {
        return BaseService.http.get("/History");
    }
}
