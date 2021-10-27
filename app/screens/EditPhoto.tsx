import React, { useState } from 'react';
import { TextInput, StyleSheet, Button} from 'react-native';


export default function EditPhoto({navigation}: any, {route}: any) {

  const [newPhoto, setNewPhoto] = useState("");
  
  return (
    <>
      <TextInput
        style={styles.textInput}
        placeholder="Email."
        placeholderTextColor="#003f5c"
        value={newPhoto}
        onChangeText={setNewPhoto}
      />

      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: ' ',
            params: { photo: newPhoto },
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