import React, { useState, useEffect } from 'react';
import { View, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const ImageAttachment = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Check and request permissions when the component mounts
    checkAndRequestPermissions();
  }, []);

  const checkAndRequestPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      console.log('Permissions granted');
    } else {
      console.log('Permissions denied');
    }
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <View style={{ alignItems: 'center' }}>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200, marginBottom: 20 }}
        />
      )}
      <Button title="Select Image" onPress={selectImage} />
    </View>
  );
};

export default ImageAttachment;
