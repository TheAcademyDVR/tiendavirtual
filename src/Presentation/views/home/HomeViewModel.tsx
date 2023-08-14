import React, {useEffect, useState}from 'react';
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../hooks/useUserLocal';


const HomeViewModel = () => {
    
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        email: '',
        password: ''
        
    });

    const { user, getUserSession} = useUserLocal();
    console.log('USUARIO DE SESION DEL HOOKS'+JSON.stringify(user));
    
    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const login = async () =>{
        if(isValidForm()){
            const response = await LoginAuthUseCase(values.email, values.password);
            console.log('RESPONSE:'+JSON.stringify(response));
            if(!response.success){
                setErrorMessage(response.message);
            }else{
                // setErrorMessage(response.message);
                await SaveUserLocalUseCase(response.data);
                getUserSession();
            }
        }
    }

    const isValidForm = (): boolean =>{
        if(values.email === ''){
            setErrorMessage('Ingresa el email');
            return false;
        }
        if(values.password === ''){
            setErrorMessage('Ingresa la clave');
            return false;
        }

        return true;
    }

    return {
        ...values,
        onChange,
        login,
        errorMessage,
        user
    }        
}

export default HomeViewModel
