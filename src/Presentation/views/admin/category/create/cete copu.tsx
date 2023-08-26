import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import styles from './CategoryStyles';
import CustomTextInput from '../../../../components/CustomTextInput';
import AdminCategoryCreateViewModal from './CategoryViewModel';
import RoundedButton from '../../../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../../App';
import ModalPickImage from '../../../../components/ModalPickImage';
import { MyColors, MyStyles } from '../../../../theme/AppTheme';

export const AdminCategoryCreateScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { name, description, image, takePhoto, pickImage, createCategory, responseMesage, loading, onChange } = AdminCategoryCreateViewModal();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    ToastAndroid.show(responseMesage, ToastAndroid.LONG)
  }, [responseMesage])
  

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('../../../../../../assets/background-blue.jpeg')}
      />

<Text style={styles.textScreen}>NUEVA CATEGORIA</Text>

      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => setModalVisible(true)
        } >
        {image == "" ? (
          <View>
            <Image
              style={styles.image}
              source={require('../../../../../../assets/image_add.png')}
            />
            <Text style={styles.textImage}>Selecciona una imagen</Text>

          </View>
        ) : (
          <View>
            
            <Image
              source={{ uri: image }}
              style={styles.imageSelect}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.regresar}
        onPress={() => {
          navigation.navigate('AdminTabsNavigator');
        }}>
        <Image
          style={styles.regresarIcon}
          source={require('../../../../../../assets/regresar.png')}
        />
      </TouchableOpacity>

      <View style={styles.form}>
        <CustomTextInput
          placeholder='Nombre '
          image={require('../../../../../../assets/categories.png')}
          keyboardType='default'
          property='name'
          value={name}
          onChangeText={onChange}
        />

        <CustomTextInput
          placeholder='Descripción'
          image={require('../../../../../../assets/description.png')}
          keyboardType='default'
          property='description'
          value={description}
          onChangeText={onChange}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RoundedButton
          text='GUARDAR CATEGORIA'
          onPress={() => createCategory()}
        />
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
