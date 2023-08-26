import { AxiosError } from "axios";
import { Category } from "../../Domain/entities/Category";
import { CategoryRepository } from "../../Domain/repositories/CategoryRepository";
import { ApiTiendaVirtual, ApiTiendaVirtualForImage } from "../sources/remote/api/ApiTiendaVirtual";
import { ResponseAPITiendaVirtual } from "../sources/remote/models/ResponseApiTiendaVirtual";
import * as ImagePicker from 'expo-image-picker';
import mime from "mime";

export class CategoryRepositoryImpl implements CategoryRepository {

  async getAll(): Promise<Category[]> {
    try {
      const response = await ApiTiendaVirtual.get<Category[]>('categories/getAll');
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR EN LA CONSULTA DE LA CATEGORY" + JSON.stringify(e.response?.data));
      // const apiError: ResponseAPITiendaVirtual = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }

  async create(category: Category, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPITiendaVirtual> {
    try {
      let data = new FormData();
      // @ts-ignore
      data.append('image', {
        uri: file.uri,
        name: file.uri.split('/').pop(),
        type: mime.getType(file.uri)!
      });
      data.append('category', JSON.stringify(category));
      const response = await ApiTiendaVirtualForImage.post<ResponseAPITiendaVirtual>(
        "/categories/create",
        data
      );
      console.log("RESPONSE REPOSITORY CATEGORY" + JSON.stringify(response.data));
      return Promise.resolve(response.data);

    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR EN LA CATEGORY" + JSON.stringify(e.response?.data));
      const apiError: ResponseAPITiendaVirtual = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
    }
  }

  async update(category: Category): Promise<ResponseAPITiendaVirtual> {
    try {
      const response = await ApiTiendaVirtual.put<ResponseAPITiendaVirtual>('categories/update', category);
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR EN LA ACTUALIZACION DE LA CATEGORIA" + JSON.stringify(e.response?.data));
      const apiError: ResponseAPITiendaVirtual = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
    }
  }

  async updateWithImage(category: Category, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPITiendaVirtual> {
    try {
      let data = new FormData();
      // @ts-ignore
      data.append('image', {
        uri: file.uri,
        name: file.uri.split('/').pop(),
        type: mime.getType(file.uri)!
      });
      data.append('category', JSON.stringify(category));
      const response = await ApiTiendaVirtualForImage.put<ResponseAPITiendaVirtual>(
        "/categories/updateWithImage",
        data
      );
      console.log("ACTUALIZACION DE LA CATEGORIA CON IMAGEN" + JSON.stringify(response.data));
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR EN LA ACTUALIZACION DE LA CATEGORIA IMAGEN" + JSON.stringify(e.response?.data));
      const apiError: ResponseAPITiendaVirtual = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
    }
  }

  async remove(id: string): Promise<ResponseAPITiendaVirtual> {
    try {
      const response = await ApiTiendaVirtual.delete<ResponseAPITiendaVirtual>(`categories/delete/${id}`);
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR EN LA CATEGORY" + JSON.stringify(e.response?.data));
      const apiError: ResponseAPITiendaVirtual = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
    }
  }
}