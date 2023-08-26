import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Text, ToastAndroid, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from './CategoryStyles';
import CustomTextInput from '../../../../components/CustomTextInput';
import AdminCategoryCreateViewModal from './CategoryViewModel';
import RoundedButton from '../../../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ModalPickImage from '../../../../components/ModalPickImage';
import { MyColors, MyStyles } from '../../../../theme/AppTheme';
import { RootStackParamList } from '../../../../navigator/MainStackNavigator';

export const AdminCategoryCreateScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { name, description, image, takePhoto, pickImage, createCategory, responseMesage, loading, onChange } = AdminCategoryCreateViewModal();
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
        onPress={() => { navigation.replace('AdminTabsNavigator'); }}
      >
        <Image
          style={styles.regresarIcon}
          source={require('../../../../../../assets/regresar.png')}
        />
      </TouchableOpacity>

      {/* <Text style={styles.textScreen}>NUEVA CATEGORIA</Text> */}
      <View style={styles.logoContainer}>
        <Text style={styles.formText}>NUEVA CATEGORIA</Text>
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


          {/*          

          <CustomTextInput
            placeholder="Contraseña"
            keyboardType="default"
            image={require("../../../../../assets/password.png")}
            property="password"
            onChangeText={onChange}
            value={password}
            secureTextEntry={true}
          />

          <CustomTextInput
            placeholder="Confirmar Contraseña"
            keyboardType="default"
            image={require("../../../../../assets/confirm_password.png")}
            property="confirmPassword"
            onChangeText={onChange}
            value={confirmPassword}
            secureTextEntry={true}
          /> */}

          <View style={{ marginTop: 30 }}>
            <RoundedButton
              text="CONFIRMAR"
              onPress={() => createCategory()}
            // onPress={() => ToastAndroid.show("Hola!", ToastAndroid.SHORT)}
            />
          </View>



        </ScrollView>
      </View>


      {/* <TouchableOpacity
        style={styles.regresar}
        onPress={() => {
          navigation.navigate('AdminTabsNavigator');
        }}>
        <Image
          style={styles.regresarIcon}
          source={require('../../../../../../assets/regresar.png')}
        />
      </TouchableOpacity> */}



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
