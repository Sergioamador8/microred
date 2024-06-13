import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ServiceOrdersScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    cliente: '',
    servicio: '',
    precio: '',
    productos: '',
    fechaInicio: new Date(),
    fechaFin: new Date(),
    horaInicio: new Date(),
    horaFin: new Date(),
    actividades: '',
    recomendaciones: '',
    nombreFirma: '',
    telefonoFirma: '',
    correoFirma: '',
    direccionFirma: '',
  });
  const [showDatePicker, setShowDatePicker] = useState({ field: null, show: false });
  const [editingIndex, setEditingIndex] = useState(null);
  const [data, setData] = useState([
    { folio: '001', fecha: '2023-01-01', cliente: 'Juan Pérez' },
    { folio: '002', fecha: '2023-01-02', cliente: 'María García' },
    { folio: '003', fecha: '2023-01-03', cliente: 'Pedro Martínez' },
  ]);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (event, selectedDate) => {
    const currentField = showDatePicker.field;
    const currentDate = selectedDate || formData[currentField];
    setShowDatePicker({ field: null, show: false });
    handleInputChange(currentField, currentDate);
  };

  const handleAddOrder = () => {
    if (editingIndex !== null) {
      const newData = [...data];
      newData[editingIndex] = {
        folio: data[editingIndex].folio,
        fecha: formData.fechaInicio.toDateString(),
        cliente: formData.cliente,
      };
      setData(newData);
    } else {
      setData([
        ...data,
        {
          folio: (data.length + 1).toString().padStart(3, '0'),
          fecha: formData.fechaInicio.toDateString(),
          cliente: formData.cliente,
        },
      ]);
    }
    setFormData({
      cliente: '',
      servicio: '',
      precio: '',
      productos: '',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      horaInicio: new Date(),
      horaFin: new Date(),
      actividades: '',
      recomendaciones: '',
      nombreFirma: '',
      telefonoFirma: '',
      correoFirma: '',
      direccionFirma: '',
    });
    setEditingIndex(null);
    setShowModal(false);
  };

  const handleEditOrder = (index) => {
    const order = data[index];
    setFormData({
      cliente: order.cliente,
      servicio: '',
      precio: '',
      productos: '',
      fechaInicio: new Date(order.fecha),
      fechaFin: new Date(),
      horaInicio: new Date(),
      horaFin: new Date(),
      actividades: '',
      recomendaciones: '',
      nombreFirma: '',
      telefonoFirma: '',
      correoFirma: '',
      direccionFirma: '',
    });
    setEditingIndex(index);
    setShowModal(true);
  };

  const handleDeleteOrder = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const tableHead = ['Folio', 'Fecha', 'Cliente', 'Acciones'];

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff', flexDirection: 'row' },
    text: { margin: 6 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    row: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c8e1ff' },
    cell: { flex: 1, padding: 10, borderWidth: 1, borderColor: '#c8e1ff' },
    addButton: { marginTop: 20, padding: 10, backgroundColor: '#007bff', borderRadius: 5 },
    addButtonText: { color: '#fff', textAlign: 'center' },
    editButton: { padding: 10, backgroundColor: '#ffc107', borderRadius: 5, marginHorizontal: 5 },
    editButtonText: { color: '#fff', textAlign: 'center' },
    deleteButton: { padding: 10, backgroundColor: '#dc3545', borderRadius: 5 },
    deleteButtonText: { color: '#fff', textAlign: 'center' },
    modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    modalContent: { width: '90%', padding: 20, backgroundColor: '#fff', borderRadius: 10 },
    formField: { marginBottom: 10 },
    formLabel: { fontSize: 16, marginBottom: 5 },
    formInput: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 5 },
    dateTimeButton: { marginTop: 10, padding: 10, backgroundColor: '#007bff', borderRadius: 5 },
    dateTimeButtonText: { color: '#fff', textAlign: 'center' },
    submitButton: { marginTop: 10, padding: 10, backgroundColor: '#28a745', borderRadius: 5 },
    submitButtonText: { color: '#fff', textAlign: 'center' },
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Órdenes de Servicio</Text>
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
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.editButton} onPress={() => handleEditOrder(rowIndex)}>
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteOrder(rowIndex)}>
              <Text style={styles.deleteButtonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={() => setShowModal(true)}>
        <Text style={styles.addButtonText}>Agregar Orden</Text>
      </TouchableOpacity>

      <Modal visible={showModal} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.title}>{editingIndex !== null ? 'Editar Orden de Servicio' : 'Nueva Orden de Servicio'}</Text>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Cliente*</Text>
              <TextInput
                style={styles.formInput}
                value={formData.cliente}
                onChangeText={(value) => handleInputChange('cliente', value)}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Servicio Realizado*</Text>
              <TextInput
                style={styles.formInput}
                value={formData.servicio}
                onChangeText={(value) => handleInputChange('servicio', value)}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Precio</Text>
              <TextInput
                style={styles.formInput}
                value={formData.precio}
                onChangeText={(value) => handleInputChange('precio', value)}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Productos Utilizados</Text>
              <TextInput
                style={styles.formInput}
                value={formData.productos}
                onChangeText={(value) => handleInputChange('productos', value)}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Fecha de Inicio</Text>
              <TouchableOpacity
                style={styles.dateTimeButton}
                onPress={() => setShowDatePicker({ field: 'fechaInicio', show: true })}
              >
                <Text style={styles.dateTimeButtonText}>{formData.fechaInicio.toDateString()}</Text>
              </TouchableOpacity>
              {showDatePicker.show && showDatePicker.field === 'fechaInicio' && (
                <DateTimePicker
                  value={formData.fechaInicio}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Fecha de Fin</Text>
              <TouchableOpacity
                style={styles.dateTimeButton}
                onPress={() => setShowDatePicker({ field: 'fechaFin', show: true })}
              >
                <Text style={styles.dateTimeButtonText}>{formData.fechaFin.toDateString()}</Text>
              </TouchableOpacity>
              {showDatePicker.show && showDatePicker.field === 'fechaFin' && (
                <DateTimePicker
                  value={formData.fechaFin}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Hora de Inicio</Text>
              <TouchableOpacity
                style={styles.dateTimeButton}
                onPress={() => setShowDatePicker({ field: 'horaInicio', show: true })}
              >
                <Text style={styles.dateTimeButtonText}>{formData.horaInicio.toLocaleTimeString()}</Text>
              </TouchableOpacity>
              {showDatePicker.show && showDatePicker.field === 'horaInicio' && (
                <DateTimePicker
                  value={formData.horaInicio}
                  mode="time"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Hora de Fin</Text>
              <TouchableOpacity
                style={styles.dateTimeButton}
                onPress={() => setShowDatePicker({ field: 'horaFin', show: true })}
              >
                <Text style={styles.dateTimeButtonText}>{formData.horaFin.toLocaleTimeString()}</Text>
              </TouchableOpacity>
              {showDatePicker.show && showDatePicker.field === 'horaFin' && (
                <DateTimePicker
                  value={formData.horaFin}
                  mode="time"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Actividades Realizadas</Text>
              <TextInput
                style={styles.formInput}
                value={formData.actividades}
                onChangeText={(value) => handleInputChange('actividades', value)}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Recomendaciones</Text>
              <TextInput
                style={styles.formInput}
                value={formData.recomendaciones}
                onChangeText={(value) => handleInputChange('recomendaciones', value)}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Nombre (Firma)</Text>
              <TextInput
                style={styles.formInput}
                value={formData.nombreFirma}
                onChangeText={(value) => handleInputChange('nombreFirma', value)}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Teléfono (Firma)</Text>
              <TextInput
                style={styles.formInput}
                value={formData.telefonoFirma}
                onChangeText={(value) => handleInputChange('telefonoFirma', value)}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Correo (Firma)</Text>
              <TextInput
                style={styles.formInput}
                value={formData.correoFirma}
                onChangeText={(value) => handleInputChange('correoFirma', value)}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Dirección (Firma)</Text>
              <TextInput
                style={styles.formInput}
                value={formData.direccionFirma}
                onChangeText={(value) => handleInputChange('direccionFirma', value)}
              />
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleAddOrder}>
              <Text style={styles.submitButtonText}>{editingIndex !== null ? 'Guardar Cambios' : 'Guardar Orden'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowModal(false)} style={{ marginTop: 10 }}>
              <Text style={{ color: '#007bff', textAlign: 'center' }}>Cerrar</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ServiceOrdersScreen;
