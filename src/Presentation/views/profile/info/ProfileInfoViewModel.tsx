import React from "react";
import { RemoveUserUseCase } from "../../../../Domain/useCases/userLocal/RemoveUserLocal";

const ProfileInfoViewModel = () => {

    const removeSession = async () => {
        await RemoveUserUseCase();
        console.log('Se cerro la session');
        
    };
    return {
        removeSession,
    };
};

export default ProfileInfoViewModel;
