import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ServiceOrdersScreen = () => {
  const tableHead = ['Folio', 'Fecha', 'Cliente'];
  const tableData = [
    ['001', '2023-01-01', 'Juan Pérez'],
    ['002', '2023-01-02', 'María García'],
    ['003', '2023-01-03', 'Pedro Martínez'],
    // Agrega más filas según necesites
  ];

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff', flexDirection: 'row' },
    text: { margin: 6 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    row: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c8e1ff' },
    cell: { flex: 1, padding: 10, borderWidth: 1, borderColor: '#c8e1ff' },
    addButton: { marginTop: 20, padding: 10, backgroundColor: '#007bff', borderRadius: 5 },
    addButtonText: { color: '#fff', textAlign: 'center' },
    editButton: { marginTop: 10, padding: 10, backgroundColor: '#ffc107', borderRadius: 5 },
    editButtonText: { color: '#fff', textAlign: 'center' },
    deleteButton: { marginTop: 10, padding: 10, backgroundColor: '#dc3545', borderRadius: 5 },
    deleteButtonText: { color: '#fff', textAlign: 'center' },
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Órdenes de Servicio</Text>
      <View style={styles.head}>
        {tableHead.map((header, index) => (
          <Text key={index} style={styles.cell}>{header}</Text>
        ))}
      </View>
      {tableData.map((rowData, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {rowData.map((cellData, cellIndex) => (
            <Text key={cellIndex} style={styles.cell}>{cellData}</Text>
          ))}
        </View>
      ))}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Agregar Orden</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar Orden</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Eliminar Orden</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ServiceOrdersScreen;
