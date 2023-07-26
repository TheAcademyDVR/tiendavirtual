import React, {useState, } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Image, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack'
import useViewModel from './ViewModel';
import { RootStackParamList } from '../../../../App';
import CustomTextInput from '../../components/CustomTextInput';
const HomeScreen = () => {

    // const [correo, setCorreo] = useState('');
    // const [clave, setClave] = useState('');

    const {email, password, onChange} = useViewModel();

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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
                    <RoundedButton text='ACCEDER' onPress={() => {
                        console.log('Correo: '+email)
                        console.log('Clave: '+password)
                    }} />

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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%'
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%'
    },
    logoSize: {
        width: 225,
        height: 225,
        alignSelf: 'center',
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        marginTop: 10,
        fontWeight: 'bold'
    },
    form: {
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        padding: 20
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30
    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5
    },
    formtextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15
    },
    formButton: {
        backgroundColor: 'azul'
    },
    formRegistrar: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25

    },
    formtextRegistrar: {
        // fontStyle: 'italic',
        color: 'red',
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        fontWeight: 'bold',
        marginLeft: 10
    }


});

export default HomeScreen;
