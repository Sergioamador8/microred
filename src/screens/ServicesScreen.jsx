import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal } from 'react-native';

const ServicesScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    categoria: '',
    precio: '',
    descripcion: '',
    unidadSat: '',
    codigoSat: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddService = () => {
    // Aquí puedes manejar el envío del formulario, por ejemplo, guardarlo en una base de datos.
    console.log(formData);
    setShowModal(false);
  };

  const tableHead = ['Código', 'Nombre', 'Precio'];
  const tableData = [
    ['001', 'Consultoría', '$100.00'],
    ['002', 'Mantenimiento', '$50.00'],
    ['003', 'Desarrollo', '$200.00'],
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
    modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    modalContent: { width: '90%', padding: 20, backgroundColor: '#fff', borderRadius: 10 },
    formField: { marginBottom: 10 },
    formLabel: { fontSize: 16, marginBottom: 5 },
    formInput: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 5 },
    saveButton: { marginTop: 20, padding: 10, backgroundColor: '#007bff', borderRadius: 5 },
    saveButtonText: { color: '#fff', textAlign: 'center' },
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Listado de Servicios</Text>
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
      <TouchableOpacity style={styles.addButton} onPress={() => setShowModal(true)}>
        <Text style={styles.addButtonText}>Agregar Servicio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar Servicio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Eliminar Servicio</Text>
      </TouchableOpacity>

      <Modal visible={showModal} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Nuevo Servicio</Text>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Nombre*</Text>
              <TextInput
                style={styles.formInput}
                value={formData.nombre}
                onChangeText={(value) => handleInputChange('nombre', value)}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Categoria*</Text>
              <TextInput
                style={styles.formInput}
                value={formData.categoria}
                onChangeText={(value) => handleInputChange('categoria', value)}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Precio $*</Text>
              <TextInput
                style={styles.formInput}
                value={formData.precio}
                onChangeText={(value) => handleInputChange('precio', value)}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Descripcion*</Text>
              <TextInput
                style={styles.formInput}
                value={formData.descripcion}
                onChangeText={(value) => handleInputChange('descripcion', value)}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Unidad SAT</Text>
              <TextInput
                style={styles.formInput}
                value={formData.unidadSat}
                onChangeText={(value) => handleInputChange('unidadSat', value)}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Código SAT</Text>
              <TextInput
                style={styles.formInput}
                value={formData.codigoSat}
                onChangeText={(value) => handleInputChange('codigoSat', value)}
              />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleAddService}>
              <Text style={styles.saveButtonText}>GUARDAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowModal(false)} style={{ marginTop: 10 }}>
              <Text style={{ color: '#007bff', textAlign: 'center' }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ServicesScreen;
