import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import RoundedButton from '../../componentes/RoundedButton';


export const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageBackground}
                source={require('../../../../assets/chef.jpg')}
            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/user_image.png')}
                    style={styles.logoSize}
                />
                <Text style={styles.logoText}>Selecciona una Imagen</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.formText}>REGISTRARSE</Text>

                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/user.png')}
                        style={styles.formIcon}
                    />
                    <TextInput
                        style={styles.formtextInput}
                        placeholder='Nombres'
                        keyboardType='default'
                    />
                </View>
                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/my_user.png')}
                        style={styles.formIcon}
                    />
                    <TextInput
                        style={styles.formtextInput}
                        placeholder='Apellidos'
                        keyboardType='default'
                    />
                </View>
                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/phone.png')}
                        style={styles.formIcon}
                    />
                    <TextInput
                        style={styles.formtextInput}
                        placeholder='Celular'
                        keyboardType='numeric'
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/email.png')}
                        style={styles.formIcon}
                    />
                    <TextInput
                        style={styles.formtextInput}
                        placeholder='Correo Electrónico'
                        keyboardType='email-address'
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/password.png')}
                        style={styles.formIcon}
                    />
                    <TextInput
                        style={styles.formtextInput}
                        placeholder='Contraseña'
                        keyboardType='default'
                        secureTextEntry={true}
                    />
                </View> 

                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/confirm_password.png')}
                        style={styles.formIcon}
                    />
                    <TextInput
                        style={styles.formtextInput}
                        placeholder='Confirmar Contraseña'
                        keyboardType='default'
                        secureTextEntry={true}
                    />
                </View>

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='CONFIRMAR' onPress={() => ToastAndroid.show('Hola!', ToastAndroid.SHORT)} />
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
        top: '5%',
        alignItems: 'center'
    },
    logoSize: {
        width: 120,
        height: 120,
        alignSelf: 'center',
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },
    form: {
        width: '100%',
        height: '70%',
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

export default RegisterScreen;
