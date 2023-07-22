import * as React from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

EditIcon = <Icon name="edit" size={40} color="#37B0F7" onPress={()=>{alert("Edit Middleman")}}/>
DeleteIcon = <Icon name="minus" size={40} color="#FF2E2E" onPress={()=>{alert("Deleted Middleman")}}/>


export default function MiddlemanView({title="",image="", email="", contact="", companies =["Abdullah","Kumail"], openCard={}, deleteCard={}, editCard={}}){
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          borderColor: '#D9d9d9',
          borderWidth: 2,
          borderRadius: 8,
          shadowColor: '#D9D9D9',
          shadowOffset: { width: 0, height: 2.2 },
        }}
        onPress={openCard}
        >
        <Image
          style={{ width: "25%", height: 90, margin: 5 }}
          source={{
            uri: image,
          }}
        />
        <View style={{ width: "90%" }}>
          <Text style={{margin: 3,fontSize: 15, fontWeight: "600" ,color:'black'}}>
            {title}
          </Text>
          <View
            style={{
              borderBottomColor: '#37b0f7',
              borderBottomWidth: StyleSheet.hairlineWidth,
              width:"80%",
              marginBottom: 6,
            }}></View>
            <View style={{flexDirection:"row"}}>
                <View style={{flex:2}}>
                  <Text style={{color:'black'}}> Companies:</Text>
                <ScrollView style={{alignSelf:"center"}}>
                  {
                    companies.map((e)=>{
                      return(
                        <Text style={styles.text}><Text style={styles.text2}>{e}</Text></Text>
                      )
                    })
                  }
                </ScrollView>
                </View>
                <View style={{flex:1}}>
                <TouchableOpacity onPress={editCard}>
                    {EditIcon}
                </TouchableOpacity>
                <TouchableOpacity onPress={deleteCard}>
                    {DeleteIcon}
                </TouchableOpacity>
                </View>
            </View>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color:'black',
  },
  text2: {
    fontSize: 15,
    fontWeight: "500",
    color:'black',
  },
});