import React, {useEffect} from 'react'
import { FlatList, Text, View } from 'react-native'
import useViewModel from './ProductListViewModel'
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';
import { ClientProductItem } from './ItemProduct';

interface Props extends StackScreenProps<ClientStackParamList, 'ClientProductListScreen'>{};
export const ClientProductListScreen = ({navigation, route}: Props) => {

  const { products, getProducts} = useViewModel();
  const { idCategory } = route.params;

  useEffect(() => {
    getProducts(idCategory);
  }, [])
  
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          data={ products }
          keyExtractor={(item) => item.id!}
          renderItem={({item}) => <ClientProductItem product={item} navigation={navigation}/>}
        />        
    </View>
  )
}
