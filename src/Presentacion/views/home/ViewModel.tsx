import React, {useState}from 'react'

const HomeViewModel = () => {
    
    const [values, setValues] = useState({
        correo: '',
        clave: ''
    });

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    return {
        ...values,
        onChange
    }        
}

export default HomeViewModel
