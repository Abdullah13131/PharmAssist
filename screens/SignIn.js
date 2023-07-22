import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import CustomTextField from '../components/CustomTextField';
import Header from '../components/Header';
import CheckBox from '@react-native-community/checkbox';


export default function App() {

    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [isSelected, setSelection] = useState(false);


  return (
    <View style={styles.container}>

      <Header source={require("../assets/headers/LoginHeader.png")} imgWidth={430} imgHeight={349}/>

      <Text style={styles.fieldname}>Email Address</Text>

      <CustomTextField value={email} onChangeText={setEmail} placeHolder="Enter Email Address" />

      <Text style={styles.fieldname}>Password</Text>

      <CustomTextField secureEntry = {true} value={pass} onChangeText={setPass} placeHolder="Enter Your Password" />

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

       <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={{fontSize: 12,marginTop:6
    }}>Remember Me</Text>
    </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.signIn}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.signUp}>
        Don't have an account?
        <TouchableOpacity>
              <Text style={styles.signUp}> Sign Up</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fieldname: {
    margin: 8,
    fontSize: 12,
    fontWeight: 'bold',
  },
  forgot: {
    paddingRight: 25,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom:50
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
  checkboxContainer: {
    flexDirection: "row",
    marginLeft:10,
    
  },
  checkbox: {
    alignSelf: "center"
    
  }
});