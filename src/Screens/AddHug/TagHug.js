import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';

const TagHug = ({ route, navigation }) => {
  const { image, aspectRatio } = route.params;
  console.log(aspectRatio)
  const [tags, setTags] = useState('');
  const [taggedUsers, setTaggedUsers] = useState([]);

  const handleTagUser = () => {
    // Separa las etiquetas por comas y agrega usuarios a la lista de etiquetados
    const newTags = tags.split(',').map(tag => tag.trim());
    setTaggedUsers(prevTaggedUsers => [...prevTaggedUsers, ...newTags]);

    // Limpia el campo de etiquetas después de etiquetar
    setTags('');
  };

  const handleNext = () => {
    // Puedes implementar lógica adicional aquí, como enviar las etiquetas y la imagen al servidor
    // Después de completar las operaciones, navega a la siguiente pantalla o realiza otras acciones necesarias
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.imagePreview} />
      <TextInput
        style={styles.tagInput}
        placeholder="Etiquetas (separadas por comas)"
        value={tags}
        onChangeText={setTags}
      />
      <TouchableOpacity
        style={styles.tagButton}
        onPress={handleTagUser}
      >
        <Text style={styles.buttonText}>Etiquetar</Text>
      </TouchableOpacity>
      <FlatList
        data={taggedUsers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.taggedUser}>{item}</Text>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleNext}
        disabled={taggedUsers.length === 0} // Deshabilitar el botón si no hay usuarios etiquetados
      >
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  imagePreview: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    aspectRatio: 3 / 4,
  },
  tagInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  tagButton: {
    backgroundColor: '#3498db',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taggedUser: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },
});

export default TagHug;
