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
        <View style={styles.rightSpace}>
          <TouchableOpacity onPress={() => { /* lógica para la campana */ }}>
            <Text style={styles.icon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* lógica para la configuración */ }}>
            <Text style={styles.icon}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Contenido de la pantalla */}
      <View style={styles.content}>
        {/* Imagen en el centro */}
        <Image
          source={logoImage}
          style={styles.logo}
          onError={(error) => console.error('Error al cargar la imagen', error)}
        />
        <TouchableOpacity style={styles.changeLogoButton}>
          <Text style={styles.changeLogoText}>Cambiar Logo</Text>
        </TouchableOpacity>

        {/* Fecha y botones */}
        <View style={styles.dateContainer}>
          <TouchableOpacity style={styles.dateButton}>
            <Text style={styles.dateButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.dateText}>25 Junio 2024</Text>
          <TouchableOpacity style={styles.dateButton}>
            <Text style={styles.dateButtonText}>→</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reloadButton}>
            <Text style={styles.dateButtonText}>⟳</Text>
          </TouchableOpacity>
        </View>

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

      {/* Botón flotante */}
      <TouchableOpacity style={styles.fab} onPress={() => { /* lógica para añadir nueva actividad */ }}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#007bff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingTop: 50,
  },
  menuButton: {
    width: 30,
  },
  menuIcon: {
    color: 'white',
    fontSize: 24,
  },
  appbarTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rightSpace: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
  },
  icon: {
    color: 'white',
    fontSize: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  changeLogoButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  changeLogoText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  reloadButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  dateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableContainer: {
    width: '90%',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    padding: 10,
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
    color: 'white',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#c8e1ff',
    padding: 10,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: '#007bff',
    borderRadius: 30,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 30,
    color: 'white',
  },
});

export default HomeScreen;
