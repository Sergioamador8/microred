import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import logoImage from '../../assets/logo.png';

const DATA = [
  { id: '1', hora: '10:00 AM', cliente: 'Cliente A', actividad: 'Instalación' },
  { id: '2', hora: '11:30 AM', cliente: 'Cliente B', actividad: 'Mantenimiento' },
  { id: '3', hora: '01:45 PM', cliente: 'Cliente C', actividad: 'Reparación' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Barra de navegación */}
      <View style={styles.appbar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.appbarTitle}>Microred</Text>
        <View style={styles.rightSpace}></View>
      </View>

      {/* Contenido de la pantalla */}
      <View style={styles.content}>
        {/* Imagen en el centro */}
        <Image
          source={logoImage}
          style={styles.logo}
          onError={(error) => console.error('Error al cargar la imagen', error)}
        />

        {/* Tabla */}
        <ScrollView style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderCell}>Hora</Text>
            <Text style={styles.tableHeaderCell}>Cliente</Text>
            <Text style={styles.tableHeaderCell}>Actividad</Text>
          </View>
          {DATA.map((item) => (
            <View key={item.id} style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.hora}</Text>
              <Text style={styles.tableCell}>{item.cliente}</Text>
              <Text style={styles.tableCell}>{item.actividad}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingTop: 50, // Added padding to avoid overlapping with status bar
  },
  menuButton: {
    width: 30, // Ensures space for the icon
  },
  menuIcon: {
    color: 'white',
    fontSize: 24,
  },
  appbarTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  rightSpace: {
    width: 30, // Ensures an equivalent empty space on the right
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'white',
    marginTop: 10, // Adjust content to start below the Appbar
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'red',
  },
  tableContainer: {
    width: '90%',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f1f8ff',
    padding: 10,
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#c8e1ff',
    padding: 10,
  },
  tableCell: {
    flex: 1,
  },
});

export default HomeScreen;
