import React, { useState } from 'react';
import { TextInput, Text, StyleSheet, Button, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function EditBio({navigation}: any, {route}: any) {

  const [bioText, setBioText] = useState("");
  
  return (
    <SafeAreaView style={ styles.container }>

      <Text style={ styles.title }> Tell Us A Little About Yourself! </Text>
      
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={ 5 }
        placeholder="Put Text Here."
        placeholderTextColor="#003f5c"
        value={bioText}
        onChangeText={setBioText}
      />
  
      <Pressable
            style={styles.button}
            onPress={() => {
                navigation.navigate({
                    name: ' ',
                    params: { bio: bioText },
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