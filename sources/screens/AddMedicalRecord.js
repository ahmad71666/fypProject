import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity,ImageBackground,TextInput, SafeAreaView, StyleSheet, Text, View, ScrollView,Alert, Image } from 'react-native';
import { AppRegistry } from 'react-native-web';
//import AsyncStorage from '@react-native-async-storage/async-storage';
const bkimage = require('../assets/background.jpg')
import PatientLogin from './PatientLogin'
import MedicalRecord from './MedicalRecord'
import { styles } from './styles';


export default function AddMedicalRecord({navigation}) {

  const [PatientId,setPatientId]=useState('1');
  const [Patientname,setPatientname]=useState('');  
  const [Diseases,setDiseases]=useState(''); 
  const [Allergies,setAllergies]=useState('');
  const [ScanPrescription,setScanPrescription]=useState('');
  const [Medicine,setMedicine]=useState('');

  
  var data ={

    PatientId:PatientId,
    Patientname:Patientname,
    Diseases:Diseases,
    Allergies:Allergies,
    ScanPrescription:ScanPrescription,
    Medicine:Medicine
  };
  
  const storeUser = async () => {
    try {
      await AsyncStorage.setItem("MedicalRecord", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };


 async function insertMedicalRecord(){

    var data ={

      PatientId:PatientId,
      Diseases:Diseases,
      Allergies:Allergies,
      ScanPrescription:ScanPrescription,
      Medicine:Medicine
    };




    var headers= {
      Accept: "application/json",
      "Content-Type": "application/json",
    };


    var apiUrl="http://localhost:8080/esmart/insertPatientMedicalRecord.php";


   let result = await  fetch(
      apiUrl,
    {
      mode: 'no-cors', 
       withCredentials: true,  
       crossorigin: true,  
       mode: 'no-cors', 
      method: "POST",
      headers:headers,
      body: JSON.stringify(data)
    }
     )

     if(result){
      storeUser();
      navigation.navigate(MedicalRecord)
     }

     

  }


  return (
    //<ImageBackground source={bkimage} style={styles.imageBackgroundContainer}>
      <SafeAreaView style={styles.MainContainer}>
          
        <View style={{alignItems:'center', marginTop:30}}>
          <Text style={[styles.textStyle, {fontSize: 48, color: '#000044', textAlign: "center" } ]}>Medical Record</Text>
        </View>
        <ScrollView style={{marginTop:'20%'}}>
          <View>
            <TextInput name="FirstName" style={styles.inputStyle} onChangeText={setPatientname} placeholder="Enter Name" placeholderTextColor="#D3D3D3"/>
            <TextInput name="LastName" style={styles.inputStyle} onChangeText={setDiseases} placeholder="Enter Diseases" placeholderTextColor="#D3D3D3"/>
            <TextInput name="Contact" style={styles.inputStyle} onChangeText={setAllergies} placeholder="Enter Allergies" placeholderTextColor="#D3D3D3"/>
            <TextInput name="Email" style={styles.inputStyle} onChangeText={setScanPrescription} placeholder="Scan Prescription" placeholderTextColor="#D3D3D3"/>
            <TextInput name="Password" style={styles.inputStyle} onChangeText={setMedicine} placeholder="Enter Medicine" placeholderTextColor="#D3D3D3"/>            

            <TouchableOpacity style={styles.touchableStyle}
              onPress={()=>{insertMedicalRecord()}}>
              <Text style={{fontSize:20, color:'#D3D3D3'}}>Done</Text>
            </TouchableOpacity>  
          </View>
        </ScrollView>
        </SafeAreaView>
    //</ImageBackground>
  );
}

