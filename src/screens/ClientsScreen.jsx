import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const ClientsScreen = () => {
  const [showForm, setShowForm] = useState(false);
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

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddClient = () => {
    // Aquí puedes manejar el envío del formulario, por ejemplo, guardarlo en una base de datos.
    console.log(formData);
    setShowForm(false);
  };

  const tableHead = ['Código', 'Nombre', 'Empresa', 'Contacto', 'Celular'];
  const tableData = [
    ['001', 'Juan Pérez', 'ACME Inc.', 'Juan Pérez', '123-456-7890'],
    ['002', 'María García', 'XYZ Corp.', 'María García', '098-765-4321'],
    ['003', 'Pedro Martínez', 'ABC Co.', 'Pedro Martínez', '321-654-9870'],
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
    formContainer: { marginTop: 20, padding: 10, borderWidth: 1, borderColor: '#c8e1ff', borderRadius: 5 },
    formField: { marginBottom: 10 },
    formLabel: { fontSize: 16, marginBottom: 5 },
    formInput: { borderWidth: 1, borderColor: '#c8e1ff', padding: 8, borderRadius: 5 },
    submitButton: { marginTop: 10, padding: 10, backgroundColor: '#28a745', borderRadius: 5 },
    submitButtonText: { color: '#fff', textAlign: 'center' },
    tabContainer: { flexDirection: 'row', marginBottom: 10 },
    tabButton: { flex: 1, padding: 10, alignItems: 'center', borderWidth: 1, borderColor: '#c8e1ff' },
    activeTab: { backgroundColor: '#007bff', color: '#fff' },
    inactiveTab: { backgroundColor: '#fff', color: '#000' },
  });

  const [activeTab, setActiveTab] = useState('general');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Listado de Clientes</Text>
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
      <TouchableOpacity style={styles.addButton} onPress={() => setShowForm(true)}>
        <Text style={styles.addButtonText}>Agregar Cliente</Text>
      </TouchableOpacity>
      {showForm && (
        <View style={styles.formContainer}>
          <Text style={styles.title}>Nuevo Cliente</Text>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'general' ? styles.activeTab : styles.inactiveTab]}
              onPress={() => setActiveTab('general')}
            >
              <Text style={activeTab === 'general' ? { color: '#fff' } : { color: '#000' }}>Datos Generales</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'additional' ? styles.activeTab : styles.inactiveTab]}
              onPress={() => setActiveTab('additional')}
            >
              <Text style={activeTab === 'additional' ? { color: '#fff' } : { color: '#000' }}>Más Información</Text>
            </TouchableOpacity>
          </View>
          {activeTab === 'general' && (
            <View>
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
            </View>
          )}
          {activeTab === 'additional' && (
            <View>
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
              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Agregar Contacto</Text>
              </TouchableOpacity>
              <Text style={styles.formLabel}>Documentos</Text>
              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Agregar Documento</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity style={styles.submitButton} onPress={handleAddClient}>
            <Text style={styles.submitButtonText}>Guardar Cliente</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowForm(false)} style={{ marginTop: 10 }}>
            <Text style={{ color: '#007bff', textAlign: 'center' }}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar Cliente</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Eliminar Cliente</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ClientsScreen;
