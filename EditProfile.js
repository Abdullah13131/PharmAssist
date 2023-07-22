import * as React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import CustomTextField from "../components/Textfield";
import { useState } from 'react';
import Header from '../components/Header';
import { launchImageLibrary } from 'react-native-image-picker'
ImagePicker = require('react-native-image-picker');
import Icon from 'react-native-vector-icons/FontAwesome';
DeleteIcon = <Icon name="plus" size={40} color="#37b0f7"/>

export default function EditProfile() {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('')
  const [email, setemail] = useState('')
  const [contact, setContact] = useState('');
  const [imagetaken, setimagetaken] = useState("");
  const [fileimg, setfileimg] = useState(false);


  // Launch Gallery
  imageGalleryLaunch = () => {

    //console.log("asdasd")
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (res) => {
      //console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = { uri: res.uri };
        //console.log('response', JSON.stringify(res));
        filePath = res,
          fileData = res.data,
          fileUri = res.uri
        setimagetaken(res.assets[0].uri)
        setfileimg(true)
      }
    });
  }

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
          }}> Edit Profile
        </Text>
        <View>
          <TouchableOpacity
            onPress={() => { imageGalleryLaunch() }}
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
            {
              fileimg ?
                (
                    <View>
                        <Image resizeMode='contain' style={{width:150, height:150, backgroundColor:'green', borderRadius:200 }} source={{ uri: imagetaken }}></Image>
                        <TouchableOpacity onPress={() => { imageGalleryLaunch() }} style={{ marginLeft:80,marginTop:-54,width:55,height:55, backgroundColor:"#37b0f7", borderRadius:110, alignSelf:'center',alignItems:"center", justifyContent:"center"}}>
                        <Icon name="plus" size={40} color="#fff"/>
                            </TouchableOpacity>
                    </View>
                ) : 
                  <View>
                    <Image
                  resizeMode='contain'
                    source={require('../assets/headers/profilepic.jpg')}
                    style={{width:150, height:150, backgroundColor:'green', borderRadius:200 }}
                  />
                  <TouchableOpacity onPress={() => { imageGalleryLaunch() }} style={{ marginLeft:80,marginTop:-54,width:55,height:55, backgroundColor:"#37b0f7", borderRadius:110, alignSelf:'center',alignItems:"center", justifyContent:"center"}}>
                    <Icon name="plus" size={40} color="#fff"/>
                        </TouchableOpacity>
                  </View>
            }
          </TouchableOpacity>
        </View>

        <Text style={styles.fieldname}>
          First Name <Text style={{ color: 'red' }}>*</Text>
        </Text>

        <CustomTextField
            color={'black'}
          value={fname}
          onChangeText={setfname}
          placeHolder={"Enter First Name"}
        />
        <Text style={styles.fieldname}>
          Last Name <Text style={{ color: 'red' }}>*</Text>
        </Text>

        <CustomTextField
        color={'black'}
          value={lname}
          onChangeText={setlname}
          placeHolder={"Enter Last Name"}
        />

        <Text style={styles.fieldname}>
          Email <Text style={{ color: 'red' }}>*</Text>
        </Text>

        <CustomTextField
        color={'black'}
          value={email}
          onChangeText={setemail}
          placeHolder={"Enter Email Address"}
        />

        <Text style={styles.fieldname}>Contact Number</Text>

        <CustomTextField color={'black'} value={contact} onChangeText={setContact} placeHolder={"Enter Contact Number"} />

        <TouchableOpacity onPress={()=>{alert("Update Button Pressed")}} style={styles.button}>
          <Text style={styles.signIn}>Update Profile</Text>
        </TouchableOpacity>
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