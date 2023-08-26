import React, { useEffect, useState } from "react";
import { Text, View, Image, ToastAndroid, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { MyColors } from "../../../theme/AppTheme";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import RoundedButton from "../../../components/RoundedButton";
import CustomTextInput from "../../../components/CustomTextInput";
import styles from "./ProfileUpdateStyles";
import ModalPickImage from "../../../components/ModalPickImage";
import ProfileUpdateViewModel from "./ProfileUpdateViewModel";


interface Props extends StackScreenProps<RootStackParamList, 'ProfileUpdateScreen'> { };

const ProfileUpdateScreen = ({ navigation, route }: Props) => {

  const { user } = route.params;
  const { name, lastname, phone, image, loading, errorMesage, successMesage, onChange, onChangeInfoUpdate, update, pickImage, takePhoto } = ProfileUpdateViewModel(user);
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    if (errorMesage != "") {
      ToastAndroid.show(errorMesage, ToastAndroid.LONG);
    }
  }, [errorMesage]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../../assets/gamer-4.jpeg")}
      />
      <TouchableOpacity
        style={styles.regresar}
        onPress={() => { navigation.replace('ClientTabsNavigator'); }}
      >
        <Image
          style={styles.regresarIcon}
          source={require('../../../../../assets/regresar.png')}
        />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {image == "" ? (
            <Image
              source={{ uri: user?.image }}
              style={styles.logoSize}
            />
          ) : (
            <Image
              source={{ uri: image }}
              style={styles.logoSize}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.logoText}>Selecciona una imagen</Text>

      </View>
      {/* <View style={styles.iconMore}>
                <Image
                    source={require('../../../../assets/plus.png')}
                    style={styles.iconSize}
                />
            </View> */}

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>ACTUALIZAR INFORMACIÓN</Text>
          <CustomTextInput
            placeholder="Nombres"
            keyboardType="default"
            image={require("../../../../../assets/user.png")}
            property="name"
            onChangeText={onChange}
            value={name}
          />
          <CustomTextInput
            placeholder="Apellidos"
            keyboardType="default"
            image={require("../../../../../assets/my_user.png")}
            property="lastname"
            onChangeText={onChange}
            value={lastname}
          />

          <CustomTextInput
            placeholder="Celular"
            keyboardType="numeric"
            image={require("../../../../../assets/phone.png")}
            property="phone"
            onChangeText={onChange}
            value={phone}
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
              onPress={() => {
                update();
              }}
            // onPress={() => ToastAndroid.show("Hola!", ToastAndroid.SHORT)}
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
};

export default ProfileUpdateScreen;
