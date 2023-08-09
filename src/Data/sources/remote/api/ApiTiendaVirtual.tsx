import axios from "axios";

const ApiTiendaVirtual = axios.create({
    baseURL: "http://192.168.1.20:3000/api-tsoftware",
    headers: {
        "Content-Type": "application/json",
    },
});

export { ApiTiendaVirtual };
