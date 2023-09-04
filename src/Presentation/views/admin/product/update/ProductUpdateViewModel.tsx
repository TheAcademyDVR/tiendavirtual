import React, { useContext, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Category } from '../../../../../Domain/entities/Category';
import { ProductContext } from '../../../../context/ProductContext';
import { Product } from '../../../../../Domain/entities/Product';
import { ResponseAPITiendaVirtual } from '../../../../../Data/sources/remote/models/ResponseApiTiendaVirtual';

const AdminProductUpdateViewModal = (product: Product,category: Category) => {

   
    const [values, setValues] = useState(product);
    console.log('PRODUCT QUE TRAE ES'+JSON.stringify(product));
    
    const [responseMesage, setResponseMesage] = useState('');
    const [loading, setLoading] = useState(false);
    const [file1, setFile1] = useState<ImagePicker.ImagePickerAsset>()
    const [file2, setFile2] = useState<ImagePicker.ImagePickerAsset>()
    const [file3, setFile3] = useState<ImagePicker.ImagePickerAsset>()
    const { update, updateWithImage } = useContext(ProductContext);

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const updateProduct = async () => {

        console.log('PRODUCTO ACTUALIZAR FORMULARIO' + JSON.stringify(values));
        let files = [];
        files.push(file1!);
        files.push(file2!);
        files.push(file3!);
        
        setLoading(true);

        let response = {}  as ResponseAPITiendaVirtual;

        if( values.image1.includes('https://') && values.image2.includes('https://') && values.image3.includes('https://')){
             response = await update(values);
        }else{
            response = await updateWithImage(values, files);
        }

        setLoading(false);
        setResponseMesage(response.message);
       

    }

    const pickImage = async (numberImage: number) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // aspect: [4, 4],
            aspect: [4, 4],
            quality: 1
        });

        if (!result.canceled) {
            if (numberImage == 1) {
                onChange('image1', result.assets[0].uri);
                setFile1(result.assets[0]);
            } else if (numberImage == 2) {
                onChange('image2', result.assets[0].uri);
                setFile2(result.assets[0]);
            } else if (numberImage == 3) {
                onChange('image3', result.assets[0].uri);
                setFile3(result.assets[0]);
            }
        }
    }



    const takePhoto = async (numberImage: number) => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        });
        if (!result.canceled) {
            if (numberImage == 1) {
                onChange('image1', result.assets[0].uri);
                setFile1(result.assets[0]);
            } else if (numberImage == 2) {
                onChange('image2', result.assets[0].uri);
                setFile1(result.assets[0]);
            } else if (numberImage == 3) {
                onChange('image3', result.assets[0].uri);
                setFile1(result.assets[0]);
            }
        }
    }

    return {
        ...values,
        onChange,
        takePhoto,
        pickImage,
        updateProduct,
        loading,
        responseMesage
    }
}

export default AdminProductUpdateViewModal;
