import * as React from 'react';
import { View, TouchableOpacity, Text,Image, StyleSheet,ScrollView } from 'react-native';
import CustomTextField from '../components/CustomTextField';
import { useState } from 'react';
import Header from '../components/Header';


export default function ResetPassword() {
  const [newpass,setnewpass]= useState("");
  const [conpass,setconpass]= useState("");

return (
  <ScrollView>
  <View style={styles.container}>
    <Header
      source={require('../assets/headers/Header2.png')}
      imgWidth={430}
      imgHeight={329}
    />

    <TouchableOpacity
      style={{
        position: 'absolute',
        top: 30,
        left: 20,
        fontSize: 35,
        color: 'white',
        fontWeight: '600',
      }}
      onPress={() => alert('Back Again')}>
      <Image source={require('../assets/headers/backbutton.png')} />
    </TouchableOpacity>
    <Text
      style={{
        position: 'absolute',
        top: 130,
        fontSize: 35,
        color: 'white',
        fontWeight: '600',
      }}>
      {' '}
      Reset Password
    </Text>

  <Text style={styles.text}>You can reset you password here !</Text>
    
    <Text style={styles.fieldname}>
      New Password </Text>

    <CustomTextField placeholder="Enter your password" value={newpass} onChangeText={setnewpass} secureEntry = {true} />

          <Text style={styles.fieldname}>
      Confirm New Password </Text>

    <CustomTextField placeholder="Confirm your password" value={conpass} onChangeText={setconpass} secureEntry = {true} />

    <TouchableOpacity style={styles.button} >
      <Text style={styles.signIn}>Reset Password</Text>
    </TouchableOpacity>
  </View></ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    padding:20,
    margin:20,
    borderRadius:20,
    fontSize:15,
    textAlign:"center",
    backgroundColor:"#92EBE9",
    color:"black"
    },
  fieldname: {
    margin: 6,
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 5,
    marginTop:20,
  },
  button: {
    margin: 10,
    backgroundColor: '#2196F3',
    borderRadius: 12,
  },
  signIn: {
    margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

