import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';
import ProfileInfoViewModel from "./ProfileInfoViewModel";
import RoundedButton from "../../../components/RoundedButton";
import styles from "../info/ProfileInfoStyle";
import { RootStackParamList } from "../../../navigator/MainStackNavigator";

export const ProfileInfoScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { removeUserSession, user } = ProfileInfoViewModel();

  useEffect(() => {
    if (user.id == '') {
      navigation.replace('HomeScreen');

    }

  }, [user])


  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('../../../../../assets/gamer-1.jpeg')}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../../assets/cyber-link-white.png')}
          style={styles.logoSize}
        />
        <Text style={styles.logoText}>MI PERFIL</Text>
      </View>

      {/* <Pressable
          style={styles.cerrarSesion}
          onPress={() => {
            removeSession();
            navigation.replace('HomeScreen');
          }}>
          <Image
            style={styles.cerrarSesionImage}
            source={require('../../../../../assets/cerrar-sesion-2.png')}
          />
        </Pressable> */}
      <TouchableOpacity
        style={styles.cerrarSesion}
        onPress={() => {
          removeUserSession();
        }}>
        <Image
          style={styles.cerrarSesionImage}
          source={require('../../../../../assets/cerrar-sesion-2.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.regresar}
        onPress={() => {
          user && user.roles && user.roles.length > 1
            ? navigation.replace('AdminTabsNavigator')
            : navigation.replace('ClientTabsNavigator');
        }}>
        <Image
          style={styles.regresarIcon}
          source={require('../../../../../assets/regresar.png')}
        />
      </TouchableOpacity>




      <View style={styles.form}>

        <Text style={styles.formTitle}>{user?.name} {user?.lastname}</Text>
        <Text style={styles.formUser}>Usuario N. {user?.id}</Text>

        {/* <View style={styles.formInfo}>
            <Image
              source={require('../../../../../assets/user.png')}
              style={styles.formImage}
            />
            <View style={styles.formSpace}>
              <Text style={styles.formData}>{user?.name} {user?.lastname}</Text>
              <Text style={styles.formDescription}>Usuario N. {user?.id}</Text>
            </View>
          </View> */}
        <View style={styles.formInfo}>
          <Image
            source={require('../../../../../assets/email.png')}
            style={styles.formImage}
          />
          <View style={styles.formSpace}>
            <Text style={styles.formData}>{user?.email} </Text>
            <Text style={styles.formDescription}>Correo electrónico</Text>
          </View>
        </View>
        <View style={{ ...styles.formInfo, marginTop: 25, marginBottom: 50 }}>
          <Image
            source={require('../../../../../assets/phone.png')}
            style={styles.formImage}
          />
          <View style={styles.formSpace}>
            <Text style={styles.formData}>{user?.phone} </Text>
            <Text style={styles.formDescription}>Teléfono</Text>
          </View>
        </View>


        <RoundedButton
          onPress={() => { navigation.navigate('ProfileUpdateScreen', { user: user! }) }}
          text='ACTUALIZAR INFORMACIÓN'
        />


      </View>

      <View style={styles.logoContainerUser}>
        {
          user?.image !== '' &&
          <Image
            source={{ uri: user?.image }}
            style={styles.logoSizeUser}
          />
        }
      </View>

      {/*       
          <Button
            onPress={() => {
              removeSession();
              navigation.navigate('HomeScreen');
            }}
            title="Vamos a ducharnos y cojer ahi si...."
          /> */}
    </View>
  );
};
