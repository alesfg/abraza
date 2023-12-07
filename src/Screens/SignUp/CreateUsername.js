import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CreateUsername = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Crea un nombre de usuario</Text>
      <Text style={styles.subtitle}>Introduce un nombre de usuario. Podrás cambiarlo más tarde.</Text>
      <TextInput style={styles.input} placeholder="Nombre de usuario" />
      
      <TouchableOpacity
      onPress={() => navigation.navigate("CreatePassword")}
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
