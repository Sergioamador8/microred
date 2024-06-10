import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ServiceOrdersScreen = () => {
  const [showForm, setShowForm] = useState(false);
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
    // Aquí puedes manejar el envío del formulario, por ejemplo, guardarlo en una base de datos.
    console.log(formData);
    setShowForm(false);
  };

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
    formContainer: { marginTop: 20, padding: 10, borderWidth: 1, borderColor: '#c8e1ff', borderRadius: 5 },
    formField: { marginBottom: 10 },
    formLabel: { fontSize: 16, marginBottom: 5 },
    formInput: { borderWidth: 1, borderColor: '#c8e1ff', padding: 8, borderRadius: 5 },
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
      {tableData.map((rowData, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {rowData.map((cellData, cellIndex) => (
            <Text key={cellIndex} style={styles.cell}>{cellData}</Text>
          ))}
        </View>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={() => setShowForm(true)}>
        <Text style={styles.addButtonText}>Agregar Orden</Text>
      </TouchableOpacity>
      {showForm && (
        <View style={styles.formContainer}>
          <Text style={styles.title}>Orden de Servicio</Text>
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
            <Text style={styles.submitButtonText}>Guardar Orden</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowForm(false)} style={{ marginTop: 10 }}>
            <Text style={{ color: '#007bff', textAlign: 'center' }}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      )}
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
