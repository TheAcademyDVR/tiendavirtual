import React from "react";
import { RemoveUserLocalUseCase } from "../../../../Domain/useCases/userLocal/RemoveUserLocal";
import { useUserLocal } from "../../../hooks/useUserLocal";
import { Rol } from '../../../../Domain/entities/Rol';

const ProfileInfoViewModel = () => {

    const { user } = useUserLocal();

    const removeSession = async () => {
        await RemoveUserLocalUseCase();
        console.log('Se cerro la session');
        
    };
    return {
        removeSession,
        user
    };
};

export default ProfileInfoViewModel;
