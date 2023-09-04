import { StackScreenProps } from '@react-navigation/stack'
import React, {useEffect}from 'react'
import { Text, ToastAndroid, View } from 'react-native'
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator'
import AdminProductListViewModel from './ProductListViewModel'
import { FlatList } from 'react-native-gesture-handler'
import { AdminProductListItem } from './ItemProduct'

interface Props extends StackScreenProps<ProductStackParamList, 'AdminProductListScreen'> { };
export const AdminProductListScreen = ({ navigation, route }: Props) => {

    const{category} = route.params;
    const {products, responseMessage,  getProducts, deleteProduct} = AdminProductListViewModel();

    useEffect(() => {
      if(category.id !== undefined){
        getProducts(category.id!);
      }
    }, [])
    
    useEffect(() => {
        if(responseMessage !== ''){
          ToastAndroid.show(responseMessage, ToastAndroid.LONG);
        }
      }, [responseMessage])
    // console.log('categoria: ' + JSON.stringify(category));
 
    return (
        <View style={{backgroundColor: 'white' }}>
            <FlatList
                data={products}
                keyExtractor={(item)=> item.id!}
                renderItem={({item})=> <AdminProductListItem product={item} category={category} remove={deleteProduct}/>}
            />
        </View>
    )
}
