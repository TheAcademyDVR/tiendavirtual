import { createContext, useEffect, useState } from "react";
import { ResponseAPITiendaVirtual } from "../../Data/sources/remote/models/ResponseApiTiendaVirtual";
import { Product } from '../../Domain/entities/Product';
import * as ImagePicker from 'expo-image-picker';
import { CreateProductUseCase } from "../../Domain/useCases/product/CreateProduct";
import { GetProductByCategoryUseCase } from "../../Domain/useCases/product/GetProductByCategory";
import { DeleteProductUseCase } from "../../Domain/useCases/product/DeleteProduct";
import { UpdateWithImageProductUseCase } from "../../Domain/useCases/product/UpdateWithImageProduct";
import { UpdateProductUseCase } from "../../Domain/useCases/product/UpdateProduct";

export interface ProductContextProps {
    products: Product[],
    getProducts(idCategory: string): Promise<void>,
    create(product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPITiendaVirtual>,
    updateWithImage(product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPITiendaVirtual>,
    update(product: Product): Promise<ResponseAPITiendaVirtual>,
    remove(product: Product): Promise<ResponseAPITiendaVirtual>
}

export const ProductContext = createContext({} as ProductContextProps)

export const ProductProvider = ({ children }: any) => {

    const [products, setProducts] = useState<Product[]>([]);

    const  getProducts = async (idCategory:string):  Promise<void> =>{
        const result = await GetProductByCategoryUseCase(idCategory);
        setProducts(result)
        // result result;
    }

    const create = async (product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPITiendaVirtual> => {
        const response = await CreateProductUseCase(product, files!);
        getProducts(product.id_category!);
        return response;
    }
    const updateWithImage = async (product: Product, files: ImagePicker.ImagePickerAsset[]) => {
        const response = await UpdateWithImageProductUseCase(product, files!);
        getProducts(product.id_category!);
        return response;
    }

    const update = async (product: Product): Promise<ResponseAPITiendaVirtual> => {
        const response = await UpdateProductUseCase(product);
        getProducts(product.id_category!);
        return response;
    }
    const remove = async (product: Product): Promise<ResponseAPITiendaVirtual> => {
        const response = await DeleteProductUseCase(product);
        getProducts(product.id_category!);
        return response;
    }


    return (
        <ProductContext.Provider value={{
            products,
            getProducts,
            create,
            updateWithImage,
            update,
            remove
        }}>
            {children}
        </ProductContext.Provider>
    )
}

