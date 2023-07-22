import * as React from 'react';
import react from 'react';
import { Text, View, StyleSheet, Image, ImageBackground , TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
export default function ViewProduct() {
    var [Sold,setSold] = React.useState(24)
    var [Available,setAvailable] = react.useState(19)
    var load = Sold+Available;
    load = Sold/load
    var [title, settitle] = React.useState("Panadol (Paracetemol)")
    var [des, setdes] = React.useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam")
    var [price, setprice] = React.useState("600")
    var [type,settype] = React.useState("Tablets")
    var [Batchnumber, setBatchnumber] = React.useState("1234-567-89")
    var [ManuFacture,setManuFacture] = React.useState("20-Mar-2021")
    var [Expiry, setExpiry] = React.useState("02-Apr-2022")

  return (
    <View style={{backgroundColor:'#fff',height:"100%"}}>
        <View style={{alignItems:'center'}}>
        <ImageBackground style={styles.imag} source={{uri:"https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_pk/pakistan_product/panadol-regular/408x300-panadol-regular.png?auto=format"}}>
        <TouchableOpacity 
              style={{position:"absolute", top: 20, left:10, fontSize: 35, color:"white", fontWeight:"600", borderRadius:18}}>
                  <Image style={{width:30, height:30}} source={{uri:"https://www.pngfind.com/pngs/m/316-3161853_left-arrow-png-back-icon-app-png-transparent.png"}} />
              </TouchableOpacity>
              
        </ImageBackground>
        </View>
        <Text style={{color:'#37B0F7',fontWeight:'600',fontSize:20,marginLeft:15,marginTop:15}}>{title}</Text>
        <Text style={{color:'black',marginLeft:15,marginTop:15}}>{des}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:10}}>
            <View style={{width:'40%',padding:5,backgroundColor:'#fff',borderWidth:0.5,borderColor:'grey',borderRadius:5,alignItems:'center'}}>
                <Text style={{color:'black',fontWeight:'900',fontSize:18}}>Price</Text>
                <Text style={{color:'black'}}>Rs. <Text style={{color:'#37B0F7',fontWeight:'700',fontSize:28}}>{price}</Text></Text>
            </View>
            <View style={{width:'40%',padding:5,backgroundColor:'#fff',borderWidth:0.5,borderColor:'grey',borderRadius:5,alignItems:'center'}}>
                <Text style={{color:'black',fontWeight:'900',fontSize:18}}>Type</Text>
                <Text style={{color:'#37B0F7',fontWeight:'700',fontSize:28}}>{type}</Text>
            </View>
        </View>
        <View>
            <Text style={{color:'black',fontSize:20,fontWeight:'bold',marginLeft:20,color:'#37B0F7'}}>Batch Number</Text>
            <View style={{alignItems:'center'}}>
                <View style={{borderWidth:1,borderColor:'grey',borderRadius:8,width:"90%",padding:10}}>
                        <Text style={{color:'black',fontWeight:'bold'}}>{Batchnumber}</Text>
                    <View style={{margin:5}}>
                    <Progress.Bar progress={load} width={300} color="#37B0F7" />
                    </View>
                    <View style={{flexDirection: 'row',justifyContent:'flex-start'}}>
                        <Text style={{color:'black'}}><Text style={{color:'#37B0F7',fontSize:24,fontWeight:'bold'}}>{Sold}</Text> Sold</Text>
                        <Text style={{color:'black',marginLeft:10}}><Text style={{color:'green',fontSize:24,fontWeight:'bold'}}>{Available}</Text> Available</Text>
                    </View>
                    <View style={{width:'90%',padding:5,backgroundColor:'#fff',borderWidth:0.5,borderColor:'grey',borderRadius:5}}>
                        <Text style={{color:'black',fontSize:16}}>ManuFacture Date</Text>
                        <Text style={{color:'#37B0F7',fontWeight:'700',fontSize:28}}>{ManuFacture}</Text>
                    </View>
                    <View style={{width:'90%',padding:5,backgroundColor:'#fff',borderWidth:0.5,borderColor:'grey',borderRadius:5}}>
                        <Text style={{color:'black',fontSize:16}}>Expiry Date</Text>
                        <Text style={{color:'#37B0F7',fontWeight:'700',fontSize:28}}>{Expiry}</Text>
                    </View>
                </View>
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
