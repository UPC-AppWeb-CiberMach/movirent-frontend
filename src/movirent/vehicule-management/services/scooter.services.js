import {BaseService} from "@/shared/base.service.js";


export class Db {

    getAllScooters() {
        return BaseService.http.get("/scooter");
    }
    createScooter(scooter){
        return BaseService.http.post("/scooter",scooter)
    }

    editScooter(id,scooter){
        return BaseService.http.put("/scooter/" + id,scooter)
    }

    deleteScooter(id){
        return BaseService.http.delete("/scooter/" + id)
    }

    createReservation(reservation) {
        return BaseService.http.post("/History", reservation);
    }

}
