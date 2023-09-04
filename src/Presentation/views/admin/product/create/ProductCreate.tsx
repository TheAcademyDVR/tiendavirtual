import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Text, ToastAndroid, TouchableOpacity, View, ScrollView } from 'react-native';
import CustomTextInput from '../../../../components/CustomTextInput';
import RoundedButton from '../../../../components/RoundedButton';
import { StackScreenProps } from '@react-navigation/stack';
import { MyColors } from '../../../../theme/AppTheme';
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator';
import ModalPickMultipleImage from '../../../../components/ModalPickMultipleImage';
import AdminProductCreateViewModal from './ProductCreateViewModel';
import styles from './ProductCreateStyles';

interface Props extends StackScreenProps<ProductStackParamList, 'AdminProductCreateScreen'> { };

export const AdminProductCreateScreen = ({ navigation, route }: Props) => {

  const { category } = route.params;
  const { name, description, image1, image2, image3, price, takePhoto, pickImage, createProduct, responseMesage, loading, onChange } = AdminProductCreateViewModal(category);
  const [modalVisible, setModalVisible] = useState(false);
  const [numberImage, setNumberImage] = useState(1);

  useEffect(() => {
    if (responseMesage !== '') {
      ToastAndroid.show(responseMesage, ToastAndroid.LONG);
    }
  }, [responseMesage])


  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../../../assets/background-blue.jpeg")}
      />
     
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => {
          setNumberImage(1)
          setModalVisible(true)
        }}>
          {image1 == "" ? (
            <Image
              source={require('../../../../../../assets/image_new.png')}
              style={styles.logoSize}
            />
          ) : (
            <Image
              source={{ uri: image1 }}
              style={styles.logoSize}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setNumberImage(2)
          setModalVisible(true)
        }}>
          {image2 == "" ? (
            <Image
              source={require('../../../../../../assets/image_new.png')}
              style={styles.logoSize}
            />
          ) : (
            <Image
              source={{ uri: image2 }}
              style={styles.logoSize}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setNumberImage(3)
          setModalVisible(true)
        }}>
          {image3 == "" ? (
            <Image
              source={require('../../../../../../assets/image_new.png')}
              style={styles.logoSize}
            />
          ) : (
            <Image
              source={{ uri: image3 }}
              style={styles.logoSize}
            />
          )}
        </TouchableOpacity>


      </View>
   
      <View style={styles.form}>
       


          <View style={styles.categoryInfo}>

            <Image
              source={{ uri: category?.image }}
              style={styles.iconCategory}
            />
            <Text style={styles.textCategory}>Categoria Seleccionada</Text>
            <Text> {category.name}</Text>


          </View>
          <ScrollView>
          <CustomTextInput
            placeholder="Nombres"
            keyboardType="default"
            image={require("../../../../../../assets/categories.png")}
            property="name"
            onChangeText={onChange}
            value={name}
          />
          <CustomTextInput
            placeholder="Descripción"
            keyboardType="default"
            image={require("../../../../../../assets/description.png")}
            property="description"
            onChangeText={onChange}
            value={description}
          />
          <CustomTextInput
            placeholder="Precio"
            keyboardType="number-pad"
            image={require("../../../../../../assets/price.png")}
            property="price"
            onChangeText={onChange}
            value={`${price}`}
          />




          <View style={{ marginTop: 30 }}>
            <RoundedButton
              text="CREAR PRODUCTO"
              onPress={() => {
                createProduct();
              }}
            // onPress={() => ToastAndroid.show("Hola!", ToastAndroid.SHORT)}
            />
          </View>



        </ScrollView>
      </View>

      <ModalPickMultipleImage
        openGallery={pickImage}
        openCamera={takePhoto}
        modelUseState={modalVisible}
        setModalUseState={setModalVisible}
        numberImage={numberImage}
      />

      {
        loading &&
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color={MyColors.primary}
        />

        // loading ?
        //   <ActivityIndicator
        //     style={styles.loading}
        //     size="large"
        //     color={MyColors.primary}
        //   />
        //   :
        //   <View></View>
      }

    </View>
  );
}
