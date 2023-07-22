import * as React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import CustomTextField from "../components/CustomTextfield";
import { useState } from 'react';
import Header from '../components/Header';

export default function ViewMiddlemanProfile() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('')
  const [contact, setcontact] = useState('');
  const [companies, setcompanies] = useState([]);


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
            top: 50,
            left: 20,
            fontSize: 35,
            color: 'white',
            fontWeight: '600',
          }}
          onPress={() => alert('Back Again')}>
          <Image source={require('../assets/uiassets/backbutton.png')} />
        </TouchableOpacity>
        <Text
          style={{
            position: 'absolute',
            top: 118,
            fontSize: 35,
            color: 'white',
            fontWeight: '600',
          }}>Spicific Middleman
        </Text>
        <View>
          <View
            style={{
              marginTop: -120,
              marginBottom: 50,
              borderWidth: 3,
              borderColor: '#37B0F7',
              borderRadius: 75,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 150,
              height: 150,
              alignSelf: 'center',
            }}>
                    <Image
                  resizeMode='contain'
                    source={require('../assets/headers/Profilepic.png')}
                    style={{width:150, height:150, backgroundColor:'green', borderRadius:200 }}
                  />
                  <TouchableOpacity style={{ marginLeft:80,marginTop:-54,width:55,height:55, backgroundColor:"#37b0f7", borderRadius:110, alignSelf:'center',alignItems:"center", justifyContent:"center"}}>
                    <Icon name="plus" size={40} color="#fff"/>
                        </TouchableOpacity>

          </View>
        </View>

        <Text style={styles.fieldname}>
          Name <Text style={{ color: 'red' }}>*</Text>
        </Text>

        <CustomTextField
            color={'black'}
          value={name}
          onChangeText={setname}
          placeHolder={"Enter Your Name"}
        />
        <Text style={styles.fieldname}>
          Email <Text style={{ color: 'red' }}>*</Text>
        </Text>

        <CustomTextField
          color={'black'}
          value={email}
          onChangeText={setemail}
          placeHolder={"Enter Your Email"}
        />

        <Text style={styles.fieldname}>
          Contact <Text style={{ color: 'red' }}>*</Text>
        </Text>

        <CustomTextField
          color={'black'}
          value={contact}
          onChangeText={setcontact}
          placeHolder={"Enter Contact Number"}
        />

        <Text style={styles.fieldname}>Companies</Text><Text style={{ color: 'red' }}>*</Text>

        <CustomTextField 
         color={'black'}
         value={companies} 
         onChangeText={setcompanies} 
         placeHolder={"Enter Cpmanies(Seperated by ,)"} />
      </View></ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fieldname: {
    margin: 4,
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 5,
    color:'black'
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