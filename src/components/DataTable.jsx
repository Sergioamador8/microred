// src/components/DataTable.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const DataTable = ({ data }) => {
  const tableHead = ['Hora', 'Cliente', 'Actividad'];
  const tableData = data.map(item => [item.hora, item.cliente, item.actividad]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={styles.tableBorder}>
            <Row data={tableHead} style={styles.head} textStyle={styles.text} />
            <Rows data={tableData} textStyle={styles.text} />
          </Table>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f1f1' },
  text: { margin: 6, textAlign: 'center' },
  tableBorder: { borderWidth: 1, borderColor: '#c8e1ff' },
});

export default DataTable;
