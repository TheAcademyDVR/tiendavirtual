import React, { useState } from 'react';
import { ApiTiendaVirtual } from '../../../Data/sources/remote/api/ApiTiendaVirtual';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';


const RegisterViewModel = () => {
    
    const [errorMesage, setErrorMesage] = useState('');
    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        clave: '',
        confirmarClave: ''
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
        if(values.nombre === '' && values.apellido === '' && values.email === '' && values.telefono === ''
        && values.clave === '' && values.confirmarClave === '' ){
            setErrorMesage('Llena todos los campos vacios');
            return false;
        }
        if(values.nombre === ''){
            setErrorMesage('Ingresa tu nombre');
            return false;
        }
        if(values.apellido === ''){
            setErrorMesage('Ingresa tu apellido');
            return false;
        }
        if(values.telefono === ''){
            setErrorMesage('Ingresa tu teléfono');
            return false;
        }
        if(values.email === ''){
            setErrorMesage('Ingresa tu correo electrónico');
            return false;
        }
       
        if(values.clave === ''){
            setErrorMesage('Ingresa tu clave');
            return false;
        }
        if(values.confirmarClave === ''){
            setErrorMesage('Ingresa la confirmacion de la clave');
            return false;
        }
        if(values.clave !== values.confirmarClave){
            setErrorMesage('Las claves no coinciden');
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
