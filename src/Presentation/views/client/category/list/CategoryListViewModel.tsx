import React, {useState} from 'react'
import { GetAllCategoryUseCases } from '../../../../../Domain/useCases/category/GetAllCategory';
import { Category } from '../../../../../Domain/entities/Category';

 const ClientCategoryListViewModel = () => {

    const [categories, setCatgories] = useState<Category[]>([]);
    const getCatgories =  async () => {
        const result =  await GetAllCategoryUseCases();
        setCatgories (result);
    }

    return {
        categories,
        getCatgories
    }
}

export default ClientCategoryListViewModel;
