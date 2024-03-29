import React, { useEffect } from 'react'
import { Text, View, Image, ToastAndroid, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import CustomTextInput from '../../components/CustomTextInput';
import RoundedButton from '../../components/RoundedButton';
import HomeViewModel from './HomeViewModel';
import styles from './HomeStyles';
import { RootStackParamList } from '../../navigator/MainStackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'>{};

export const HomeScreen = ({navigation, route}: Props) => {

    // const [correo, setCorreo] = useState('');
    // const [clave, setClave] = useState('');

    const {email, password, errorMessage, onChange, login, user} = HomeViewModel();

    // const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    useEffect(() => {
      if(errorMessage !== ''){
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);

      }
    }, [errorMessage]);

    useEffect(() => {
     if( user?.id !== null  && user?.id !== undefined && user?.id !== '' ){
        if(user.roles?.length! > 1){
            navigation.replace('RoleScreen');
        }else{
            navigation.replace('ClientTabsNavigator');
        }
       
     }
    }, [user])
    
        
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageBackground}
                source={require('../../../../assets/gamer-1.jpeg')}
            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/cyber-link-white.png')}
                    style={styles.logoSize}
                />
                {/* <Text style={styles.logoText}>Cyber Link</Text> */}
            </View>
            <View style={styles.form}>
                <Text style={styles.formText}>INICIAR SESIÓN</Text>
                <CustomTextInput
                    image={ require('../../../../assets/email.png')}
                    placeholder='Correo Electrónico'
                    keyboardType='email-address'
                    property='email'
                    onChangeText={onChange}
                    value={email}
                />
                <CustomTextInput
                    image={ require('../../../../assets/password.png')}
                    placeholder='Clave'
                    keyboardType='default'
                    property='password'
                    onChangeText={onChange}
                    value={password}
                    secureTextEntry={true}
                />
              
                {/* <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/password.png')}
                        style={styles.formIcon}
                    />
                    <TextInput
                        style={styles.formtextInput}
                        placeholder='Contraseña'
                        keyboardType='default'
                        secureTextEntry={true}
                        value={ password }
                        onChangeText={text => onChange('password',text)}
                    />
                </View> */}
                <View style={{ marginTop: 30 }}>
                    {/* <RoundedButton text='ACCEDER' onPress={() => ToastAndroid.show('Hola!', ToastAndroid.SHORT)} /> */}
                    <RoundedButton text='ACCEDER' onPress={() => login()   } />

                </View>

                <View style={styles.formRegistrar}>
                    <Text >¿No tienes cuenta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.formtextRegistrar}>Registrar </Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    );

}



export default HomeScreen;
