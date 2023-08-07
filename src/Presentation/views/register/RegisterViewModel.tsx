import React, { useState } from 'react';
import { ApiTiendaVirtual } from '../../../Data/sources/remote/api/ApiTiendaVirtual';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';


const RegisterViewModel = () => {
    
    const [errorMesage, setErrorMesage] = useState('');
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onChange = (property: string, value: any) =>{
        setValues({...values, [property]:value})
    }

    const register = async () =>{
        if(isValidForm()){
            const  response  = await RegisterAuthUseCase(values as any);
            console.log('Resultados: '+ JSON.stringify(response));
        }
        // try {
        //     const response = await ApiTiendaVirtual.post('/users/create', values);
        //     console.log('Respondio correctamente'+ JSON.stringify(response));
            
        // } catch (error) {
        //     console.log('Error '+ error);

        // }
        // console.log(JSON.stringify(values));
    }

    const isValidForm  = ():boolean =>{
        if(values.name === '' && values.lastname === '' && values.email === '' && values.phone === ''
        && values.password === '' && values.confirmPassword === '' ){
            setErrorMesage('Llena todos los campos vacios');
            return false;
        }
        if(values.name === ''){
            setErrorMesage('Ingresa tu name');
            return false;
        }
        if(values.lastname === ''){
            setErrorMesage('Ingresa tu lastname');
            return false;
        }
        if(values.phone === ''){
            setErrorMesage('Ingresa tu teléfono');
            return false;
        }
        if(values.email === ''){
            setErrorMesage('Ingresa tu correo electrónico');
            return false;
        }
       
        if(values.password === ''){
            setErrorMesage('Ingresa tu password');
            return false;
        }
        if(values.confirmPassword === ''){
            setErrorMesage('Ingresa la confirmacion de la password');
            return false;
        }
        if(values.password !== values.confirmPassword){
            setErrorMesage('Las passwords no coinciden');
            return false;
        }
      

        return true;
    }
  
    return {
        ...values,
        onChange,
        register,
        errorMesage

    }
}

export default RegisterViewModel
