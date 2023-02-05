import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, SafeAreaView, Alert, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Patient from './Patient';
const img_src = require('../assets/background.jpg')
import { styles } from './styles';
import axios from "axios";

export default function PatientProfile({navigation}) {
  const [name,setName] = useState();
  const [password,setPassword] = useState();
  const [email,setEmail] = useState();
  const [disease,setDisease] = useState();
  const [allergies,setAllergies] = useState();
  const [medicine,setMedicine] = useState();


  const userid = localStorage.getItem("id");
  console.log(userid)
  const [user,setUser] = useState();
  useEffect(()=>{
    axios.get("http://localhost:3000/user/"+(userid)).then((res)=>
    {
      setUser(res.data);
      setDisease(res.data.disease);
      setAllergies(res.data.allergies);
      setMedicine(res.data.medicines);
    })
    },[]);
    


    const updateRec = () =>{
    axios.put("http://localhost:3000/user/record/"+(userid),
    {name:name,email:email,password:password,disease:disease,allergies:allergies,medicines:medicine}).then((res)=>
    {
      console.log(res.data)
    })
    }
  

  return (
      <SafeAreaView style={styles.MainContainer}>
        <View style={{alignItems:'center', marginTop:30}}>
          <Text style={[styles.textStyle, {fontSize: 48, color: '#000044', textAlign: "center" } ]}>Patient Details</Text>
        </View>

        <View style = {styles.container8}>
            <View style={{marginTop:10,marginLeft:20}}>
              <Text  style={{fontSize:15,color:'#FFFFFF'}}>Patient ID: </Text>
                <TextInput style={[styles.inputStyle, { color: '#39559E' }]} placeholder="ID"  disabled defaultValue={user?._id}/>
        </View>

            <View style={{marginTop:10,marginLeft:20}}>
              <Text  style={{fontSize:15,color:'#FFFFFF'}}>Name: </Text>
                <TextInput style={[styles.inputStyle, { color: '#39559E' }]} placeholder="Name" onChangeText={setName} defaultValue={user?.name}/>
            </View>
            <View style={{marginTop:10,marginLeft:20}}>
              <Text style={{fontSize:15,color:'#FFFFFF'}}>Email : </Text>
              <TextInput style={[styles.inputStyle, { color: '#39559E' }]} placeholder="Email" onChangeText={setEmail} defaultValue={user?.email}/>
            </View>
            <View style={{marginTop:10,marginLeft:20}}>
              <Text  style={{fontSize:15,color:'#FFFFFF'}}>Password: </Text> 
              <TextInput secureTextEntry={true} style={[styles.inputStyle, { color: '#39559E' }]}  onChangeText={setPassword} placeholder="User password" defaultValue={user?.password}/>
            </View>
            <View>
              <TouchableOpacity style={{ backgroundColor: '#9DA990', width:'40%', paddingVertical: "3%",justifyContent: "center", alignItems: "center", marginTop: '2%' }}
              onPress={() => navigation.navigate(Patient)}>
              <Text style={{ fontSize: 20, color: '#FFFFFF', textAlign: "left" }}>
                <Icon2 name="leftcircle" size={20} color="#FFFFFF" /> back</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{ backgroundColor: '#9DA990', width:'40%', paddingVertical: "3%",justifyContent: "center", alignItems: "center", marginTop: '2%' }}
              onPress={()=>{updateRec();alert("user Info Updated")}}>
              <Text style={{ fontSize: 20, color: '#FFFFFF', textAlign: "left" }}>
                <Icon2 name="leftcircle" size={20} color="#FFFFFF" /> Update User Record</Text>
              </TouchableOpacity>
            </View>            

        </View>
          
      </SafeAreaView>
   

  );
}
