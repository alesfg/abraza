import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TaggedImagePreview = ({ image, onNextPress }) => {
  const [tags, setTags] = useState([]);

  const handleTagPress = (tag) => {
    // Aquí puedes implementar la lógica para manejar la presión en una etiqueta
    console.log('Etiqueta presionada:', tag);
  };

  const removeTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const renderTags = () => {
    return tags.map((tag, index) => (
      <TouchableOpacity
        key={index}
        style={styles.tag}
        onPress={() => handleTagPress(tag)}
        onLongPress={() => removeTag(index)}
      >
        <Text style={styles.tagText}>@Usuario</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      {image && (
        <View>
          <Image source={{ uri: image }} style={styles.imagePreview} />
          {renderTags()}
        </View>
      )}
      <TouchableOpacity style={styles.nextButton} onPress={onNextPress}>
        <Text style={styles.nextButtonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    aspectRatio: '3/4',
  },
  nextButton: {
    backgroundColor: '#3498db',
    padding: 16,
    alignItems: 'center',
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tag: {
    backgroundColor: '#3498db',
    padding: 5,
    borderRadius: 5,
    margin: 5,
  },
  tagText: {
    color: '#fff',
  },
});

export default TaggedImagePreview;
