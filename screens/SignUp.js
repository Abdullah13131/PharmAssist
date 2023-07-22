import * as React from 'react';
import { Text, View, TouchableOpacity,ScrollView, StyleSheet } from 'react-native';
import CustomTextField from '../components/CustomTextField';
import { useState } from 'react';
import Header from '../components/Header';

export default function App() {

    const [fname,setfname] = useState('');
    const [lname,setlname] = useState('');
    const [email,setemail] = useState('');
    const [pass,setPass] = useState('');
    const [conpass,setconpass] = useState('');

  return (
      <ScrollView horizontal>
        <View style={styles.container}>

      <Header source={require("../assets/headers/Header2.png")} imgWidth={430} imgHeight={329}/>
              
      <Text style={{position:"absolute", top: 118, fontSize: 35, color:"white", fontWeight:"600"}}> Create Account</Text>

      
      <Text style={styles.fieldname}>First Name <Text style={{color:"red"}}>*</Text></Text>

      <CustomTextField value={fname} onChangeText={setfname} placeHolder="Enter your First Name" />

      <Text style={styles.fieldname}>Last Name <Text style={{color:"red"}}>*</Text></Text>

      <CustomTextField value={lname} onChangeText={setlname} placeHolder="Enter your Last Name"/>

      <Text style={styles.fieldname}>Email <Text style={{color:"red"}}>*</Text></Text>

      <CustomTextField value={email} onChangeText={setemail} placeHolder="Enter your Username"/>

      <Text style={styles.fieldname}>Password <Text style={{color:"red"}}>*</Text></Text>

      <CustomTextField secureEntry = {true} value={pass} onChangeText={setPass} placeHolder="Enter your Password"/>

      <Text style={styles.fieldname}>Confirm Password <Text style={{color:"red"}}>*</Text></Text>

      <CustomTextField secureEntry= {true} value={conpass} onChangeText={setconpass} placeHolder="Confirm Your Password"/>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.signIn}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.signUp}>
        Already have an account?
        <TouchableOpacity>
          <Text style={styles.signUp}> Sign In</Text>
        </TouchableOpacity>
      </Text>
    </View></ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fieldname: {
    margin: 4,
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft:5

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
  signUp: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});