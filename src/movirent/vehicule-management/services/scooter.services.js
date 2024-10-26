import {BaseService} from "@/shared/base.service.js";


export class Db {
    getScooter(id, scooter) {
        return BaseService.http.get("/scooters" + "/" + id, scooter);
    }

    getAllScooters() {
        return BaseService.http.get("/scooters");
    }
    createScooter(scooter){
        return BaseService.http.post("/scooters",scooter)
    }

    editScooter(id,scooter){
        return BaseService.http.put("/scooters/" + id,scooter)
    }

    deleteScooter(id){
        return BaseService.http.delete("/scooters/" + id)
    }

    getAllReservations() {
        return BaseService.http.get("/reservations"); // Add this to fetch reservations
    }

    createReservation(reservation) {
        return BaseService.http.post("/reservations", reservation); // For saving new reservations
    }

    deleteAllReservations() {
        return BaseService.http.delete("/reservations"); // To delete all reservations
    }
}
