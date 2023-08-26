import { ResponseAPITiendaVirtual } from "../../Data/sources/remote/models/ResponseApiTiendaVirtual";
import { Category } from "../entities/Category";
import * as ImagePicker from 'expo-image-picker';

export interface CategoryRepository {

    getAll(): Promise<Category[]>;
    create(category: Category, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPITiendaVirtual>;
    update(category: Category): Promise<ResponseAPITiendaVirtual>;
    updateWithImage(category: Category, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPITiendaVirtual>;
    remove(id: string): Promise<ResponseAPITiendaVirtual>;

}