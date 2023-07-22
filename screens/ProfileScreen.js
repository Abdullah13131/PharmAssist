import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,ScrollView } from 'react-native';
import Button from '../components/ProfileImg';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ProfileScreen() {
  var [name,setname] = React.useState("GMD")
  var [email,setemail] = React.useState("gmd302@gamil.com")
  var [contact,setContact] = React.useState("0306-3379973")
  var [companies,setContact] = React.useState(["Apple","Samsung","Huawai"])
  var [profileimg, setprofileimg]  = React.useState("https://media.istockphoto.com/id/800296220/vector/businessman-holding-briefcase-isolated.jpg?s=612x612&w=0&k=20&c=89D5gxJ3LWhUXDxz0VjKX1-24EQ95MS6eJDu6lubUfM=")
  
  return (
    <View style={{height:"100%"}}>
      <View style={styles.pro}>
      <TouchableOpacity 
              style={{position:"absolute", top: 50, left:20, fontSize: 35, color:"white", fontWeight:"600"}}>
                  <Image style={{width:40, height:40}} source={require("../assets/uiassets/backbutton.png")} />
              </TouchableOpacity>
        <Button
          percent={63}
          image={profileimg}/>
        <View style={styles.name}>
          <Text style={{ fontSize: 40, fontWeight: "bold", color: 'white' }}>
            {name}
          </Text>
          <Text style={{ fontSize: 25, color: 'white' }}>Middleman</Text>
        </View>
      </View>
      <View style={styles.det}>
        <View>
        <View 
          style={{
            margin: 15,
            flexDirection: 'row',
          }}>
            <View style={{
              marginLeft: 4,
              width: 40,
              height: 40,
              alignSelf: 'center',
            }}>
          <Icon name="envelope-o" size={40} color="#37B0F7"/>
          </View>
          <View style={{ paddingLeft: 20 }}>
            <Text style={{ fontSize: 15, fontWeight: "100" ,color:'black'}}>Email</Text>
            <Text style={{ fontSize: 15, fontWeight: "700" ,color:'black'}}>{email}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ height: 1, backgroundColor: 'black',width:'90%',marginLeft:10,marginRight:10 }} />
        </View>
        <View
          style={{
            margin: 15,
            flexDirection: 'row',
          }}>
          <View style={{
            paddingLeft:4 ,
              marginLeft: 4,
              width: 40,
              height: 40,
              alignSelf: 'center',
            }}>
          <Icon name="mobile-phone" size={45} color="#37B0F7"/>
          </View>
          <View style={{ paddingLeft: 20 }}>
            <Text style={{ fontSize: 15, fontWeight: "100",color:'black' }}>Contact Number</Text>
            <Text style={{ fontSize: 15, fontWeight: "700" ,color:'black'}}>{contact}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ height: 1, backgroundColor: 'black',width:'90%',marginLeft:10,marginRight:10 }} />
        </View>
        </View>
        <View
          style={{
            margin: 15,
            flexDirection: 'row',
          }}>
          <View style={{
            paddingLeft:4 ,
              marginLeft: 4,
              width: 40,
              height: 40,
              alignSelf: 'center',
            }}>
          
          <Icon name="building-o" size={40} color="#37B0F7"/>
          </View>
          <View style={{ paddingLeft: 20 }}>
          <Text style={{color:'black',fontSize:15}}>Companies</Text>
                <ScrollView style={{alignSelf:"center",margin:10}}>
                  {
                    companies.map((e)=>{
                      return(
                        <Text style={styles.text}><Text style={styles.text2}>{e}</Text></Text>
                      )
                    })
                  }
                </ScrollView>
          </View>
        </View>
        <TouchableOpacity style={{margin:60 ,backgroundColor: '#37B0F7', flexDirection:'row', width:"50%", borderRadius:10,justifyContent:'space-evenly', alignItems:'center', alignSelf:'center'}}>
        <View style={{
            paddingLeft:4 ,
              marginLeft: 4,
              width: 35,
              height: 35,
              justifyContent:'center'
            }}>
          <Icon name="edit" size={30} color="#fff"/>
          </View>
            <Text style={{fontSize:16, fontWeight:'bold', color:'white'}}>Edit Profile</Text>
          </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  pro: {
    alignItems:'center',
    backgroundColor: '#37B0F7',
    height: "45%",
  },
  name: {
    fontSize: 23,
    fontWeight: "500",
    flexDirection: 'column',
    alignItems:'center',
  },
  det: {
    backgroundColor: 'white',
    justifyContent:'space-between',
    height: "50%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
});
