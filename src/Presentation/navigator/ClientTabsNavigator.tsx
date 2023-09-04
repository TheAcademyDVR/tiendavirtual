import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { ClientOrderListScreen } from '../views/client/order/list/OrderList';
import { Image } from 'react-native';
import { ClientStackNavigatior } from './ClientStackNavigator';

const Tab = createBottomTabNavigator();

export const ClientTabsNavigator=() => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ClientStackNavigatior"
        component={ClientStackNavigatior}
        options={{
          headerShown: false,
          title: 'Categorias',
          tabBarLabel: 'Categorias',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../../assets/list.png')}
              style={{ width: 25, height: 25 }}
            />
          )
        }}
      />
      <Tab.Screen
        name="ClientOrderListScreen"
        component={ClientOrderListScreen}
        options={{
          title: 'Pedidos',
          headerShown: false,
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../../assets/orders.png')}
              style={{ width: 25, height: 25 }}
            />
          )
        }}
      />
      <Tab.Screen
        name="ProfileInfoScreen"
        component={ProfileInfoScreen}
        options={{
          title: 'Perfil',
          headerShown: false,
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../../assets/user_menu.png')}
              style={{ width: 25, height: 25 }}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}