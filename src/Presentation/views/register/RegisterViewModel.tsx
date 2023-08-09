import React, { useState } from 'react';
import { ApiTiendaVirtual } from '../../../Data/sources/remote/api/ApiTiendaVirtual';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import * as ImagePicker from 'expo-image-picker';

const RegisterViewModel = () => {

    const [errorMesage, setErrorMesage] = useState('');
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        image: '',
        password: '',
        confirmPassword: ''
    });
    // Version 13.3.1
    // const [file, setFile] = useState<ImagePicker.ImageInfo>()
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,

            aspect: [4, 4],
            quality: 1
        });

        if (!result.canceled) {
            onChange('image', result.assets[0].uri);
            setFile(result.assets[0]);
        }

        // Version 13.3.1
        // if(!result.cancelled){
        //     onChange('image', result.uri);
        //     setFile(result);
        // }
    }

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        });

        if (!result.canceled) {
            onChange('image', result.assets[0].uri);
            setFile(result.assets[0]);
        }


    }

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }

    const register = async () => {
        if (isValidForm()) {
            const response = await RegisterAuthUseCase(values as any);
            console.log('Resultados: ' + JSON.stringify(response));
        }
        // try {
        //     const response = await ApiTiendaVirtual.post('/users/create', values);
        //     console.log('Respondio correctamente'+ JSON.stringify(response));

        // } catch (error) {
        //     console.log('Error '+ error);

        // }
        // console.log(JSON.stringify(values));
    }

    const isValidForm = (): boolean => {
        if (values.name === '' && values.lastname === '' && values.email === '' && values.phone === ''
            && values.password === '' && values.confirmPassword === '') {
            setErrorMesage('Llena todos los campos vacios');
            return false;
        }
        if (values.name === '') {
            setErrorMesage('Ingresa tu name');
            return false;
        }
        if (values.lastname === '') {
            setErrorMesage('Ingresa tu lastname');
            return false;
        }
        if (values.phone === '') {
            setErrorMesage('Ingresa tu teléfono');
            return false;
        }
        if (values.email === '') {
            setErrorMesage('Ingresa tu correo electrónico');
            return false;
        }

        if (values.password === '') {
            setErrorMesage('Ingresa tu password');
            return false;
        }
        if (values.confirmPassword === '') {
            setErrorMesage('Ingresa la confirmacion de la password');
            return false;
        }
        if (values.password !== values.confirmPassword) {
            setErrorMesage('Las passwords no coinciden');
            return false;
        }


        return true;
    }

    return {
        ...values,
        onChange,
        register,
        errorMesage,
        pickImage,
        takePhoto

    }
}

export default RegisterViewModel
