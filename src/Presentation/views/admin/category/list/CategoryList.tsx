import React, { useEffect } from 'react'
import { AdminTabsNavigator } from '../../../../navigator/AdminTabsNavigator';
import {FlatList, Text, ToastAndroid, View } from 'react-native';
import AdminCategoryListViewModel from './CategoryListViewModel';
import { AdminCategoryListItem } from './Item';


export const AdminCategoryListScreen = () => {

    const {categories, getCategories, deleteCategory, responseMessage} = AdminCategoryListViewModel();

  
    useEffect(() => {
      if(responseMessage !== ''){
        ToastAndroid.show(responseMessage, ToastAndroid.LONG);
      }
    }, [])

    
    return (
        <View style={{backgroundColor: 'white'}}>
            <FlatList
                data={categories}
                keyExtractor={(item)=> item.id!}
                renderItem={({item}) => <AdminCategoryListItem category={item} remove={deleteCategory}/>}
                />
            {/* <Text>AdminCategoryListScreen</Text> */}
        </View>
    )
}
