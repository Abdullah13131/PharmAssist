import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image , TouchableOpacity} from 'react-native';
import CustomTextField from '../components/CustomTextField';
import {launchImageLibrary} from 'react-native-image-picker'
ImagePicker = require('react-native-image-picker');

export default function AddInvoiceScreen() {
  const [invoicenumber, setinvoicenumber] = useState('');
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
    <View>
      <View style={styles.pro}>
        <View style={styles.name}>
          <Text style={{ fontSize: 33, color: 'white' }}>
            Add Invoice
          </Text>
        </View>
      </View>
      <View style={styles.det}>
        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 20, color:'black'}}>Invoice Number</Text>
          <CustomTextField
            value={invoicenumber}
            onChangeText={setinvoicenumber}
            placeHolder="Enter Invoice Number"
            color='#37B0F7'
            width='40%'
          />
          <Text style={{ fontSize: 20}}>Date</Text>
        
          <Text style={{ fontSize: 20 , color:'black' }}>Add Invoice Photo</Text>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          <TouchableOpacity onPress={imageGalleryLaunch} style={styles.button}  >
              <Text style={{color:'white',fontSize:20}}>Choose Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={cameraLaunch} style={styles.button}  >
              <Text style={{color:'white',fontSize:20}}>Take Image</Text>
          </TouchableOpacity>
            
          </View>
          {
            fileimg ?
            (
              <View style={{alignItems:'center', marginTop:10}}>
          <Image resizeMode='stretch' style={{width:160,height:160}} source={{uri:imagetaken}}></Image>
          </View>
            ) : <View></View>
          }
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-end', margin:5}}>
        <TouchableOpacity style={styles.button}>
          <Text style={{color:'white',fontSize:18, fontWeight:'bold'}}>Upload Invoice</Text>
        </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  pro: {
    flexDirection: 'row',
    paddingLeft: 20,
    backgroundColor: '#37B0F7',
    paddingBottom:48
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
    paddingLeft: '5%',
    flexDirection: 'column',
  },
  det: {
    height:'92%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    justifyContent:'space-between'
  },
   button: {
    marginTop:2,
    width:150,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#37B0F7',
    borderColor:'black',
    borderWidth:1,
    borderRadius:6,
  },
});