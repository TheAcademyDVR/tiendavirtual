import { ProductRepositoryImp } from "../../../Data/repositories/ProductRepository";
const { remove } = new ProductRepositoryImp();

import React from 'react'
import { Product } from "../../entities/Product";

export const DeleteProductUseCase = async(product: Product) => {
  return await remove(product);
}
