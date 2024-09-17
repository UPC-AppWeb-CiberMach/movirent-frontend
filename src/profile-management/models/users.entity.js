export class UsersEntity {
    constructor(first_name, last_name, dni, age, phone, address, picture){
        this.first_name = first_name;
        this.last_name = last_name;
        this.dni = dni;
        this.age = age;
        this.phone = phone;
        this.address = address;
        this.picture = picture;
    }

    getFirstName(){
        return this.first_name;
    }

    getLastName(){
        return this.last_name;
    }

    getDni(){
        return this.dni;
    }

    getAge(){
        return this.age;
    }

    getPhone(){
        return this.phone;
    }

    getAddress(){
        return this.address;
    }

    getPicture(){
        return this.picture;
    }
}