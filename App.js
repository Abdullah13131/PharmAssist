import * as React from 'react';
import { Text, TouchableOpacity, View ,Image, StyleSheet, Dimensions, ImageBackground} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Entypo';  
del = <Icon name="minus" size={40} color="#FFF"/>

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:'black'}}>Home!</Text>
    </View>
  );
}

function PlaceOrderScreen() {
  const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator initialRouteName="f">
      <Stack.Screen options={{
          headerShown:false,
          title: '',
          headerStyle: {
            backgroundColor: '#37B0F7',
          },
          headerTintColor: '#fff' }} name="f" component={ScreenFirst} />
          <Stack.Screen options={{
          headerShown:false,
          title: '',
          headerStyle: {
            backgroundColor: '#37B0F7',
          },
          headerTintColor: '#fff' }} name="s" component={SecondScreen} />
      </Stack.Navigator>
  );
}

function ScreenFirst({navigation}) {
  return (
    <View>
      
      <ImageBackground
        style={{ width:"100%", height: "100%"}}
        source={require("./assets/uiassets/HomeBackground.png")}
        resizeMode="cover"
      >
        <Image source={require("./assets/uiassets/AppName.png")} style={{width:"100%",height:"14%",margin:40, alignSelf:'center'}}></Image>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
        <TouchableOpacity style={styles.card}>
            <Icon name="capsules" size={60} color="#37B0F7"/>
            <Text style={{color:'grey',fontSize:20}}>MEDICINE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
            <Icon name="first-aid" size={60} color="#37B0F7"/>
            <Text style={{color:'grey',fontSize:20}}>PRODUCTS</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
        <TouchableOpacity style={styles.card}>
            <Icon name="file-invoice" size={60} color="#37B0F7"/>
            <Text style={{color:'grey',fontSize:20}}>INVOICE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
            <Icon name="shipping-fast" size={60} color="#37B0F7"/>
            <Text style={{color:'grey',fontSize:20}}>ORDERS</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
        <TouchableOpacity style={styles.card}>
            <Icon2 name="man" size={60} color="#37B0F7"/>
            <Text style={{color:'grey',fontSize:20}}>MIDDLE MAN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
            <Icon2 name="bar-graph" size={60} color="#37B0F7"/>
            <Text style={{color:'grey',fontSize:20}}>ANALYTICS</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
        
    </View>
  );
}

function SecondScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:'black'}}>Second Screen!</Text>
      <TouchableOpacity onPress={() =>
        navigation.navigate('f')
      }
       style={{backgroundColor:'lightblue'}}>
        <Text style={{color:'black'}}>First Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:'black'}}>Profile!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown:false
  }}>
     <Tab.Screen options={{        
          title:"HOME",
        tabBarItemStyle:{borderTopEndRadius:8},
        tabBarActiveBackgroundColor: '#F0FFFF',
          tabBarIconStyle: {width:30,color:'black'},
          tabBarIcon:() => <Icon size={ 30 } name={ 'home' } color={ 'black' }/>,
          tabBarLabelStyle: {fontWeight:'500',color:'black',fontSize:12},
      }} name="Home" component={HomeScreen} />

<Tab.Screen options={{title:"Profile",
        tabBarItemStyle:{borderTopStartRadius:8},
        tabBarActiveBackgroundColor: '#F0FFFF',
          tabBarIconStyle: {width:30,color:'black'},
          tabBarIcon:() => <Icon2 size={ 30 } name={ 'user' } color={ 'black' }/>,
          tabBarLabelStyle: {fontWeight:'500',color:'black',fontSize:12},
      }} name="Place Order" component={Profile} />

        <Tab.Screen options={{title:"\r", 
        tabBarIconStyle: {width:40,color:'white'},
        tabBarIcon:() => <Icon size={ 50 } name={ 'plus' } color={ 'white' }/>,
        tabBarLabelStyle: {fontWeight:'500',color:'white',fontSize:0},
          tabBarItemStyle:{position:"absolute",width:(Dimensions.get("window").width/5),
            left: Dimensions.get("window").width/2 -  Dimensions.get("window").width/10,
            backgroundColor:'#37B0F7', height:(Dimensions.get("window").width/5), 
            borderRadius:70, bottom:0
          }}} name="Settings" component={PlaceOrderScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between'
  },
  texth:{
    color:'#3BACB6',
    fontWeight:'700',
    fontSize:24
  },
  card:{
    height:170,
    margin:10, 
    width:170,
    backgroundColor:'white', 
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  }
});