import React, { useState } from 'react';
import { TextInput, StyleSheet, Button} from 'react-native';


export default function EditNumber({navigation}: any, {route}: any) {

  const [phoneNumber, setPhoneNumber] = useState("");
  
  return (
    <>
      <TextInput
        style={styles.textInput}
        placeholder="Email."
        placeholderTextColor="#003f5c"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: ' ',
            params: { phone: phoneNumber },
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