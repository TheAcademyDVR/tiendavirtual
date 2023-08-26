import React, { useContext, useState } from 'react'
import { Category } from '../../../../../Domain/entities/Category';
import { GetAllCategoryUseCases } from '../../../../../Domain/useCases/category/GetAllCategory';
import { DeleteCategoryUseCase } from '../../../../../Domain/useCases/category/DeleteCategory';
import { log } from 'react-native-reanimated';
import { CategoryContext } from '../../../../context/CategoryContext';

 const AdminCategoryListViewModel = () => {
    // const [categories, setCategories] = useState<Category[]>([]);
    const [responseMessage, setResponseMessage] = useState('');
    const { categories, remove, getCategories } = useContext(CategoryContext)

    // const getCategories = async ()=>{
    //     const result = await GetAllCategoryUseCases();
    //     console.log('CATEGORIAS: '+JSON.stringify(result));
        
    //     setCategories(result);
    // }

    const deleteCategory = async (idCategory: string) =>{
        const result = await remove(idCategory);
        setResponseMessage(result.message);
       
    }
    return {
        categories,        
        deleteCategory,
        getCategories,
        responseMessage
    }
}


export default AdminCategoryListViewModel;