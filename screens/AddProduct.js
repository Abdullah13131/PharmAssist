import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import CustomTextField from './components/CustomTextField';
import { useState } from 'react';
import Header from './components/Header';
import {launchImageLibrary} from 'react-native-image-picker';
ImagePicker = require('react-native-image-picker');

export default function App() {
  const [name, setname] = useState('');
  const [cat, setcat] = useState('');
  const [man, setman] = useState('');
  const [mfg, setmfg] = useState('');
  const [expiry, setexpiry] = useState('');
  const [des, setdes] = useState('');
  const [imagetaken ,setimagetaken] = useState("")
  const [fileimg ,setfileimg] = useState(false)
  
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
          filePath= res,
          fileData= res.data,
          fileUri= res.uri
          setimagetaken(res.assets[0].uri)
          setfileimg(true)
      }
    });
  }  
  // Launch Camera
  cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (res) => {
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
        console.log('response', JSON.stringify(res));
          filePath =res,
          fileData= res.data,
          fileUri=res.uri
          
          setimagetaken(res.assets[0].uri)
          setfileimg(true)
      }
    });
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Header
        source={require('./assets/icons/Header1.png')}
        imgWidth={430}
        imgHeight={379}
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
        <Image source={require('../assets/icons/backbutton.png')} />
      </TouchableOpacity>
      <Text
        style={{
          position: 'absolute',
          top: 100,
          fontSize: 35,
          color: 'white',
          fontWeight: '600',
        }}>
        {' '}
        Add Product
      </Text>
       <TouchableOpacity
        style={{
          marginTop: -120,
          marginBottom: 50,
          borderWidth: 3,
          borderColor: '#000000',
          borderRadius: 75,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          width: 150,
          height: 150,
          alignSelf: 'center',
        }}>
        <Image
          source={require('./assets/icons/QRCode.png')}
          style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>

      <Text style={styles.fieldname}>
        Product Name <Text style={{ color: 'red' }}>*</Text>
      </Text>

      <CustomTextField value={name} onChangeText={setname} />

      <Text style={styles.fieldname}>
        Product Category <Text style={{ color: 'red' }}>*</Text>
      </Text>

      <CustomTextField value={cat} onChangeText={setcat} />

      <Text style={styles.fieldname}>
        Manufacturer <Text style={{ color: 'red' }}>*</Text>
      </Text>

      <CustomTextField value={man} onChangeText={setman} />


      <Text style={styles.fieldname}>
        Mfg Date <Text style={{ color: 'red' }}>*</Text>
      </Text>

      <CustomTextField value={mfg} onChangeText={setmfg} />

      <Text style={styles.fieldname}>
        Expiry Date <Text style={{ color: 'red' }}>*</Text>
      </Text>

      <CustomTextField value={expiry} onChangeText={setexpiry} />

      <Text style={styles.fieldname}>
        Description <Text style={{ color: 'red' }}>*</Text>
      </Text>

      <CustomTextField value={des} onChangeText={setdes} />

      <Text style={styles.fieldname}>
        Product Image <Text style={{ color: 'red' }}>*</Text>
      </Text>

      <View
        style={{
            borderWidth: 2,
            paddingLeft:5,
            padding:5,
            width:"95%",
            height:40,
            alignSelf:"center",
            borderRadius:6,
            flexDirection:'row'

        }}>
        <Text style={{flex:3, color:"grey",marginTop:3}}> Select Image</Text>
        <View style={{flex:1,flexDirection:"row"}}>
        <TouchableOpacity onPress={cameraLaunch}>
    <Image source={require('./assets/icons/camera.png')}
          style={{
            height:25,
            width:25,marginRight:5
          }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={imageGalleryLaunch}>
         <Image source={require('./assets/icons/gallery.png')}
          style={{
            height:25,
            width:25,

          }} />
        </TouchableOpacity>
        </View>
      </View>
      <View><Text>{
            fileimg ?
            (
              <View style={{alignItems:'center', marginTop:10}}>
          <Image resizeMode='stretch' style={{width:160,height:160}} source={{uri:imagetaken}}></Image>
          </View>
            ) : <View></View>
          }
        </Text></View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.signIn}>Add Product</Text>
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
