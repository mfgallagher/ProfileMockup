import React, { useState } from 'react';
import {
  TextInput, StyleSheet, SafeAreaView, Text, View, Pressable
} from 'react-native';


export default function EditName({navigation}: any, {route}: any) {

  const [nameText, setNameText] = useState("");
  
  return (
    <SafeAreaView style={ styles.container }>

      <Text style={ styles.title }> What's Your Name? </Text>
      
      <TextInput
        style={styles.textInput}
        placeholder="Enter Name Here."
        placeholderTextColor="#003f5c"
        value={nameText}
        onChangeText={setNameText}
      />
  
      <Pressable
            style={styles.button}
            onPress={() => {
                navigation.navigate({
                    name: ' ',
                    params: { name: nameText },
                    merge: true,
                });
            }}
        >
            <Text style={ styles.buttonText }> Update </Text>
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
  },
  textInput: {
      height: 50,
      padding: 10,
      marginTop: 80,
      alignContent: "center",

  },
  button: {
      paddingVertical: 10,
      paddingHorizontal: 32,
      elevation: 3,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#7a42f4',
  },
  buttonText: {
      color: '#ffffff',
      fontSize: 18,
  },
  title: {
      fontSize: 24,
      fontWeight: "bold",
      color: '#7a42f4',
  },
});