import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const FechaNacimiento = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [age, setAge] = useState(0);

  const calculateAge = (birthDate) => {
    const currentDate = new Date();
    const birthDateObj = new Date(birthDate);
    let age = currentDate.getFullYear() - birthDateObj.getFullYear();
    
    // Check if the birthday has occurred this year
    if (
      currentDate.getMonth() < birthDateObj.getMonth() ||
      (currentDate.getMonth() === birthDateObj.getMonth() &&
        currentDate.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }

    return age;
  };


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    const calculatedAge = calculateAge(currentDate);
    setAge(calculatedAge);
  };

  const showDatepicker = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>¿Cúal es tu fecha de nacimiento?</Text>

      <View style={styles.orContainer}>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.signUpContainer}>
        <TouchableOpacity
            onPress={showDatepicker}
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>Elegir fecha</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>Siguiente</Text>
          </TouchableOpacity>
        <Text>selected: {date?.toLocaleDateString()}</Text>
        {age !== undefined && <Text>Edad: {age}</Text>}

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
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "flex-start",
    textAlign: "left",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 20,
    alignSelf: "flex-start",
    textAlign: "left",
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
    flexDirection: "column",
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
    flexDirection: "column",
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

export default FechaNacimiento;
