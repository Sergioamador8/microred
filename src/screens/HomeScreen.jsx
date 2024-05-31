import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { Appbar } from 'react-native-paper';
import logoImage from '../../assets/logo.png'; 

const DATA = [
  { id: '1', hora: '10:00 AM', cliente: 'Cliente A', actividad: 'Instalación' },
  { id: '2', hora: '11:30 AM', cliente: 'Cliente B', actividad: 'Mantenimiento' },
  { id: '3', hora: '01:45 PM', cliente: 'Cliente C', actividad: 'Reparación' },
  // Aqui se agregaran más datos si es necesario
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Barra de navegación */}
      <Appbar.Header style={{ backgroundColor: 'blue' }}>
        <Appbar.Action
          icon="menu"
          color="white"
          onPress={() => navigation.openDrawer()}
        />
        <Appbar.Content title="Microred" color='white' />
      </Appbar.Header>

      {/* Contenido de la pantalla */}
      <View style={{ flex: 1, alignItems: 'center', paddingVertical: 20 }}>
        {/* Imagen en el centro */}
        <Image
          source={logoImage} 
          style={{ width: 150, height: 150, marginBottom: 20 }}
        />

        {/* Tabla */}
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
              <Text style={{ flex: 1 }}>{item.hora}</Text>
              <Text style={{ flex: 1 }}>{item.cliente}</Text>
              <Text style={{ flex: 1 }}>{item.actividad}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
