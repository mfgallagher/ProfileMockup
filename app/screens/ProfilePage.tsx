import React, { useState } from 'react';
import { 
  SafeAreaView, View, StyleSheet, Text, StatusBar, Image, 
  TouchableOpacity, Button, Pressable
} from 'react-native';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';

  
  const ProfilePage = ({ navigation, route }: any) => {
    let imgSrc: any;

    if(route.params.photo) {
      imgSrc = {uri: route.params.photo as ImageInfo};
    } else {
      imgSrc = require('../assets/default_image.png')
    }

    return (
      <SafeAreaView style={ styles.container }>
        <Text style={ styles.title }>
          Edit Profile
        </Text>

        <View>
          <TouchableOpacity 
            onPress={ ()=> navigation.navigate("Edit Photo") }
          >
            <Image
              source={ imgSrc }
              style={ styles.image }
            />
          </TouchableOpacity>
        </View>

        <Pressable
          style={ styles.button }
          onPress={ () => navigation.navigate("Edit Name") } >
            <Text style={ styles.text }> { route?.params?.name || "Name" } </Text>
        </Pressable>

        <Pressable
          style={ styles.button }
          onPress={ () => navigation.navigate("Edit Number") } >
            <Text style={ styles.text }> { route?.params?.phone || "Phone Number" } </Text>
        </Pressable>

        <Pressable
          style={ styles.button }
          onPress={ () => navigation.navigate("Edit Email") } >
            <Text style={ styles.text }> { route?.params?.email || "Email" } </Text>
        </Pressable>

        <Pressable
          style={ styles.button }
          onPress={ () => navigation.navigate("Edit Bio") } >
            <Text style={ styles.text }> { route?.params?.bio || "Bio" } </Text>
        </Pressable>

      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute'
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: '#0099FF',
        marginTop: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 32,
        width: 400,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        marginTop: 50
    },
    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    text: {
        textAlign: 'left',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 200/2,
    }
  });

export default ProfilePage;