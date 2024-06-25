import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal } from 'react-native';

const ProductsScreen = () => {
  const [showModal, setShowModal] = useState(false);
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
  const [editingIndex, setEditingIndex] = useState(null);
  const [data, setData] = useState([
    { codigo: '001', unidad: 'pz', nombre: 'Smartphone', precio: '$300', stock: '50', proveedor: 'Proveedor A' },
    { codigo: '002', unidad: 'pz', nombre: 'Laptop', precio: '$700', stock: '30', proveedor: 'Proveedor B' },
    { codigo: '003', unidad: 'pz', nombre: 'Tablet', precio: '$200', stock: '100', proveedor: 'Proveedor C' },
  ]);

  const handleInputChange = (name, value) => {
    // Validar campos numéricos y de precio
    if (['precio', 'puntoPedido', 'stockInicial', 'stockMinimo', 'codigoSat', 'SKU'].includes(name)) {
      const numberRegex = /^[0-9]*$/;
      if (!numberRegex.test(value)) return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddProduct = () => {
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
    setEditingIndex(null);
    setShowModal(false);
  };

  const handleEditProduct = (index) => {
    const product = data[index];
    setFormData(product);
    setEditingIndex(index);
    setShowModal(true);
  };

  const handleDeleteProduct = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const tableHead = ['Código', 'Unidad', 'Nombre', 'Precio', 'Stock', 'Proveedor', 'Acciones'];

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
    modalContent: { width: '95%', padding: 20, backgroundColor: '#fff', borderRadius: 10 },
    formField: { marginBottom: 10 },
    formLabel: { fontSize: 16, marginBottom: 5 },
    formInput: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 5 },
    submitButton: { marginTop: 10, padding: 10, backgroundColor: '#28a745', borderRadius: 5 },
    submitButtonText: { color: '#fff', textAlign: 'center' },
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Listado de Productos</Text>
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
                <TouchableOpacity style={styles.editButton} onPress={() => handleEditProduct(rowIndex)}>
                  <Text style={styles.editButtonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteProduct(rowIndex)}>
                  <Text style={styles.deleteButtonText}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={() => setShowModal(true)}>
        <Text style={styles.addButtonText}>Agregar Producto</Text>
      </TouchableOpacity>

      <Modal visible={showModal} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.title}>{editingIndex !== null ? 'Editar Producto' : 'Nuevo Producto'}</Text>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Categoría</Text>
              <TextInput
                style={styles.formInput}
                value={formData.categoria}
                onChangeText={(value) => handleInputChange('categoria', value)}
                placeholder="Categoría del Producto"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Nombre</Text>
              <TextInput
                style={styles.formInput}
                value={formData.nombre}
                onChangeText={(value) => handleInputChange('nombre', value)}
                placeholder="Nombre del Producto"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Descripción</Text>
              <TextInput
                style={styles.formInput}
                value={formData.descripcion}
                onChangeText={(value) => handleInputChange('descripcion', value)}
                placeholder="Descripción del Producto"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Precio</Text>
              <TextInput
                style={styles.formInput}
                value={formData.precio}
                onChangeText={(value) => handleInputChange('precio', value)}
                keyboardType="numeric"
                placeholder="Precio del Producto"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Modelo</Text>
              <TextInput
                style={styles.formInput}
                value={formData.modelo}
                onChangeText={(value) => handleInputChange('modelo', value)}
                placeholder="Modelo del Producto"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Unidad</Text>
              <TextInput
                style={styles.formInput}
                value={formData.unidad}
                onChangeText={(value) => handleInputChange('unidad', value)}
                placeholder="Unidad de Medida"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Proveedor</Text>
              <TextInput
                style={styles.formInput}
                value={formData.proveedor}
                onChangeText={(value) => handleInputChange('proveedor', value)}
                placeholder="Proveedor del Producto"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Categoría de Fábrica</Text>
              <TextInput
                style={styles.formInput}
                value={formData.categoriaFabrica}
                onChangeText={(value) => handleInputChange('categoriaFabrica', value)}
                placeholder="Categoría de Fábrica"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Marca</Text>
              <TextInput
                style={styles.formInput}
                value={formData.marca}
                onChangeText={(value) => handleInputChange('marca', value)}
                placeholder="Marca del Producto"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>SKU</Text>
              <TextInput
                style={styles.formInput}
                value={formData.SKU}
                onChangeText={(value) => handleInputChange('SKU', value)}
                placeholder="SKU del Producto"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Punto de Pedido</Text>
              <TextInput
                style={styles.formInput}
                value={formData.puntoPedido}
                onChangeText={(value) => handleInputChange('puntoPedido', value)}
                keyboardType="numeric"
                placeholder="Punto de Pedido"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Stock Inicial</Text>
              <TextInput
                style={styles.formInput}
                value={formData.stockInicial}
                onChangeText={(value) => handleInputChange('stockInicial', value)}
                keyboardType="numeric"
                placeholder="Stock Inicial"
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Stock Mínimo</Text>
              <TextInput
                style={styles.formInput}
                value={formData.stockMinimo}
                onChangeText={(value) => handleInputChange('stockMinimo', value)}
                keyboardType="numeric"
                placeholder="Stock Mínimo"
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
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Unidad SAT</Text>
              <TextInput
                style={styles.formInput}
                value={formData.unidadSat}
                onChangeText={(value) => handleInputChange('unidadSat', value)}
                placeholder="Unidad SAT"
              />
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleAddProduct}>
              <Text style={styles.submitButtonText}>{editingIndex !== null ? 'Actualizar Producto' : 'Guardar Producto'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setShowModal(false); setEditingIndex(null); }} style={{ marginTop: 10 }}>
              <Text style={{ color: '#007bff', textAlign: 'center' }}>Cerrar</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ProductsScreen;
