import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert, ImageBackground,Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DrugToDrugResult from './DrugToDrugResult'
import DrugToDrugResultTwo from './DrugToDrugResultTwo';
import Patient from './Patient';
import Icon2 from 'react-native-vector-icons/AntDesign';
import axios from 'axios';


import { styles } from './styles';
//const img_src = require('../assets/background.jpg')

export default function Ddi({navigation}) {
  const [state,setState] = useState(false);
  const displayModal = (show)=>{
    setState(show)
  };
  const [Drug1,setDrug1]=useState('');
  const [Drug2,setDrug2]=useState('');
  const [isLoading,setIsLoading] = useState(true);
  const [response,setResponse] = useState();
  
  async function DTD(){
      axios.post("http://localhost:3000/patient/drugtodrug",{drug1:Drug1,drug2:Drug2}).then((res) => {
        setResponse(res.data);
        setTimeout(() => {
          setIsLoading(false)
          displayModal(true);  
        }, 3000);
    })
      //navigation.navigate(DrugToDrugResult,{paramKey:response})
  }
  if(isLoading){
    return (
      <View style = {styles.MainContainer}>
      <View style={[styles.textStyle, {paddingTop:'10%'}]}>
            <Icon name="hand-holding-medical" size={120} color='#9DA990'/>
      </View>

      <View>
            <Text style={[styles.container2, {paddingTop:'13%',paddingBottom:50,fontSize:30, color:'#9DA990',alignSelf:'center'}]}>
            Drug to Drug Interaction</Text>
      </View>

      <View style={{marginTop:10}}>
       <TextInput style={[styles.container, {color: '#FFFFFF'}]}  
       onChangeText={setDrug1}placeholder="Enter Drug 1" placeholderTextColor="#FFFFFF"/>
      </View>

      <View style={{marginTop:5}}>
       <TextInput style={[styles.container, {color: '#FFFFFF'}]}  
       onChangeText={setDrug2}placeholder="Enter Drug 2" placeholderTextColor="#FFFFFF"/>
      </View>

      <TouchableOpacity style={[styles.touchableStyle2, {backgroundColor:'#808977', marginTop:15}]} 
        onPress={()=>{{DTD();}}}>
        <Text style={{fontSize:22, color:'#FFFFFF',alignSelf:'center',marginTop:15}}>Check Interaction</Text>
      </TouchableOpacity>

      <View>
              <TouchableOpacity style={{ backgroundColor: '#9DA990', width:'120%', paddingVertical: "3%",justifyContent: "center", alignItems: "center", marginTop: '5%' }}
              onPress={() => navigation.navigate(Patient)}>
              <Text style={{ fontSize: 20, color: '#FFFFFF', textAlign: "left" }}>
                <Icon2 name="leftcircle" size={20} color="#FFFFFF" /> back</Text>
              </TouchableOpacity>
      </View>
    </View>
    )
  }
  return(
    <View style = { modalstyle.container }>
        <Modal
            animationType = {"slide"}
            transparent={false}
            visible={state}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');}}>
              <View style={{backgroundColor: '#9DA990', width:'100%', height:'100%', paddingVertical: "3%",justifyContent: "center", alignItems: "center"}}>

              <Text style={{ fontSize: 20, color: '#FFFFFF'}}>{response[0]} {'\n'} </Text>
              <Text style={{ fontSize: 20, color: '#FFFFFF'}}>{response[1]} {'\n'} </Text>
              <Text style={{ fontSize: 20, color: '#FFFFFF'}}>{response[2]} {'\n'} </Text>
              <Text style={{ fontSize: 20, color: '#FFFFFF'}}>{response[3]} {'\n'} </Text>
              <Text style={{ fontSize: 20, color: '#FFFFFF'}}>{response[4]} {'\n'} </Text>

              <TouchableOpacity style={{backgroundColor: '#808977', width:'120%', paddingVertical: "5%",justifyContent: "center", alignItems: "center", marginTop: '5%'}} >
              <Text 
                style={{fontSize: 15, color: '#FFFFFF', textAlign: "left" }}
                onPress={() => {
                  displayModal(!state);setIsLoading(true);}}>Close Modal</Text>
              </TouchableOpacity>

              </View>
          </Modal>
    </View>
  )
}

const modalstyle = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DBE6E4',
  },
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3974',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  image: {
    marginTop: 150,
    marginBottom: 10,
    width: '100%',
    height: 350,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: 24,
    color: '#00479e',
    textAlign: 'center',
  }
});