import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiTiendaVirtual } from "../sources/remote/api/ApiTiendaVirtual";
import { ResponseAPITiendaVirtual } from "../sources/remote/models/ResponseApiTiendaVirtual";

export class AuthRepositoryImpl implements AuthRepository {
    async register(user: User): Promise<ResponseAPITiendaVirtual>{
        try {
            const response = await ApiTiendaVirtual.post<ResponseAPITiendaVirtual>('/users/create', user);
            console.log('RESPONSE REPOSITORY AUTH' + JSON.stringify(response.data));
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            const apiError:ResponseAPITiendaVirtual = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);
        }
    }
}