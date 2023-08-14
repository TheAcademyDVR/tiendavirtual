import { ResponseAPITiendaVirtual } from "../../Data/sources/remote/models/ResponseApiTiendaVirtual";
import { User } from "../entities/User";
import * as ImagePicker from "expo-image-picker";

export interface AuthRepository {
    login(email: string, password: string): Promise<ResponseAPITiendaVirtual>
    register(user: User): Promise<ResponseAPITiendaVirtual>
    registerWithImage(user: User, file:  ImagePicker.ImagePickerAsset): Promise<ResponseAPITiendaVirtual>
}

