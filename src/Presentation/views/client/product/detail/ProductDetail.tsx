import React, { useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator'
import styles from './ProductDetailStyle'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Carousel from 'react-native-reanimated-carousel'
import useViewModel from './ProductDetailViewModel'
import RoundedButton from '../../../../components/RoundedButton'


interface Props extends StackScreenProps<ClientStackParamList, 'ClientProductDetailScreen'> { };

export const ClientProductDetailScreen = ({ navigation, route }: Props) => {

  const { product } = route.params;
  // console.log('DETALLE DEL PRODUCT'+ JSON.stringify(product));
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [mode, setMode] = useState<any>('horizontal');
  const [snapDirection, setSnapDirection] = useState<'right' | 'left'>('left');
  //
  const { productImageList, quantity, price, addItem, removeItem } = useViewModel(product);

  return (

    <View style={styles.container} >


      <GestureHandlerRootView style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

        position: 'absolute'
      }}>
        <Carousel
          loop={false}
          width={width}
          height={height}
          autoPlay={true}
          data={productImageList}
          autoPlayInterval={10000}
          scrollAnimationDuration={1000}
          renderItem={({ item }) =>
            <Image
              source={{ uri: item }}
              style={styles.productImage}
            />}
        />
      </GestureHandlerRootView>

      <TouchableOpacity
        style={styles.regresar}
        onPress={() => { navigation.pop() }}>
        <Image
          style={styles.regresarIcon}
          source={require('../../../../../../assets/regresar.png')}
        />
      </TouchableOpacity>
      
      <View style={styles.productDetail}>
        <View style={styles.productInfo}>

          {/* NOMBRE */}
          <Text style={styles.nameProduct}>{product.name}</Text>
          <View style={styles.divider}></View>

          {/* DESCRIPCION */}
          <Text style={styles.descriptionTitle}>Descripción</Text>
          <Text style={styles.descriptionContent}>{product.description}</Text>

          {/* PRECIO */}
          <Text style={styles.descriptionTitle}>Precio</Text>
          <Text style={styles.descriptionContent}>$ {product.price}</Text>

          {/* ORDEN */}
          <Text style={styles.descriptionTitle}>Tu orden</Text>
          <Text style={styles.descriptionContent}>Cantidad:       {quantity}</Text>
          <Text style={styles.descriptionContent}>Precio Total: $ {price}</Text>
          <View style={styles.divider}></View>

        </View>
        <View style={styles.productActions}>

          <TouchableOpacity
            onPress={() => removeItem()}
            style={styles.actionLess}>
            <Text style={styles.actionTextLess}>-</Text>
          </TouchableOpacity>

          <View style={styles.quantity}>
            <Text style={styles.quantityText}>{quantity}</Text>
          </View>

          <TouchableOpacity
            onPress={() => addItem()}
            style={styles.actionAdd}>
            <Text style={styles.actionTextAdd}>+</Text>
          </TouchableOpacity>

          <View style={styles.buttonAdd}>
            <RoundedButton
              text='Agregar'
              onPress={() => { }}
            />
          </View>
        </View>
      </View>

    </View >
  )
}
