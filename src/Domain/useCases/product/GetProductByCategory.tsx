import React from 'react'
import { ProductRepositoryImp } from '../../../Data/repositories/ProductRepository'

const { getProductByCategory } = new ProductRepositoryImp();
export const GetProductByCategoryUseCase = async (idCategory: string) => {
  return await getProductByCategory(idCategory);
}
