import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Rol } from '../../../Domain/entities/Rol'
import { MyColors } from '../../theme/AppTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigator/MainStackNavigator';

interface Props {
    rol: Rol,
    height: number,
    width: number,
    navigation: StackNavigationProp<RootStackParamList, "RoleScreen", undefined>
}

export const RoleItem = ({ rol, height, width, navigation }: Props) => {

    return (
        <TouchableOpacity
            onPress={() => {
                if(rol.name == 'ADMINISTRADOR'){
                    navigation.navigate('AdminTabsNavigator');
                }else if(rol.name == 'CLIENTE'){
                    navigation.replace('ClientTabsNavigator');
                }
            }}
            style={{ ...styles.container, height: height, width: width }}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    //@ts-ignore
                    source={{ uri: rol.image }}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {rol.name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        paddingBottom: 10,
        paddingHorizontal: 5,
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 15

    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    },
    titleContainer: {
        backgroundColor: MyColors.primary,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    },
    title: {
        color: 'white'
    }

});

