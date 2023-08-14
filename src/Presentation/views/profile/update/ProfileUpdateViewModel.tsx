import React, { useState } from 'react';
import { ApiTiendaVirtual } from '../../../../Data/sources/remote/api/ApiTiendaVirtual';
import { RegisterAuthUseCase } from '../../../../Domain/useCases/auth/RegisterAuth';
import { RegisterWithImageAuthUseCase } from '../../../../Domain/useCases/auth/RegisterWithImageAuth';
import { SaveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../../hooks/useUserLocal';
import * as ImagePicker from 'expo-image-picker';

const ProfileUpdateViewModel = () => {

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
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()

    const { user, getUserSession } = useUserLocal();

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
    const onChangeInfoUpdate = ( name: string,lastname: string, phone: string) => {
        setValues({ ...values, name: name, lastname:lastname, phone:phone })
    }

    //REGISTRO SIN IMAGEN
    // const register = async () => {
    //     if (isValidForm()) {
    //         const response = await RegisterAuthUseCase(values as any);
    //         console.log('Resultados: ' + JSON.stringify(response));
    //     }
    // }


    //REGISTRO CON IMAGEN
    const registerWithImage = async () => {
        if (isValidForm()) {
            setLoading(true);
            const response = await RegisterWithImageAuthUseCase(values, file!);
            console.log('Resultados: ' + JSON.stringify(response));
            setLoading(false);

            if (response.success) {
                await SaveUserLocalUseCase(response.data);
                getUserSession();
            } else {
                setErrorMesage(response.message);
            }
        }
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
        if (values.image === '') {
            setErrorMesage('Seleccione una imagen');
            return false;
        }


        return true;
    }

    return {
        ...values,
        onChange,
        registerWithImage,
        pickImage,
        onChangeInfoUpdate,
        takePhoto,
        errorMesage,
        loading,
        user

    }
}

export default ProfileUpdateViewModel
