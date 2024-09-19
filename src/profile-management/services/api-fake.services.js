import {BaseService} from "@/shared/base.service.js";

export class Db {
    sigIn(email,password) {
        return BaseService.http.get("/users" + "/" + "?email=" + email + "&password=" + password);
    }
    signUp(user){
        return BaseService.http.post("/users",user)
    }
}
