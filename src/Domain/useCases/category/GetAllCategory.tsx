import React from 'react'
import { CategoryRepositoryImpl } from "../../../Data/repositories/CategoryRepository";

const  {getAll}=new CategoryRepositoryImpl();


export const GetAllCategoryUseCases = async () => {
  return await getAll();
}

