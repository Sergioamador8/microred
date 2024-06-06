import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ClientsScreen from './src/screens/ClientsScreen';
import ServiceOrdersScreen from './src/screens/ServiceOrdersScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import PhotosScreen from './src/screens/PhotosScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    drawerStyle={{
      width: '50%', // Establece el ancho del drawer al 50% de la pantalla
    }}
  >
    <Drawer.Screen name="Inicio" component={HomeScreen} options={{ headerShown: false }} />
    <Drawer.Screen name="Perfil" component={ProfileScreen} />
    <Drawer.Screen name="Clientes" component={ClientsScreen} />
    <Drawer.Screen name="Ordenes de servicio" component={ServiceOrdersScreen} />
    <Drawer.Screen name="Productos" component={ProductsScreen} />
    <Drawer.Screen name="Servicios" component={ServicesScreen} />
    <Drawer.Screen name="Fotos" component={PhotosScreen} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" options={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
