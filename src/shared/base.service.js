import axios from 'axios';
export class BaseService{
    static BASE_URL = 'https://api-fake-cibermach.vercel.app/';
    static http= axios.create({
        baseURL: BaseService.BASE_URL
    });
}