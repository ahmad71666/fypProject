import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity,ImageBackground,TextInput, SafeAreaView, StyleSheet, Text, View, ScrollView,Alert, Image } from 'react-native';
import { AppRegistry } from 'react-native-web';
const bkimage = require('../assets/background.jpg')
import PatientLogin from './PatientLogin'
import { styles } from './styles';
import axios from 'axios';

export default function CreatePatient({navigation}) {

  const [name,setName]=useState(''); 
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [apiResponse,setAPIResponse] = useState(null);

  
 async function CreatePatientRecord(){

    await axios.post('http://localhost:3000/user/signup',{
        name:name,
        email:email,
        password:password,
      }).then((response)=>{
        navigation.navigate(PatientLogin);
      }).catch((error)=>{
      });



  //   var headers= {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   };


  //   var apiUrl="http://localhost:8080/esmart/insertStudent.php";


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


//     let res = await fetch(
//       "http://localhost:8080/esmart/insertStudent.php",
//       {
//         method: "Post",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },

//       withCredentials: true,  
//       crossorigin: true,  
//       mode: 'no-cors', 
//       body: JSON.stringify(data)
//       }
//     );

//     //res = await res.json();

//     //res = JSON.parse(res);


// console.log(res);

  }


  return (
    <ImageBackground source={bkimage} style={styles.imageBackgroundContainer}>
      <SafeAreaView style={{flex:1}}>
          
        <View style={{alignItems:'center', marginTop:30}}>
          <Text style={[styles.textStyle, {fontSize:50, color:'#39559E'} ]}>Create Patient Account</Text>
        </View>
        <ScrollView style={{marginTop:'20%'}}>
          <View>
            <TextInput name="Name" style={styles.inputStyle} onChangeText={setName} placeholder="Enter Name" placeholderTextColor="#6080D1"/>
            <TextInput name="Email" style={styles.inputStyle} onChangeText={setemail} placeholder="Email Address" placeholderTextColor="#6080D1"/>
            <TextInput secureTextEntry={true} name="Password" style={styles.inputStyle} onChangeText={setpassword} placeholder="Password" placeholderTextColor="#6080D1"/>            

            <TouchableOpacity style={styles.touchableStyle}
              onPress={()=>{CreatePatientRecord();alert(`User Added`)}}>
              <Text style={{fontSize:22, color:'#39559E', fontStyle: 'bold'}}>Create Account</Text>
            </TouchableOpacity>  
          </View>
        </ScrollView>
        </SafeAreaView>
    </ImageBackground>
  );
}