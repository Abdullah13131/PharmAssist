import * as React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import CustomTextField from "../components/CustomTextField";
import { useState } from 'react';
import Header from '../components/Header';
import { launchImageLibrary } from 'react-native-image-picker'
ImagePicker = require('react-native-image-picker');

export default function AddMiddleMan() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [companies, setCompanies] = useState([]);
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
          <Image source={require('../assets/headers/backbutton.png')} />
        </TouchableOpacity>
        <Text
          style={{
            position: 'absolute',
            top: 118,
            fontSize: 35,
            color: 'white',
            fontWeight: '600',
          }}> Add Middleman
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
                    <Image resizeMode='contain' style={{ width: 150, height: 150, borderRadius:75 }} source={{ uri: imagetaken }}></Image>
                  </View>
                ) : <View>
                  <Image
                    source={require('../assets/uiassets/Profilepic.png')}
                    style={{ width: 190, height: 190 }}
                  /></View>
            }
          </TouchableOpacity>
        </View>

        <Text style={styles.fieldname}>
          Name <Text style={{ color: 'red' }}>*</Text>
        </Text>

        <CustomTextField
          value={name}
          onChangeText={setName}
          placeHolder={"Enter Name"}
        />

        <Text style={styles.fieldname}>
          Email Address <Text style={{ color: 'red' }}>*</Text>
        </Text>

        <CustomTextField value={email} onChangeText={setEmail} placeHolder={"Enter Email"} />

        <Text style={styles.fieldname}>Contact</Text>

        <CustomTextField value={contact} onChangeText={setContact} placeHolder={"Enter Contact Number"} />

        <Text style={styles.fieldname}>
          Companies <Text style={{ color: 'red' }}>*</Text>
        </Text>

        <CustomTextField value={companies} onChangeText={setCompanies} placeHolder={"Enter Companies Names (Separate by ,)"} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.signIn}>Add Middleman</Text>
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
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 5,
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