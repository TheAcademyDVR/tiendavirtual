import React from 'react'
import { useUserLocal } from '../../hooks/useUserLocal'
import { RemoveUserLocalUseCase } from '../../../Domain/useCases/userLocal/RemoveUserLocal';


const RoleViewModel = () => {
  const  {user} = useUserLocal();
  const removeSession = async () => {
    await RemoveUserLocalUseCase();
    console.log('Se cerro la session');
    
};

  return {
    user,
    removeSession,
  }
}

export default RoleViewModel;
