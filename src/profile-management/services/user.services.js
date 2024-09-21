import {BaseService} from "@/shared/base.service.js";

export class Db {
    signIn(email,password) {
        return BaseService.http.get("/users" + "/" + "?email=" + email + "&password=" + password);
    }
    signUp(user){
        return BaseService.http.post("/users",user)
    }

    editUser(user){
        return BaseService.http.put("/users",user)
    }

    deleteUser(){
        return BaseService.http.delete("/users")
    }
}
