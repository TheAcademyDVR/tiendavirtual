import { ResponseAPITiendaVirtual } from "../../Data/sources/remote/models/ResponseApiTiendaVirtual";
import { User } from "../entities/User";

export interface AuthRepository {
    register(user: User): Promise<ResponseAPITiendaVirtual>
    login(email: string, password: string): Promise<ResponseAPITiendaVirtual>
}

