import { ImagePickerAsset } from "expo-image-picker";
import { User } from "../../Domain/entities/User";
import { UserRepository } from "../../Domain/repositories/UserRepository";
import { ResponseAPITiendaVirtual } from "../sources/remote/models/ResponseApiTiendaVirtual";
import { ApiTiendaVirtual, ApiTiendaVirtualForImage } from "../sources/remote/api/ApiTiendaVirtual";
import { AxiosError } from "axios";
import mime from "mime";

export class UserRepositoryImpl implements UserRepository{
    async updateWithoutImage(user: User): Promise<ResponseAPITiendaVirtual> {
        try {
            const response = await ApiTiendaVirtual.put<ResponseAPITiendaVirtual>('/users/updateWithoutImage', user);
            // console.log("RESPONSE REPOSITORY AUTH" + JSON.stringify(response.data));
            return Promise.resolve(response.data);
          } catch (error) {
            let e = error as AxiosError;
            console.log("ERRPR SIN IMAGEN" + JSON.stringify(e.response?.data));
            const apiError: ResponseAPITiendaVirtual = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
          }
    }

    async update(user: User, file: ImagePickerAsset): Promise<ResponseAPITiendaVirtual> {
        try {
            let data = new FormData();
            // @ts-ignore
            data.append('image',{
              uri: file.uri,
              name: file.uri.split('/').pop(),
              type: mime.getType(file.uri)!
            });
            data.append('user', JSON.stringify(user));
      
            const response = await ApiTiendaVirtualForImage.put<ResponseAPITiendaVirtual>(
              "/users/update",
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