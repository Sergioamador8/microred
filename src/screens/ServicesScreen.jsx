import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal, Alert } from 'react-native';

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
  const [editIndex, setEditIndex] = useState(null);
  const [services, setServices] = useState([
    { codigo: '001', nombre: 'Consultoría', precio: '$100.00' },
    { codigo: '002', nombre: 'Mantenimiento', precio: '$50.00' },
    { codigo: '003', nombre: 'Desarrollo', precio: '$200.00' },
  ]);

  const handleInputChange = (name, value) => {
    // Validar campos numéricos y de precio
    if (['precio', 'codigoSat'].includes(name)) {
      const numberRegex = /^[0-9]*$/;
      if (!numberRegex.test(value)) return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddService = () => {
    if (editIndex !== null) {
      const updatedServices = services.map((service, index) =>
        index === editIndex ? { ...formData, codigo: service.codigo } : service
      );
      setServices(updatedServices);
    } else {
      const newService = {
        codigo: (services.length + 1).toString().padStart(3, '0'),
        ...formData,
      };
      setServices([...services, newService]);
    }
    setShowModal(false);
    setFormData({
      nombre: '',
      categoria: '',
      precio: '',
      descripcion: '',
      unidadSat: '',
      codigoSat: '',
    });
    setEditIndex(null);
  };

  const handleEditService = (index) => {
    const service = services[index];
    setFormData({
      nombre: service.nombre,
      categoria: service.categoria || '',
      precio: service.precio,
      descripcion: service.descripcion || '',
      unidadSat: service.unidadSat || '',
      codigoSat: service.codigoSat || '',
    });
    setShowModal(true);
    setEditIndex(index);
  };

  const handleDeleteService = (index) => {
    Alert.alert(
      'Eliminar Servicio',
      '¿Estás seguro de que deseas eliminar este servicio?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', onPress: () => {
            const updatedServices = services.filter((_, i) => i !== index);
            setServices(updatedServices);
          }
        }
      ]
    );
  };

  const tableHead = ['Código', 'Nombre', 'Precio', 'Acciones'];

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff', flexDirection: 'row' },
    text: { margin: 6 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
    row: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c8e1ff' },
    cell: { padding: 10, borderWidth: 1, borderColor: '#c8e1ff', textAlign: 'center', width: 100 },
    actionsCell: { flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderWidth: 1, borderColor: '#c8e1ff', width: 150 },
    addButton: { marginTop: 20, padding: 10, backgroundColor: '#007bff', borderRadius: 5, alignSelf: 'center' },
    addButtonText: { color: '#fff', textAlign: 'center' },
    editButton: { padding: 10, backgroundColor: '#ffc107', borderRadius: 5 },
    editButtonText: { color: '#fff', textAlign: 'center' },
    deleteButton: { padding: 10, backgroundColor: '#dc3545', borderRadius: 5 },
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
      <ScrollView horizontal>
        <View>
          <View style={styles.head}>
            {tableHead.map((header, index) => (
              <Text key={index} style={styles.cell}>{header}</Text>
            ))}
          </View>
          {services.map((service, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              <Text style={styles.cell}>{service.codigo}</Text>
              <Text style={styles.cell}>{service.nombre}</Text>
              <Text style={styles.cell}>{service.precio}</Text>
              <View style={styles.actionsCell}>
                <TouchableOpacity style={styles.editButton} onPress={() => handleEditService(rowIndex)}>
                  <Text style={styles.editButtonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteService(rowIndex)}>
                  <Text style={styles.deleteButtonText}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={() => setShowModal(true)}>
        <Text style={styles.addButtonText}>Agregar Servicio</Text>
      </TouchableOpacity>

      <Modal visible={showModal} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>{editIndex !== null ? 'Editar Servicio' : 'Nuevo Servicio'}</Text>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Nombre*</Text>
              <TextInput
                style={styles.formInput}
                value={formData.nombre}
                onChangeText={(value) => handleInputChange('nombre', value)}
                placeholder="Nombre del Servicio"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Categoria*</Text>
              <TextInput
                style={styles.formInput}
                value={formData.categoria}
                onChangeText={(value) => handleInputChange('categoria', value)}
                placeholder="Categoría del Servicio"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Precio $*</Text>
              <TextInput
                style={styles.formInput}
                value={formData.precio}
                onChangeText={(value) => handleInputChange('precio', value)}
                keyboardType="numeric"
                placeholder="Precio del Servicio"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Descripción*</Text>
              <TextInput
                style={styles.formInput}
                value={formData.descripcion}
                onChangeText={(value) => handleInputChange('descripcion', value)}
                placeholder="Descripción del Servicio"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Unidad SAT</Text>
              <TextInput
                style={styles.formInput}
                value={formData.unidadSat}
                onChangeText={(value) => handleInputChange('unidadSat', value)}
                placeholder="Unidad SAT"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Código SAT</Text>
              <TextInput
                style={styles.formInput}
                value={formData.codigoSat}
                onChangeText={(value) => handleInputChange('codigoSat', value)}
                keyboardType="numeric"
                placeholder="Código SAT"
              />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleAddService}>
              <Text style={styles.saveButtonText}>{editIndex !== null ? 'Guardar Cambios' : 'Guardar Servicio'}</Text>
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
