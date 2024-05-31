export const login = async (username, password) => {
    try {
      // Este es un ejemplo que invesitigue de la lógica para enviar solicitud de inicio de sesión al backend
      const response = await fetch('URL_DEL_BACKEND/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (!response.ok) {
        throw new Error('Credenciales incorrectas');
      }
  
      const data = await response.json();
      // Lógica para guardar el token de sesión o realizar otras acciones después del inicio de sesión
      console.log('Inicio de sesión exitoso:', data);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
 
  