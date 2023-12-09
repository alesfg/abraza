import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import SignInWithOAuth from "./SignInWithOAuth";
import bowingman from "../../assets/bowing_man.png";


const Login = ({ navigation }) => {
  const SignOut = () => {
    const { isLoaded,signOut } = useAuth();
    if (!isLoaded) {
      return null;
    }
    return (
      <View>
        <Button
          title="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <SignedIn>
        <Text style={styles.title}>Abraza</Text>
        <View style={styles.profileContainer}>
          <Image style={styles.profileImage} source={bowingman} />
        </View>
        <TextInput style={styles.input} placeholder="Nombre de usuario" />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
        />
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>
            ¿Te has olvidado de la contraseña?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <SignOut/>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.facebookButton}
        >
          <Ionicons name="logo-facebook" size={24} color="#1877F2" />
          <Text style={styles.facebookText}> Log in with Facebook</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>O</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.signUpContainer}>
          <Text>¿No tienes cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.signUpText}>Regístrate.</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footer}>Abraza</Text>
      </SignedIn>
      <SignedOut>
      <Text style={styles.title}>Abraza</Text>
        <View style={styles.profileContainer}>
          <Image style={styles.profileImage} source={bowingman} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <SignInWithOAuth />
        <Text style={styles.footer}>Abraza</Text>
      </SignedOut>
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
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  forgotPassword: {
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    color: "#0099FF",
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
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default Login;
