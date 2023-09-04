import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Text, ToastAndroid, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from './CategoryUpdateStyles';
import CustomTextInput from '../../../../components/CustomTextInput';
import RoundedButton from '../../../../components/RoundedButton';
import { StackScreenProps } from '@react-navigation/stack';
import ModalPickImage from '../../../../components/ModalPickImage';
import { MyColors, MyStyles } from '../../../../theme/AppTheme';
import { CategoryStackParamList } from '../../../../navigator/AdminCategoryNavigator';
import AdminProductUpdateViewModal from './CategoryUpdateViewModel';
import AdminCategoryUpdateViewModal from './CategoryUpdateViewModel';

interface Props extends StackScreenProps<CategoryStackParamList, 'AdminCategoryUpdateScreen'>{};

export const AdminCategoryUpdateScreen = ({navigation, route}: Props) => {
  const { category } = route.params;
  const { name, description, image, takePhoto, pickImage, updateCategory, responseMesage, loading, onChange } = AdminCategoryUpdateViewModal(category);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (responseMesage !== '') {
      ToastAndroid.show(responseMesage, ToastAndroid.LONG);
    }
  }, [responseMesage])


  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('../../../../../../assets/background-blue.jpeg')}
      />
      <TouchableOpacity
        style={styles.regresar}
        onPress={() => { navigation.replace('AdminCategoryListScreen'); }}
      >
        <Image
          style={styles.regresarIcon}
          source={require('../../../../../../assets/regresar.png')}
        />
      </TouchableOpacity>

      {/* <Text style={styles.textScreen}>NUEVA CATEGORIA</Text> */}
      <View style={styles.logoContainer}>
        <Text style={styles.formText}>EDITAR CATEGORIA</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {image == "" ? (
            <View>
              <Image
              
                style={styles.image}
                source={require('../../../../../../assets/image_add.png')}
              />
              <Text style={styles.logoText}>Selecciona una imagen</Text>

            </View>
          ) : (
            <View>

              <Image
                source={{ uri: image }}
                style={styles.imageSelect}
              />
              <Text style={styles.logoText}>Cambiar de imagen</Text>

            </View>
          )}
        </TouchableOpacity>
        {/* <Text style={styles.logoText}>Selecciona una imagen</Text> */}

      </View>

      <View style={styles.form}>
        <ScrollView>

          <CustomTextInput
            placeholder="Nombre de la categoria"
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


          <View style={{ marginTop: 30 }}>
            <RoundedButton
              text="ACTUALIZAR"
              onPress={() => updateCategory()}
            />
          </View>



        </ScrollView>
      </View>

      <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        modelUseState={modalVisible}
        setModalUseState={setModalVisible}
      />

      {
        loading &&
        <ActivityIndicator
          style={MyStyles.loading}
          size="large"
          color={MyColors.primary}
        />


      }

    </View>
  )
}
