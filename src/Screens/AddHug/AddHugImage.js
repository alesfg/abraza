import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import okman from "../../../assets/okman.png"

const AddHugImage = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [aspectRatio, setAspectRatio] = useState('3/4');

  useEffect(() => {
    requestGalleryPermission();
  }, []);

  const requestGalleryPermission = async () => {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Se necesitan permisos para acceder a la galería.');
      }
    }
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: aspectRatio === '3/4' ? [3, 4] : [1, 1], // Dinámico: 3/4 o 1/1 según el estado
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.uri);
        setAspectRatio('3/4'); // Restablecer el aspect ratio al seleccionar una nueva imagen
      }
    } catch (error) {
      console.error('Error al seleccionar una imagen:', error);
    }
  };

  const handleNext = () => {
    // Puedes implementar lógica adicional aquí, como enviar la imagen y las etiquetas al servidor
    navigation.navigate('TagHug', { image, aspectRatio });
  };

  const handleResize = () => {
    // Cambiar el aspect ratio entre 3/4 y 1/1 dinámicamente
    setAspectRatio((prevAspectRatio) => (prevAspectRatio === '3/4' ? '1/1' : '3/4'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} disabled={image == null ? true : false}>
          <Text style={styles.nextButton}>Siguiente</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={{ ...styles.imagePreview, aspectRatio }} />
        ) : (
          <Image source={okman} style={{ ...styles.imagePreview, aspectRatio }} />
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Seleccionar Imagen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resizeButton} onPress={handleResize}>
        <Ionicons name="crop" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  nextButton: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tag: {
    color: '#fff',
    backgroundColor: '#3498db',
    padding: 5,
    borderRadius: 5,
  },
  resizeButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 30,
  },
});

export default AddHugImage;
