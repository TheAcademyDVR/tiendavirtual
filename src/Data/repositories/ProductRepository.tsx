import { ImagePickerAsset } from 'expo-image-picker';
import { Product } from '../../Domain/entities/Product';
import { ProductRepository } from '../../Domain/repositories/ProductRepository';
import { ResponseAPITiendaVirtual } from '../sources/remote/models/ResponseApiTiendaVirtual';
import { AxiosError } from 'axios';
import mime from 'mime';
import { ApiTiendaVirtualForImage, ApiTiendaVirtual } from '../sources/remote/api/ApiTiendaVirtual';

export class ProductRepositoryImp implements ProductRepository {

    async getProductByCategory(idCategory: string): Promise<Product[]> {
        try {
            const reponse = await ApiTiendaVirtual.get<Product[]>(`/products/findByCategory/${idCategory}`);
            return Promise.resolve(reponse.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR AL LISTAR LOS PRODUCTOS" + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

    async create(product: Product, files: ImagePickerAsset[]): Promise<ResponseAPITiendaVirtual> {
        try {
            let data = new FormData();
            files.forEach(file => {
                // @ts-ignore
                data.append('image', {
                    uri: file.uri,
                    name: file.uri.split('/').pop(),
                    type: mime.getType(file.uri)!
                });
            });

            data.append('product', JSON.stringify(product));
            const response = await ApiTiendaVirtualForImage.post<ResponseAPITiendaVirtual>(
                "/products/create",
                data
            );
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR EN LA PRODUCTO" + JSON.stringify(e.response?.data));
            const apiError: ResponseAPITiendaVirtual = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async update(product: Product): Promise<ResponseAPITiendaVirtual> {
        try {
            const response = await ApiTiendaVirtual.put<ResponseAPITiendaVirtual>('products/update', product);
            return Promise.resolve(response.data);
          } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR EN LA ACTUALIZACION DEL PRODUCTO" + JSON.stringify(e.response?.data));
            const apiError: ResponseAPITiendaVirtual = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
          }
    }

    async updateWithImage(product: Product, files: ImagePickerAsset[]): Promise<ResponseAPITiendaVirtual> {
        try {
            let data = new FormData();
            files.forEach(file => {
                // @ts-ignore
                data.append('image', {
                    uri: file.uri,
                    name: file.uri.split('/').pop(),
                    type: mime.getType(file.uri)!
                });
            });

            data.append('product', JSON.stringify(product));
            const response = await ApiTiendaVirtualForImage.put<ResponseAPITiendaVirtual>(
                "/products/updateWithImage",
                data
            );
            console.log("RESPONSE REPOSITORY PRODUCT" + JSON.stringify(response.data));
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR EN LA PRODUCTO" + JSON.stringify(e.response?.data));
            const apiError: ResponseAPITiendaVirtual = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
    async remove(product: Product): Promise<ResponseAPITiendaVirtual> {
        try {
            const reponse = await ApiTiendaVirtual.delete<ResponseAPITiendaVirtual>(`/products/delete/${product.id}`);
            return Promise.resolve(reponse.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR EN LA PRODUCTO" + JSON.stringify(e.response?.data));
            const apiError: ResponseAPITiendaVirtual = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
}