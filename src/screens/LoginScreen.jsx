import React from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo.png'; // Ajusta la ruta de la imagen según tu estructura de archivos

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Lógica de inicio de sesión (simulada)
    console.log('Inicio de sesión exitoso');
    // Navega a la página principal después del inicio de sesión
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    color: 'white',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
