import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal } from 'react-native';

const ClientsScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nombreComercial: '',
    giro: '',
    telefono: '',
    correo: '',
    calle: '',
    numero: '',
    colonia: '',
    codigoPostal: '',
    pais: '',
    estado: '',
    ciudad: '',
    notas: '',
    descuento: '',
    contactoNombre: '',
    contactoTitulo: '',
    contactoArea: '',
    contactoCelular: '',
    contactoCorreo: '',
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [data, setData] = useState([
    { codigo: '001', nombre: 'Juan Pérez', empresa: 'ACME Inc.', contacto: 'Juan Pérez', celular: '123-456-7890' },
    { codigo: '002', nombre: 'María García', empresa: 'XYZ Corp.', contacto: 'María García', celular: '098-765-4321' },
    { codigo: '003', nombre: 'Pedro Martínez', empresa: 'ABC Co.', contacto: 'Pedro Martínez', celular: '321-654-9870' },
  ]);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddClient = () => {
    if (editingIndex !== null) {
      const newData = [...data];
      newData[editingIndex] = {
        codigo: newData[editingIndex].codigo,
        ...formData,
      };
      setData(newData);
    } else {
      setData([
        ...data,
        {
          codigo: (data.length + 1).toString().padStart(3, '0'),
          ...formData,
        },
      ]);
    }
    setFormData({
      nombreComercial: '',
      giro: '',
      telefono: '',
      correo: '',
      calle: '',
      numero: '',
      colonia: '',
      codigoPostal: '',
      pais: '',
      estado: '',
      ciudad: '',
      notas: '',
      descuento: '',
      contactoNombre: '',
      contactoTitulo: '',
      contactoArea: '',
      contactoCelular: '',
      contactoCorreo: '',
    });
    setEditingIndex(null);
    setShowModal(false);
  };

  const handleEditClient = (index) => {
    const client = data[index];
    setFormData(client);
    setEditingIndex(index);
    setShowModal(true);
  };

  const handleDeleteClient = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const tableHead = ['Código', 'Nombre', 'Empresa', 'Contacto', 'Celular', 'Acciones'];

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff', flexDirection: 'row' },
    text: { margin: 6 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    row: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c8e1ff' },
    cell: { flex: 1, padding: 10, borderWidth: 1, borderColor: '#c8e1ff', textAlign: 'center' },
    actionsCell: { flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderWidth: 1, borderColor: '#c8e1ff' },
    addButton: { marginTop: 20, padding: 10, backgroundColor: '#007bff', borderRadius: 5 },
    addButtonText: { color: '#fff', textAlign: 'center' },
    editButton: { padding: 10, backgroundColor: '#ffc107', borderRadius: 5 },
    editButtonText: { color: '#fff', textAlign: 'center' },
    deleteButton: { padding: 10, backgroundColor: '#dc3545', borderRadius: 5 },
    deleteButtonText: { color: '#fff', textAlign: 'center' },
    modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    modalContent: { width: '90%', maxHeight: '80%', padding: 20, backgroundColor: '#fff', borderRadius: 10 },
    formField: { marginBottom: 10 },
    formLabel: { fontSize: 16, marginBottom: 5 },
    formInput: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 5 },
    submitButton: { marginTop: 20, padding: 10, backgroundColor: '#007bff', borderRadius: 5 },
    submitButtonText: { color: '#fff', textAlign: 'center' },
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Listado de Clientes</Text>
      <ScrollView horizontal>
        <View>
          <View style={styles.head}>
            {tableHead.map((header, index) => (
              <Text key={index} style={styles.cell}>{header}</Text>
            ))}
          </View>
          {data.map((rowData, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {Object.values(rowData).map((cellData, cellIndex) => (
                <Text key={cellIndex} style={styles.cell}>{cellData}</Text>
              ))}
              <View style={styles.actionsCell}>
                <TouchableOpacity style={styles.editButton} onPress={() => handleEditClient(rowIndex)}>
                  <Text style={styles.editButtonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteClient(rowIndex)}>
                  <Text style={styles.deleteButtonText}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={() => setShowModal(true)}>
        <Text style={styles.addButtonText}>Agregar Cliente</Text>
      </TouchableOpacity>

      <Modal visible={showModal} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>{editingIndex !== null ? 'Editar Cliente' : 'Nuevo Cliente'}</Text>
            <ScrollView>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Nombre Comercial *</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.nombreComercial}
                  onChangeText={(value) => handleInputChange('nombreComercial', value)}
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Giro*</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.giro}
                  onChangeText={(value) => handleInputChange('giro', value)}
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Teléfono/celular</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.telefono}
                  onChangeText={(value) => handleInputChange('telefono', value)}
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Correo</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.correo}
                  onChangeText={(value) => handleInputChange('correo', value)}
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Calle *</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.calle}
                  onChangeText={(value) => handleInputChange('calle', value)}
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Número *</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.numero}
                  onChangeText={(value) => handleInputChange('numero', value)}
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Colonia</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.colonia}
                  onChangeText={(value) => handleInputChange('colonia', value)}
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Código Postal</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.codigoPostal}
                  onChangeText={(value) => handleInputChange('codigoPostal', value)}
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>País*</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.pais}
                  onChangeText={(value) => handleInputChange('pais', value)}
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Estado*</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.estado}
                  onChangeText={(value) => handleInputChange('estado', value)}
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Ciudad*</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.ciudad}
                  onChangeText={(value) => handleInputChange('ciudad', value)}
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Notas</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.notas}
                  onChangeText={(value) => handleInputChange('notas', value)}
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Descuento %</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.descuento}
                  onChangeText={(value) => handleInputChange('descuento', value)}
                />
              </View>
              <Text style={styles.formLabel}>CONTACTOS</Text>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Nombre*</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.contactoNombre}
                  onChangeText={(value) => handleInputChange('contactoNombre', value)}
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Título</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.contactoTitulo}
                  onChangeText={(value) => handleInputChange('contactoTitulo', value)}
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Área/Puesto</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.contactoArea}
                  onChangeText={(value) => handleInputChange('contactoArea', value)}
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Celular*</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.contactoCelular}
                  onChangeText={(value) => handleInputChange('contactoCelular', value)}
                />
              </View>
              <View style={styles.formField}>
                <Text style={styles.formLabel}>Correo</Text>
                <TextInput
                  style={styles.formInput}
                  value={formData.contactoCorreo}
                  onChangeText={(value) => handleInputChange('contactoCorreo', value)}
                />
              </View>
              <TouchableOpacity style={styles.submitButton} onPress={handleAddClient}>
                <Text style={styles.submitButtonText}>{editingIndex !== null ? 'Actualizar Cliente' : 'Guardar Cliente'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setShowModal(false); setEditingIndex(null); }} style={{ marginTop: 10 }}>
                <Text style={{ color: '#007bff', textAlign: 'center' }}>Cerrar</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ClientsScreen;
