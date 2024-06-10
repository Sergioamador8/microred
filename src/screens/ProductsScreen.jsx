import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const ProductsScreen = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    categoria: '',
    nombre: '',
    descripcion: '',
    precio: '',
    modelo: '',
    unidad: '',
    proveedor: '',
    categoriaFabrica: '',
    marca: '',
    SKU: '',
    puntoPedido: '',
    stockInicial: '',
    stockMinimo: '',
    codigoSat: '',
    unidadSat: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddProduct = () => {
    // Aquí puedes manejar el envío del formulario, por ejemplo, guardarlo en una base de datos.
    console.log(formData);
    setShowForm(false);
  };

  const tableHead = ['Código', 'Unidad', 'Nombre', 'Precio', 'Stock', 'Proveedor'];
  const tableData = [
    ['001', 'kg', 'Manzanas', '$2.50', '100', 'Proveedor A'],
    ['002', 'lt', 'Leche', '$1.20', '50', 'Proveedor B'],
    ['003', 'pz', 'Pan', '$0.80', '200', 'Proveedor C'],
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
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Listado de Productos</Text>
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
        <Text style={styles.addButtonText}>Agregar Producto</Text>
      </TouchableOpacity>
      {showForm && (
        <View style={styles.formContainer}>
          <Text style={styles.title}>Nuevo Producto</Text>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Categoría</Text>
            <TextInput
              style={styles.formInput}
              value={formData.categoria}
              onChangeText={(value) => handleInputChange('categoria', value)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Nombre</Text>
            <TextInput
              style={styles.formInput}
              value={formData.nombre}
              onChangeText={(value) => handleInputChange('nombre', value)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Descripción</Text>
            <TextInput
              style={styles.formInput}
              value={formData.descripcion}
              onChangeText={(value) => handleInputChange('descripcion', value)}
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
            <Text style={styles.formLabel}>Modelo</Text>
            <TextInput
              style={styles.formInput}
              value={formData.modelo}
              onChangeText={(value) => handleInputChange('modelo', value)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Unidad</Text>
            <TextInput
              style={styles.formInput}
              value={formData.unidad}
              onChangeText={(value) => handleInputChange('unidad', value)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Proveedor</Text>
            <TextInput
              style={styles.formInput}
              value={formData.proveedor}
              onChangeText={(value) => handleInputChange('proveedor', value)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Categoría de Fábrica</Text>
            <TextInput
              style={styles.formInput}
              value={formData.categoriaFabrica}
              onChangeText={(value) => handleInputChange('categoriaFabrica', value)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Marca</Text>
            <TextInput
              style={styles.formInput}
              value={formData.marca}
              onChangeText={(value) => handleInputChange('marca', value)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>SKU</Text>
            <TextInput
              style={styles.formInput}
              value={formData.SKU}
              onChangeText={(value) => handleInputChange('SKU', value)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Punto de Pedido</Text>
            <TextInput
              style={styles.formInput}
              value={formData.puntoPedido}
              onChangeText={(value) => handleInputChange('puntoPedido', value)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Stock Inicial</Text>
            <TextInput
              style={styles.formInput}
              value={formData.stockInicial}
              onChangeText={(value) => handleInputChange('stockInicial', value)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Stock Mínimo</Text>
            <TextInput
              style={styles.formInput}
              value={formData.stockMinimo}
              onChangeText={(value) => handleInputChange('stockMinimo', value)}
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
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Unidad SAT</Text>
            <TextInput
              style={styles.formInput}
              value={formData.unidadSat}
              onChangeText={(value) => handleInputChange('unidadSat', value)}
            />
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={handleAddProduct}>
            <Text style={styles.submitButtonText}>Guardar Producto</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowForm(false)} style={{ marginTop: 10 }}>
            <Text style={{ color: '#007bff', textAlign: 'center' }}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar Producto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Eliminar Producto</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductsScreen;
