import React, { useState } from 'react'
import { GetProductByCategoryUseCase } from '../../../../../Domain/useCases/product/GetProductByCategory'
import { Product } from '../../../../../Domain/entities/Product'

const ClientProductListViewModel = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const getProducts = async (idCategory: string) =>{
        const result =  await GetProductByCategoryUseCase(idCategory);
        setProducts(result)
    }
    return {
        products,
        getProducts
    }
}

export default ClientProductListViewModel
