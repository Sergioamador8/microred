// src/components/CustomTable.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomTable = ({ data }) => {
  return (
    <View style={styles.table}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Hora</Text>
        <Text style={styles.tableHeaderText}>Cliente</Text>
        <Text style={styles.tableHeaderText}>Actividad</Text>
      </View>
      {data.map((item) => (
        <View key={item.id} style={styles.tableRow}>
          <Text style={styles.tableCell}>{item.hora}</Text>
          <Text style={styles.tableCell}>{item.cliente}</Text>
          <Text style={styles.tableCell}>{item.actividad}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderWidth: 1,
    borderColor: 'black',
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
});

export default CustomTable;
