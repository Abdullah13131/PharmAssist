import * as React from 'react';
import { View, TouchableOpacity, Text,Image, StyleSheet,ScrollView } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';

export default function ViewMiddleman(){

    return(
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
            Forget Password
        </Text>
        
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


