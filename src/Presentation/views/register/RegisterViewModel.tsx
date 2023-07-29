import React, { useState } from 'react';
import { ApiTiendaVirtual } from '../../../Data/sources/remote/api/ApiTiendaVirtual';


const RegisterViewModel = () => {
    
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
        try {
            const response = await ApiTiendaVirtual.post('/users/create', values);
            console.log('Respondio correctamente'+ JSON.stringify(response));
            
        } catch (error) {
            console.log('Error '+ error);

        }
        // console.log(JSON.stringify(values));
    }
  
    return {
        ...values,
        onChange,
        register

    }
}

export default RegisterViewModel
