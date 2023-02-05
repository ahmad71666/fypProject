import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity,ImageBackground,TextInput, SafeAreaView, StyleSheet, Text, View, ScrollView,Alert, Image } from 'react-native';
import DoctorLogin from './DoctorLogin';
import axios from "axios";
import { styles } from './styles';

const bkimage = require('../assets/background.jpg')

export default function NewAccount({navigation}) {
  
  const [speciality,setSpeciality]=useState('');
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [timing,setTiming]=useState('');
  const [hospital,setHospital]=useState('');
  const [days,setDays]=useState('');


  const newDoctor = ()=>{

      axios.post('http://localhost:3000/doctor/signup',{
        name:name,
        email:email,
        password:password,
        speciality:speciality,
        timing:timing,
        hospital:hospital,
        days:days,
      }).then(()=>{
        navigation.navigate(DoctorLogin);
      }).catch(()=>{
      });
		//   var headers= {
		//     Accept: "application/json",
		//     "Content-Type": "application/json",
		//   };

		//   var apiUrl="http://localhost:8080/esmart/insertSpecialist.php";

		//  let result = await  fetch(
		//     apiUrl,
		//   {
		//     mode: 'no-cors',
		//      withCredentials: true,
		//      crossorigin: true,
		//      mode: 'no-cors',
		//     method: "POST",
		//     headers:headers,
		//     body: JSON.stringify(data)
		//   }
		//    )

     

  }


  return (
    <>
    <ImageBackground source={bkimage} style={styles.imageBackgroundContainer}>
      <SafeAreaView style={{ flex: 1 }}>

        <View style={{alignItems:'center', marginTop:30}}>
          <Text style={[styles.textStyle, {fontSize:50, color:'#39559E'} ]}>Create Specialist Account</Text>
        </View>
        <ScrollView style={{ marginTop: '20%' }}>
          <View>
            <TextInput style={styles.inputStyle} onChangeText={setName} placeholder="Enter Name" placeholderTextColor="#6080D1" />
            <TextInput style={styles.inputStyle} onChangeText={setEmail} placeholder="Enter Email" placeholderTextColor="#6080D1" />
            <TextInput secureTextEntry={true} style={styles.inputStyle} onChangeText={setPassword} placeholder="Enter Password" placeholderTextColor="#6080D1" />
            <TextInput style={styles.inputStyle} onChangeText={setSpeciality} placeholder="Feild of Specialization" placeholderTextColor="#6080D1" />
            <TextInput style={styles.inputStyle} onChangeText={setHospital} placeholder="Practice Details" placeholderTextColor="#6080D1" />
            <TextInput style={styles.inputStyle} onChangeText={setDays} placeholder="Availablity Days" placeholderTextColor="#6080D1" />
            <TextInput style={styles.inputStyle} onChangeText={setTiming} placeholder="Availablity Time" placeholderTextColor="#6080D1" />


            <TouchableOpacity style={styles.touchableStyle}
              onPress={()=>{newDoctor();alert(`Doctor Added`)}}>
              <Text style={{ fontSize: 20, color:'#39559E', fontStyle: 'bold'}}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
    </>
  );
}
