import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiTiendaVirtual, ApiTiendaVirtualForImage } from "../sources/remote/api/ApiTiendaVirtual";
import { ResponseAPITiendaVirtual } from "../sources/remote/models/ResponseApiTiendaVirtual";
import { ImagePickerAsset } from "expo-image-picker";
import mime from "mime";

export class AuthRepositoryImpl implements AuthRepository {
    
  
  async login(email: string, password: string): Promise<ResponseAPITiendaVirtual> {
    try {
      const response = await ApiTiendaVirtual.post<ResponseAPITiendaVirtual>("/users/login",
        {
          email: email,
          password: password,
        }
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      // console.log('RESPONSE REPOSITORY AUTH' + JSON.stringify(e.response?.data));
      const apiError: ResponseAPITiendaVirtual = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
    }
  }
  async register(user: User): Promise<ResponseAPITiendaVirtual> {
    try {
      const response = await ApiTiendaVirtual.post<ResponseAPITiendaVirtual>(
        "/users/create",
        user
      );
      console.log("RESPONSE REPOSITORY AUTH" + JSON.stringify(response.data));
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      const apiError: ResponseAPITiendaVirtual = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
    }
  }
  async registerWithImage(user: User, file: ImagePickerAsset): Promise<ResponseAPITiendaVirtual> {
    try {
      let data = new FormData();
      // @ts-ignore
      data.append('image',{
        uri: file.uri,
        name: file.uri.split('/').pop(),
        type: mime.getType(file.uri)!
      });
      data.append('user', JSON.stringify(user));

      const response = await ApiTiendaVirtualForImage.post<ResponseAPITiendaVirtual>(
        "/users/createWithImage",
        data
      );


      console.log("RESPONSE REPOSITORY AUTH WITH IMAGE" + JSON.stringify(response.data));
      return Promise.resolve(response.data);

    } catch (error) {
      let e = error as AxiosError;
      const apiError: ResponseAPITiendaVirtual = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
    }
  }
}
