import React from 'react'
import HomeScreen from '../views/home/Home';
import RegisterScreen from '../views/register/Register';
import ProfileUpdateScreen from '../views/profile/update/ProfileUpdate';
import { User } from '../../Domain/entities/User';
import { Category } from '../../Domain/entities/Category';
import { RoleScreen } from '../views/role/Role';
import { AdminTabsNavigator } from './AdminTabsNavigator';
import { ClientTabsNavigator } from './ClientTabsNavigator';
import { AdminCategoryCreateScreen } from '../views/admin/category/create/CategoryCreate';
import { AdminCategoryUpdateScreen } from '../views/admin/category/update/CategoryUpdate';
import { UserProvider } from '../context/UserContext';
import { CategoryProvider } from '../context/CategoryContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export type RootStackParamList = {

    HomeScreen: undefined,
    RegisterScreen: undefined,
    RoleScreen: undefined,
    ClientTabsNavigator: undefined,
    AdminTabsNavigator: undefined,
    ProfileUpdateScreen: { user: User }

  
  }
const Stack = createNativeStackNavigator<RootStackParamList>();


export const MainStackNavigator = () => {
    return (
        <UserState>

            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                // options={{
                //   headerShown: true,
                //   title: 'Nuevo Usuario'
                // }}
                />

                <Stack.Screen
                    name="RoleScreen"
                    component={RoleScreen}
                />

                <Stack.Screen
                    name="AdminTabsNavigator"
                    component={AdminTabsNavigator}
                />

                <Stack.Screen
                    name="ClientTabsNavigator"
                    component={ClientTabsNavigator}
                />
                <Stack.Screen
                    name="ProfileUpdateScreen"
                    component={ProfileUpdateScreen}
                />
               

            </Stack.Navigator>
        </UserState>
    )
}


const UserState = ({ children }: any) => {
    return (
      <UserProvider>
        {children}
      </UserProvider>
    )
  }
  
  const ContextState = ({ children }: any) => {
    return (
      <CategoryProvider>
        {children}
      </CategoryProvider>
    )
  }
  