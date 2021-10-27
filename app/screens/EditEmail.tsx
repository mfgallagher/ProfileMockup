import React, { useState } from 'react';
import { TextInput, StyleSheet, Button} from 'react-native';


export default function EditEmail({navigation}: any, {route}: any) {

  const [emailName, setEmailName] = useState("");
  
  return (
    <>
      <TextInput
        style={styles.textInput}
        placeholder="Email."
        placeholderTextColor="#003f5c"
        value={emailName}
        onChangeText={setEmailName}
      />

      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: ' ',
            params: { email: emailName },
            merge: true,
        });
      }}
    />
  </>
  );
}

const styles = StyleSheet.create({
  textInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
});