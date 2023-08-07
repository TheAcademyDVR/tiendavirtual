import React, { useEffect } from "react";
import RoundedButton from "../../components/RoundedButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import useViewModel from "./RegisterViewModel";
import CustomTextInput from "../../components/CustomTextInput";
import styles from "./RegisterStyles";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const RegisterScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {
    name,
    lastname,
    phone,
    email,
    password,
    confirmPassword,
    errorMesage,
    onChange,
    register
    
  } = useViewModel();


  useEffect(() => {
    if(errorMesage != ''){
      ToastAndroid.show(errorMesage, ToastAndroid.LONG);

    }
  }, [errorMesage])
  
  

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../assets/gamer-1.jpeg")}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/user_image.png")}
          style={styles.logoSize}
        />
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
