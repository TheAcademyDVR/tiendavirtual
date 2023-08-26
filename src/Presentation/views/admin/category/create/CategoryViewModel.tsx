import React, {useContext, useState}from 'react';
import * as ImagePicker from 'expo-image-picker';
import { CreateCategoryUseCase } from '../../../../../Domain/useCases/category/CreateCategory';
import { CategoryContext } from '../../../../context/CategoryContext';

const AdminCategoryCreateViewModal = () => {
     
    const [values, setValues] = useState({
        name: '',
        description: '',
        image: '' 
    });

    const [responseMesage, setResponseMesage] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()
    const { create } = useContext(CategoryContext);

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const createCategory = async() => {
        setLoading(true); 
        const response = await create(values as any, file!);
        setLoading(false); 
        setResponseMesage(response.message);
        resetForm();
       
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // aspect: [4, 4],
            aspect: [4, 4],
            quality: 1
        });

        if (!result.canceled) {
            onChange('image', result.assets[0].uri);
            setFile(result.assets[0]);
        }
    }

    const resetForm = async () => {
        setValues({
            name: '',
            description: '',
            image: '' 
        });
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

    return {
        ...values,
        onChange,
        takePhoto,
        pickImage,
        createCategory,
        loading,
        responseMesage
    }     
}

export default AdminCategoryCreateViewModal;
    