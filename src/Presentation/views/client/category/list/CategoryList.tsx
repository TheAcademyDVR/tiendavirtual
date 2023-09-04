import { StackScreenProps } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../../../navigator/MainStackNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import styles from './CategoryListStyle';
import { ClienteStackParamList } from '../../../../navigator/ClientStackNavigator';
import ClientCategoryListViewModel from './CategoryListViewModel';
import { ClientCategoryItem } from './ItemCategory';


interface Props extends StackScreenProps<ClienteStackParamList, 'ClientCategoryListScreen'> { };

export const ClientCategoryListScreen = ({ navigation, route }: Props) => {
  const { categories, getCatgories } = ClientCategoryListViewModel();
//   const { user } = RoleViewModel();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [mode, setMode] = useState<any>('horizontal-stack');
  const [snapDirection, setSnapDirection] = useState<'right' | 'left'>('left');

  useEffect(() => {
    getCatgories();
  }, [])
  
  return (


    <GestureHandlerRootView style={styles.GHRcontainer}>
      <Image
        style={styles.imageBackground}
        source={require('../../../../../../assets/gamer-1.jpeg')}
      />

      <View style={styles.container} >

        <Image
          source={require('../../../../../../assets/cyber-link-white.png')}
          style={styles.logoSize}
        />

        <Text style={styles.title}>CATEGORIAS DE LOS ARTÍCULOS</Text>

        <Carousel
          loop={false}
          width={width}
          height={height }
          autoPlay={false}
          data={categories}
          scrollAnimationDuration={1000}
          // onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({ item }) => <ClientCategoryItem category={item} height={height * 0.62} width={width - 50} navigation={navigation} />}
          modeConfig={{ snapDirection, stackInterval: 30 }}
          mode={mode}
        />
        {/* <View style={styles.cerrarSession}>
          <TouchableOpacity onPress={() => { removeSession();navigation.navigate('HomeScreen');}}>
            <Text style={styles.titleButton}>Cerrar Sesión </Text>
          </TouchableOpacity>

        </View> */}
        {/* <FlatList

        data={user?.roles}
        renderItem={({ item }) => <RoleItem rol={item} height={400} width={width-100} />}
        keyExtractor={(item) => item.id.toString()}
      /> */}
      </View>


    </GestureHandlerRootView>

  )
}

// export default RoleScreen
