import { ResponseAPITiendaVirtual } from "../../Data/sources/remote/models/ResponseApiTiendaVirtual";
import { Product } from "../entities/Product";
import * as ImagePicker from 'expo-image-picker';

export interface ProductRepository {
    
    getProductByCategory(idCategory: string): Promise<Product[]>;
    create(product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPITiendaVirtual>;
    update(product: Product): Promise<ResponseAPITiendaVirtual>;
    updateWithImage(product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPITiendaVirtual>;
    remove(product: Product): Promise<ResponseAPITiendaVirtual>;
    
}
