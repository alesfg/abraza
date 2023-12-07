import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CreateUsername = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(null);

  const checkUsernameAvailability = async () => {
    try {
      // Validar el formato del nombre de usuario
      if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        setUsernameError('Solo se permiten letras, números y guiones bajos (_).');
        return;
      }

      // Verificar si el nombre de usuario ya está en uso en la base de datos
      const snapshot = await database()
        .ref('users')
        .orderByChild('username')
        .equalTo(username)
        .once('value');

      if (snapshot.exists()) {
        setUsernameError('Nombre de usuario no disponible, elige otro.');
      } else {
        setUsernameError(null);
        navigation.navigate('Home');
        // El nombre de usuario es válido, continuar con el proceso de registro
      }
    } catch (error) {
      Alert.alert('Error', 'Error al verificar la disponibilidad del nombre de usuario');
      console.error('Error al verificar la disponibilidad del nombre de usuario', error);
    }
  };

  const handleSignup = () => {
    checkUsernameAvailability();
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Crea un nombre de usuario</Text>
      <Text style={styles.subtitle}>Introduce un nombre de usuario. Podrás cambiarlo más tarde.</Text>
      <TextInput style={[
          styles.input,
          usernameError && { borderColor: 'red' },
          !usernameError && username && { borderColor: 'green' },
        ]}
         placeholder="Nombre de usuario"
          value={username}
           onChangeText={(text) => setUsername(text)} />
            {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}
      <TouchableOpacity
      onPress={handleSignup}
      style={styles.loginButton}>
        <Text style={styles.loginText}>Siguiente</Text>
      </TouchableOpacity>
    
      <View style={styles.orContainer}>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.signUpContainer}>
        <Text>¿Ya tienes cuenta? </Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.signUpText}>Inicia sesión.</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>abraza</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "flex-start",
    textAlign: "left"
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 20,
    alignSelf: "flex-start",
    textAlign: "left"
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loginButton: {
    height: 50,
    backgroundColor: "#0099FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 20,
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  facebookText: {
    color: "#1877F2",
    fontSize: 16,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
  },
  orText: {
    width: 40,
    textAlign: "center",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  signUpText: {
    color: "#0099FF",
  },
  footer: {
    color: "gray",
    textAlign: "center",
  },
});

export default CreateUsername;
