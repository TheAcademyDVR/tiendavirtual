import { createContext, useEffect, useState } from "react";
import { ResponseAPITiendaVirtual } from "../../Data/sources/remote/models/ResponseApiTiendaVirtual";
import { Category } from '../../Domain/entities/Category';
import * as ImagePicker from 'expo-image-picker';
import { GetAllCategoryUseCases } from "../../Domain/useCases/category/GetAllCategory";
import { CreateCategoryUseCase } from "../../Domain/useCases/category/CreateCategory";
import { UpdateCategoryUseCase } from "../../Domain/useCases/category/UpdateCategory";
import { UpdateWithImageCategoryUseCase } from '../../Domain/useCases/category/UpdateWithImageCategory';
import { DeleteCategoryUseCase } from "../../Domain/useCases/category/DeleteCategory";
import { set } from "react-native-reanimated";
import { UpdateWithoutImageUseCase } from "../../Domain/useCases/user/UpdateWithOutImageUser";


export interface CategoryContextProps {
    categories: Category[],
    getCategories(): Promise<void>
    create(category: Category, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPITiendaVirtual>,
    update(category: Category): Promise<ResponseAPITiendaVirtual>
    updateWithImage(category: Category, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPITiendaVirtual>,
    remove(id: string): Promise<ResponseAPITiendaVirtual>
}

export const CategoryContext = createContext ({} as CategoryContextProps)

export const CategoryProvider = ({children}: any) =>{

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
       if(categories.length === 0 ){
        getCategories();
       }
      }, []);
    
      
    const getCategories = async (): Promise<void> =>{
        const result = await GetAllCategoryUseCases();
        console.log('CATEGORIAS: '+JSON.stringify(result));
        setCategories(result);
    }

    const create = async(category: Category, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPITiendaVirtual>  => {
        const response = await CreateCategoryUseCase(category, file!);
        getCategories()
        return response;       
    }

    const update = async(category: Category): Promise<ResponseAPITiendaVirtual> =>{
        const response = await UpdateCategoryUseCase(category);
        getCategories();
        return response;    
    }
    const updateWithImage = async(category: Category, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPITiendaVirtual> =>{
        const response = await UpdateWithImageCategoryUseCase(category, file);
        getCategories();
        return response;    
    }

    const remove = async(id: string): Promise<ResponseAPITiendaVirtual> =>{
        const response = await DeleteCategoryUseCase(id);
        getCategories();
        return response;    
    }

    return(
        <CategoryContext.Provider value={{
            categories,
            getCategories,
            create,
            update,
            updateWithImage,
            remove
        }}>
            {children}
        </CategoryContext.Provider>
    )
}

