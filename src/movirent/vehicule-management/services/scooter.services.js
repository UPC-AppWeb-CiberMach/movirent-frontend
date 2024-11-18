import {BaseService} from "@/shared/base.service.js";


export class Db {

    getAllScooters() {
        return BaseService.http.get("/Scooter");
    }
    createScooter(scooter){
        return BaseService.http.post("/Scooter",scooter)
    }

    editScooter(id,scooter){
        return BaseService.http.put("/Scooter/" + id,scooter)
    }

    deleteScooter(id){
        return BaseService.http.delete("/Scooter/" + id)
    }

    createReservation(reservation) {
        return BaseService.http.post("/History", reservation);
    }

}
