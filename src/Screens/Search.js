import React, {useState} from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { users } from "../utils/users";
import male from "../../assets/male.png";
import female from "../../assets/female.png";
import { calcularDistancia } from "../utils/mapFuncs";
import { colors } from "../utils/colors";


export default function App() {
  const [solicitudEnviada, setSolicitudEnviada] = useState([]);

  const handleAgregarAmigo = (index) => {
    // Manejar la lógica de enviar la solicitud de amistad
    // Aquí, simplemente actualizamos el estado para el índice específico
    setSolicitudEnviada([...solicitudEnviada, index]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <TextInput placeholder="Buscar usuario" style={styles.searchInput} />
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
      {users.map((user, index) => {
          const distancia = calcularDistancia(
            40.642561681018144,
            -3.999893118090497,
            user.latitude,
            user.longitude
          );

          const isSolicitudEnviada = solicitudEnviada.includes(index);
          return (
            <View key={index} style={styles.userContainer}>
              <View style={styles.userImageContainer}>
                <Image
                  source={user.gender === "male" ? male : female}
                  alt={user.name}
                  style={styles.userImage}
                />
              </View>
              <View style={styles.userInfoContainer}>
                <Text style={styles.username}>{user.username}</Text>
                <Text style={styles.name}>{user.name}</Text>
              </View>
              <View style={styles.distanceContainer}>
                <Text style={styles.distance}>{`${distancia} m`}</Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.addButton,
                  isSolicitudEnviada && styles.solicitudEnviadaButton,
                ]}
                onPress={() => handleAgregarAmigo(index)}
                disabled={isSolicitudEnviada}
              >
                <Text style={styles.addButtonLabel}>
                  {isSolicitudEnviada ? "Solicitud enviada" : "Añadir amigo"}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d3d3d3",
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#f1f1f1",
  },
  grid: {
    flexDirection: "column",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d3d3d3",
  },
  userImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    marginRight: 10,
  },
  userImage: {
    width: "100%",
    height: "100%",
  },
  userInfoContainer: {
    flex: 1,
  },
  username: {
    fontWeight: "bold",
  },
  name: {
    color: "#888",
  },
  distanceContainer: {
    marginRight: 10,
  },
  distance: {
    color: "#888",
  },
  addButton: {
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 5,
  },
  addButtonLabel: {
    color: "#fff",
  },
  solicitudEnviadaButton: {
    backgroundColor: colors.ok
  },

});
