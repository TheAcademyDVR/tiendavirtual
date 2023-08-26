import * as ImagePicker from 'expo-image-picker';
import React, {useState,useContext}from 'react';
import { Category } from '../../../../../Domain/entities/Category';
import { UpdateCategoryUseCase } from '../../../../../Domain/useCases/category/UpdateCategory';
import { ResponseAPITiendaVirtual } from '../../../../../Data/sources/remote/models/ResponseApiTiendaVirtual';
import { UpdateWithImageCategoryUseCase } from '../../../../../Domain/useCases/category/UpdateWithImageCategory';
import { CategoryContext } from '../../../../context/CategoryContext';

const AdminCategoryUpdateViewModal = (category: Category) => {
     
    const [values, setValues] = useState(category);
    const [responseMesage, setResponseMesage] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()
    const { update, updateWithImage } = useContext(CategoryContext)

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const updateCategory = async() => {

        setLoading(true); 
        let response = {} as ResponseAPITiendaVirtual;

        if (values.image?.includes('https://')) {
            response = await update(values);
        } else{
            response = await updateWithImage(values , file!);

        }
        setLoading(false); 
        setResponseMesage(response.message);
        // resetForm();
       
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

    // const resetForm = async () => {
    //     setValues({
    //         name: '',
    //         description: '',
    //         image: '' 
    //     });
    // }

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
        updateCategory,
        loading,
        responseMesage
    }     
}

export default AdminCategoryUpdateViewModal;
    