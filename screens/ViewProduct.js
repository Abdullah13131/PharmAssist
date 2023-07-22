import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground , TouchableOpacity} from 'react-native';

export default function ViewProduct() {
    var [name, setname] = React.useState("")
    var [email, setemail] = React.useState("")
    var [contact, setcontact] = React.useState("")
    var [companies,setcompanies] = React.useState([])

  return (
    <View style={{backgroundColor:'#fff',height:"100%"}}>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity 
              style={{position:"absolute", top: 20, left:10, fontSize: 35, color:"white", fontWeight:"600", borderRadius:18}}>
                  <Image style={{width:30, height:30}} source={{uri:"https://www.pngfind.com/pngs/m/316-3161853_left-arrow-png-back-icon-app-png-transparent.png"}} />
              </TouchableOpacity>
        </View>
        <Text style={{color:'#37B0F7',fontWeight:'600',fontSize:20,marginLeft:15,marginTop:15}}>{name}</Text>
        <Text style={{color:'black',marginLeft:15,marginTop:15}}>Email: {email}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:10}}>
            <View style={{width:'40%',padding:5,backgroundColor:'#fff',borderWidth:0.5,borderColor:'grey',borderRadius:5,alignItems:'center'}}>
                <Text style={{color:'black'}}>Contact:<Text style={{color:'#37B0F7',fontWeight:'700',fontSize:28}}>{contact}</Text></Text>
            </View>
            <View style={{width:'40%',padding:5,backgroundColor:'#fff',borderWidth:0.5,borderColor:'grey',borderRadius:5,alignItems:'center'}}>
                <Text style={{color:'black',fontWeight:'900',fontSize:18}}>Companies</Text>
                <Text style={{color:'#37B0F7',fontWeight:'700',fontSize:28}}>{companies}</Text>
            </View>
        </View>
         </View>

  );
}

const styles = StyleSheet.create({
    imag:{
        width:"100%",
        height:280
    },
});
