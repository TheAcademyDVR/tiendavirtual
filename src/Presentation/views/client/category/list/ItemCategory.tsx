import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigator/MainStackNavigator';
import { MyColors } from '../../../../theme/AppTheme';
import { Category } from '../../../../../Domain/entities/Category';
import { ClienteStackParamList } from '../../../../navigator/ClientStackNavigator';

interface Props {
    category: Category,
    height: number,
    width: number,
    navigation: StackNavigationProp<ClienteStackParamList, "ClientCategoryListScreen", undefined>
}

export const ClientCategoryItem = ({ category, height, width, navigation }: Props) => {

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('ClientProductListScreen', {idCategory: category.id!})
            }}
            style={{ ...styles.container, height: height, width: width }}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    //@ts-ignore
                    source={{ uri: category.image }}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {category.name}
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
        backgroundColor: 'white',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        elevation: 8,
        shadowColor: 'white',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 15
    },
    title: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 20

        
    }

});

