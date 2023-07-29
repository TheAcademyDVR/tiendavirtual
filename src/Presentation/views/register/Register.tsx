import React from "react";
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
  } from "react-native";
  

const RegisterScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { nombre, apellido, telefono, email, clave, confirmarClave, onChange, register } =
    useViewModel();

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
        <Text style={styles.formText}>REGISTRARSE</Text>
        <CustomTextInput
          placeholder="Nombres"
          keyboardType="default"
          image={require("../../../../assets/user.png")}
          property="nombre"
          onChangeText={onChange}
          value={nombre}
        />
        <CustomTextInput
          placeholder="Apellidos"
          keyboardType="default"
          image={require("../../../../assets/my_user.png")}
          property="apellido"
          onChangeText={onChange}
          value={apellido}
        />

        <CustomTextInput
          placeholder="Celular"
          keyboardType="numeric"
          image={require("../../../../assets/phone.png")}
          property="telefono"
          onChangeText={onChange}
          value={telefono}
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
          property="clave"
          onChangeText={onChange}
          value={clave}
          secureTextEntry={true}
        />

        <CustomTextInput
          placeholder="Confirmar Contraseña"
          keyboardType="default"
          image={require("../../../../assets/confirm_password.png")}
          property="confirmarClave"
          onChangeText={onChange}
          value={confirmarClave}
          secureTextEntry={true}
        />

       

        <View style={{ marginTop: 30 }}>
          <RoundedButton
            text="CONFIRMAR"
            onPress={() => register()}
            // onPress={() => ToastAndroid.show("Hola!", ToastAndroid.SHORT)}
          />
        </View>
        <View style={styles.formRegistrar}>
          <Text>Ya tengo una cuenta </Text>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <Text style={styles.formtextRegistrar}>Iniciar Sesión </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



export default RegisterScreen;
