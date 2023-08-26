import React, { useState } from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import { RoleItem } from '../../components/ItemRole';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import RoleViewModel from './RoleViewModel'
import Carousel from 'react-native-reanimated-carousel';
import styles from './RoleStyle';
import { RootStackParamList } from '../../navigator/MainStackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'RoleScreen'> { };

export const RoleScreen = ({ navigation, route }: Props) => {
  const { removeSession } = RoleViewModel();
  const { user } = RoleViewModel();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [mode, setMode] = useState<any>('vertical-stack');
  const [snapDirection, setSnapDirection] = useState<'right' | 'left'>('left');

  
  return (


    <GestureHandlerRootView style={styles.GHRcontainer}>
      <Image
        style={styles.imageBackground}
        source={require('../../../../assets/gamer-1.jpeg')}
      />

      <View style={styles.container} >

        <Image
          source={require('../../../../assets/cyber-link-white.png')}
          style={styles.logoSize}
        />

        <Text style={styles.title}>SELECCIONA UN ROL</Text>

        <Carousel
          loop={false}
          width={width}
          height={height / 2}
          autoPlay={false}
          data={user?.roles!}
          scrollAnimationDuration={1000}
          // onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({ item }) => <RoleItem rol={item} height={400} width={width - 100} navigation={navigation} />}
          modeConfig={{ snapDirection, stackInterval: 30 }}
          mode={mode}
        />
        <View style={styles.cerrarSession}>
          <TouchableOpacity onPress={() => { removeSession();navigation.navigate('HomeScreen');}}>
            <Text style={styles.titleButton}>Cerrar Sesión </Text>
          </TouchableOpacity>

        </View>
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
