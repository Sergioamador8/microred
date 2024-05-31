import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { login } from '../services/AuthService';
import { loginStyles } from '../styles/LoginStyles';


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Inicializa useNavigation

  const handleLogin = async () => {
    try {
      await login(username, password);
      // Redirige a la página principal después del inicio de sesión exitoso
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.title}>Iniciar sesión</Text>
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
