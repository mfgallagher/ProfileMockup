import React, { useState } from 'react';
import { TextInput, StyleSheet, Button} from 'react-native';


export default function EditName({navigation}: any, {route}: any) {

  const [nameText, setNameText] = useState("");
  
  return (
    <>
      <TextInput
        style={styles.textInput}
        placeholder="Name."
        placeholderTextColor="#003f5c"
        value={nameText}
        onChangeText={setNameText}
      />

      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: ' ',
            params: { name: nameText },
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