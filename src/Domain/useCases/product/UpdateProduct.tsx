import React from 'react'
import { Product } from "../../entities/Product";
import { ProductRepositoryImp } from "../../../Data/repositories/ProductRepository";

const { update } =  new ProductRepositoryImp();

export const UpdateProductUseCase =async (product:Product) => {
  return await update(product);
}
