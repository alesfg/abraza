import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import * as Location from "expo-location";
import MapView, { PROVIDER_GOOGLE, MarkerAnimated } from "react-native-maps";
import { markers } from "../utils/markers";
import { calcularDistancia, encontrarUsuariosCercanos } from "../utils/mapFuncs";

const Map = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const mapViewRef = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(encontrarUsuariosCercanos(location, markers, 5000))
      
      const subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,
          distanceInterval: 10,
        },
        (location) => {
          console.log("Real-time Location:", location);
          // Aquí puedes enviar la ubicación a otros usuarios o hacer lo que necesites
        }
      );

      // Para detener la suscripción cuando ya no sea necesario
      // subscription.remove();
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  const INITIAL_REGION = {
    latitude: 40.634160000913,
    longitude: -4.004037794189378,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}> 
      {location && (
          <MapView
            ref={mapViewRef}
            showsUserLocation
            showsMyLocationButton
            style={{flex: 1}}
            provider={PROVIDER_GOOGLE}
            initialRegion={INITIAL_REGION}
            onLayout={() => {
              if (location && mapViewRef.current) {
                mapViewRef.current.animateToRegion({
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                });
              }
            }}
          >
            {markers.map((marker, index)=>(
              <MarkerAnimated key={index} coordinate={marker} title={marker.name} />
            ))}
            </MapView>
        )}
      </View>
    </SafeAreaView>
  );
}

export default Map


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
  map: {
    width: 300,
    height: 300,  
  },
});
