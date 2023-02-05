import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';

const img_src = require('../assets/background.jpg')

export default function DrugToDrugResult({route}) {
  
  return (
    <ImageBackground source={img_src} style={{flex:1}}>
      <View>
  
          <View style={{marginTop:25}}>
              <Text style={styles.container2}>Drug To Drug</Text>
          </View>
          <View style={{marginTop:10,marginLeft:20}}>
          <TextInput style={[styles.inputStyle, { color: '#39559E' }]} placeholder="Drug 1"  disabled/>
          </View>
          <View style={{marginTop:10,marginLeft:20}}>
            <Text style={{fontSize:25,color:'rgb(112,128,144)'}}>Drug2: Clozapine</Text>
          </View>
          <View style={{marginTop:10,marginLeft:20}}>
            <Text style={{fontSize:25,color:'rgb(112,128,144)'}}>Interaction between the two given drugs = The serum concentration of Clozapine can be increased when it is combined with Altretamine</Text>
          </View>
          <View style={{marginTop:10,marginLeft:20}}>
            <Text style={{fontSize:25,color:'rgb(112,128,144)'}}>Alternate Drug: (Alternate Of Drug 2)=Asenapine</Text>
          </View>
    </View>
    </ImageBackground>
   

  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'rgba(83, 110, 115, 0.6)',
    fontSize: 20,
    color: '#D3D3D3',
     marginTop:35,
    height:55,
    width:300,
    borderRadius:10,
   alignSelf:'center',
   paddingLeft:20
    },
    container1: {
      fontSize: 20,
      color: '#D3D3D3',
      alignSelf:'center',
      paddingVertical:12
      },
  container2:{

    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    fontSize:25,
    color:'rgb(119,136,153)'
  },
  container3: {
    backgroundColor:'rgba(83, 110, 115, 0.6)',
    fontSize: 20,
    color: '#D3D3D3',
     marginTop:150,
    height:45,
    width:150,
    borderRadius:10,
    alignSelf:'center'
    }
});