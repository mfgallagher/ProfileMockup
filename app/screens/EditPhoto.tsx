import React, { useState } from 'react';
import {
   TextInput, StyleSheet, Button, TouchableOpacity, Image, 
   SafeAreaView, Pressable, Text
  } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';


export default function EditPhoto({navigation}: any, {route}: any) {

  const [selectedImage, setSelectedImage] = useState("");

  //image picker; prompts permission from user and then launches images 
  // library
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    const { uri } = pickerResult as ImageInfo;

    setSelectedImage(uri);
  }
  if(!selectedImage) {
    return (
      <SafeAreaView style={ styles.container }>
        <Text style={ styles.title }> Upload a Photo! </Text>

        <TouchableOpacity 
          onPress={openImagePickerAsync}
        >
          <Image
            source={ require('../assets/default_image.png') }
            style={ styles.image }
          />
        </TouchableOpacity>

        <Pressable
            style={styles.button}
            onPress={() => {
                navigation.navigate({
                    name: ' ',
                    params: { photo: selectedImage },
                    merge: true,
                });
            }}
        >
            <Text style={ styles.buttonText }> Update </Text>
        </Pressable>
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={ styles.container }>
        <TouchableOpacity 
          onPress={openImagePickerAsync}
        >
          <Image
            source={ {uri: selectedImage } }
            style={ styles.image }
          />
        </TouchableOpacity>

        <Pressable
            style={styles.button}
            onPress={() => {
                navigation.navigate({
                    name: ' ',
                    params: { photo: selectedImage },
                    merge: true,
                });
            }}
        >
            <Text style={ styles.buttonText }> Update </Text>
        </Pressable>
      </SafeAreaView> 
    )
  }
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#7a42f4',
  },
  textInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 32,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7a42f4',
    marginTop: 100,
  },
  buttonText: {
      color: '#ffffff',
      fontSize: 18,
  },
  image: {
      paddingVertical: 20,
      width: 300,
      height: 300,
      marginTop: 25
  }
});