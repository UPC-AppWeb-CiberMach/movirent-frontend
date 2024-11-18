import axios from 'axios';
export class BaseService{
    static BASE_URL = 'http://localhost:5170/api/v1';
    static http= axios.create({
        baseURL: BaseService.BASE_URL
    });
}