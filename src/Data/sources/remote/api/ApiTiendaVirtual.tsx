import axios from "axios";
import { LocalStorage } from "../../local/LocalStorage";
import { User } from "../../../../Domain/entities/User";

const ApiTiendaVirtual = axios.create({
    baseURL: "http://192.168.1.20:3000/api-tsoftware",
    headers: {
        'Content-type': 'application/json'
    }
});

const ApiTiendaVirtualForImage = axios.create({
    baseURL: "http://192.168.1.20:3000/api-tsoftware",
    headers: {
        'Content-type': 'multipart/form-data',
        'accept': 'application/json',
    }
});


// INTERCEPTORS

ApiTiendaVirtual.interceptors.request.use(
    async(config) => {
        const data = await LocalStorage().getItem('user');
        if (data) {
            const user: User = JSON.parse(data as any);
            config.headers!['Authorization'] = user?.session_token!
        }
        return config;
    }
);


ApiTiendaVirtualForImage.interceptors.request.use(
    async(config) => {
        const data = await LocalStorage().getItem('user');
        if (data) {
            const user: User = JSON.parse(data as any);
            config.headers!['Authorization'] = user?.session_token!
        }
        return config;
    }
);


export { ApiTiendaVirtual, ApiTiendaVirtualForImage };
