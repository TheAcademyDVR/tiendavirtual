import { createStackNavigator } from "@react-navigation/stack";
import { ClientCategoryListScreen } from "../views/client/category/list/CategoryList";
import { ClientProductListScreen } from "../views/client/product/list/ProductList";
import { ClientProductDetailScreen } from "../views/client/product/detail/ProductDetail";
import { Product } from "../../Domain/entities/Product";
import { Category } from "../../Domain/entities/Category";

export type ClientStackParamList = {
    ClientCategoryListScreen: undefined,
    ClientProductListScreen: {idCategory: string}
    ClientProductDetailScreen: {product: Product}
}

const Stack = createStackNavigator<ClientStackParamList>();

export const ClientStackNavigatior = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='ClientCategoryListScreen'
                component={ClientCategoryListScreen}
               
            />
            <Stack.Screen
                name='ClientProductListScreen'
                component={ClientProductListScreen}
                options={{
                    headerShown: true,
                    title: 'Productos' 
                }}
            />
           <Stack.Screen
                name='ClientProductDetailScreen'
                component={ClientProductDetailScreen}
            />

        </Stack.Navigator>
    )
}