import React, {useContext} from "react";

import { UserContext } from "../../../context/UserContext";

const ProfileInfoViewModel = () => {

    // const { user } = useUserLocal();
    const { user, removeUserSession } = useContext(UserContext);

    // const removeSession = async () => {
    //     await RemoveUserLocalUseCase();
    //     console.log('Se cerro la session');
        
    // };
    return {
        // removeSession,
        removeUserSession,
        user
    };
};

export default ProfileInfoViewModel;
