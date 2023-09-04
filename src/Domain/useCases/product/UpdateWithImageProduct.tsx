import React from 'react'
import { Product } from "../../entities/Product";
import { ProductRepositoryImp } from "../../../Data/repositories/ProductRepository";
import * as ImagePicker from 'expo-image-picker';

const { updateWithImage } =  new ProductRepositoryImp();

export const UpdateWithImageProductUseCase =async (product:Product, files: ImagePicker.ImagePickerAsset[]) => {
  return await updateWithImage(product, files);
}
