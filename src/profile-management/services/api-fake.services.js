import axios from 'axios';
export class Db {
    getAll() {
        return axios.get('https://api-fake-movirent.vercel.app/movirent/api');
    }
}
