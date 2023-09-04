import React from 'react'
import { Product } from '../../entities/Product'
import * as ImagePicker from 'expo-image-picker';
import { ProductRepositoryImp } from '../../../Data/repositories/ProductRepository';

const {create} = new ProductRepositoryImp();

export const CreateProductUseCase = async (product: Product, files: ImagePicker.ImagePickerAsset[]) => {
  return await create(product, files);
}
