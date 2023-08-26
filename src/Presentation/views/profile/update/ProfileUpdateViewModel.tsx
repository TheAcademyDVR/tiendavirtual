import React, { useState, useContext } from 'react';
import { RegisterWithImageAuthUseCase } from '../../../../Domain/useCases/auth/RegisterWithImageAuth';
import { SaveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../../hooks/useUserLocal';
import * as ImagePicker from 'expo-image-picker';
import { UpdateWithoutImageUseCase } from '../../../../Domain/useCases/user/UpdateWithOutImageUser';
import { UpdateUserUserCase } from '../../../../Domain/useCases/user/UpdateUser';
import { User } from '../../../../Domain/entities/User';
import { ResponseAPITiendaVirtual } from '../../../../Data/sources/remote/models/ResponseApiTiendaVirtual';
import { UserContext } from '../../../context/UserContext';

const ProfileUpdateViewModel = (user: User) => {

    const [errorMesage, setErrorMesage] = useState('');
    const [successMesage, setSuccessMesage] = useState('');
    const [values, setValues] = useState(user);
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()
    const { getUserSession} = useUserLocal();
    const { saveUserSession } = useContext(UserContext);


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
    const onChangeInfoUpdate = (name: string, lastname: string, phone: string) => {
        setValues({ ...values, name: name, lastname: lastname, phone: phone })
    }

    const update = async () => {
        if (isValidForm()) {
            setLoading(true);
            let response = {} as ResponseAPITiendaVirtual;
            if (values.image?.includes('https://')) {
                response = await UpdateWithoutImageUseCase(values);
            } else {
                response = await UpdateUserUserCase(values, file!);
            }
            setLoading(false);
            console.log('RESULTADO ACTUALIZADO ES> '+ JSON.stringify(response));
            
            if (response.success) {
                saveUserSession(response.data);
                setSuccessMesage(response.message)
                // await SaveUserLocalUseCase(response.data);
                // getUserSession();
            } else {
                setErrorMesage(response.message);
            }
        }
    }

    const isValidForm = (): boolean => {
        if (values.name === '' && values.lastname === '' && values.email === '' && values.phone === '') {
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
        return true;
    }

    return {
        ...values,
        onChange,
        update,
        pickImage,
        onChangeInfoUpdate,
        takePhoto,
        errorMesage,
        successMesage,
        loading,
        user
    }
}

export default ProfileUpdateViewModel
