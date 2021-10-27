import React, { useState } from 'react';
import { 
  SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TextInput,
  Image, TouchableOpacity, Alert, Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

  
  const ProfilePage = ({navigation, route}: any) => {
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Edit Profile
        </Text>
        <View >
          <TouchableOpacity 
            onPress={()=> navigation.navigate("Edit Photo")}
          >
            <Image
              source={require('../assets/default_image.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>

        <Button 
          onPress={() => navigation.navigate("Edit Name")}
          title= {route?.params?.name || "Your Name"}
        />

        <Button 
          onPress={() => navigation.navigate("Edit Number")}
          title= {route?.params?.phone || "Set your Phone Number"}
        />

        <Button 
          onPress={() => navigation.navigate("Edit Email")}
          title= {route?.params?.email || "Your Email"}
        />    
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      color: '#0099FF',
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
    image: {
      width: 200,
      height: 200,
      borderRadius: 200/2,
    }
  });

export default ProfilePage;