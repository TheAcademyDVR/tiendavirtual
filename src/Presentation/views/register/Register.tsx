import React, { useEffect, useState } from "react";
import RoundedButton from "../../components/RoundedButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import RegisterViewModel from "./RegisterViewModel";
import CustomTextInput from "../../components/CustomTextInput";
import styles from "./RegisterStyles";
import { StyleSheet, Text, View, Image, TextInput, ToastAndroid, TouchableOpacity, ScrollView, } from "react-native";
import ModalPickImage from "../../components/ModalPickImage";

const RegisterScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { name, lastname, phone, email, image, password, confirmPassword, errorMesage, onChange, register, pickImage, takePhoto } = RegisterViewModel();
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
        source={require("../../../../assets/gamer-1.jpeg")}
      />
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {image == "" ? (
            <Image
              source={require("../../../../assets/user_image.png")}
              style={styles.logoSize}
            />
          ) : (
            <Image
              source={{ uri: image }}
              style={styles.logoSize}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.logoText}>Selecciona una Imagen</Text>
      </View>
      {/* <View style={styles.iconMore}>
                <Image
                    source={require('../../../assets/plus.png')}
                    style={styles.iconSize}
                />
            </View> */}

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>REGISTRARSE</Text>
          <CustomTextInput
            placeholder="Nombres"
            keyboardType="default"
            image={require("../../../../assets/user.png")}
            property="name"
            onChangeText={onChange}
            value={name}
          />
          <CustomTextInput
            placeholder="Apellidos"
            keyboardType="default"
            image={require("../../../../assets/my_user.png")}
            property="lastname"
            onChangeText={onChange}
            value={lastname}
          />

          <CustomTextInput
            placeholder="Celular"
            keyboardType="numeric"
            image={require("../../../../assets/phone.png")}
            property="phone"
            onChangeText={onChange}
            value={phone}
          />

          <CustomTextInput
            placeholder="Correo Electrónico"
            keyboardType="email-address"
            image={require("../../../../assets/email.png")}
            property="email"
            onChangeText={onChange}
            value={email}
          />

          <CustomTextInput
            placeholder="Contraseña"
            keyboardType="default"
            image={require("../../../../assets/password.png")}
            property="password"
            onChangeText={onChange}
            value={password}
            secureTextEntry={true}
          />

          <CustomTextInput
            placeholder="Confirmar Contraseña"
            keyboardType="default"
            image={require("../../../../assets/confirm_password.png")}
            property="confirmPassword"
            onChangeText={onChange}
            value={confirmPassword}
            secureTextEntry={true}
          />

          <View style={{ marginTop: 30 }}>
            <RoundedButton
              text="CONFIRMAR"
              onPress={() => {
                register();
              }}
            // onPress={() => ToastAndroid.show("Hola!", ToastAndroid.SHORT)}
            />
          </View>

          <ModalPickImage
            openGallery={pickImage}
            openCamera={takePhoto}
            modelUseState={modalVisible}
            setModalUseState={setModalVisible}
          />
          <View style={styles.formRegistrar}>
            <Text>Ya tengo una cuenta </Text>
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <Text style={styles.formtextRegistrar}>Iniciar Sesión </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default RegisterScreen;
