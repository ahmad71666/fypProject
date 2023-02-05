import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, SafeAreaView, Alert, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import DoctorHomePage from './DoctorHomePage';

import { styles } from './styles';
import axios from "axios";

export default function AccountInfoDoc({navigation}) {
  const [name,setName] = useState();
  const [password,setPassword] = useState();
  const [email,setEmail] = useState();
  const [speciality,setSpeciality] = useState();
  const [timing,setTiming]=useState('');
  const [hospital,setHospital]=useState('');
  const [days,setDays]=useState('');
  


  const userid = localStorage.getItem("id");
  console.log(userid)
  const [user,setUser] = useState();
  useEffect(()=>{
    axios.get("http://localhost:3000/doctor/"+(userid)).then((res)=>
    {
      setUser(res.data);
      setSpeciality(res.data.speciality);
      setTiming(res.data.timing);
      setHospital(res.data.hospital);
      setDays(res.data.days);


    })
    },[]);

    const updateRec = () =>{
      axios.put("http://localhost:3000/doctor/record/"+(userid),
      {name:name,email:email,password:password,speciality:speciality,timing:timing,hospital:hospital,days:days}).then((res)=>
      {
        console.log(res.data)
      })
      }

  return (
      <SafeAreaView style={styles.MainContainer}>
        <View style={{alignItems:'center', marginTop:20}}>
          <Text style={[styles.textStyle, {fontSize: 48, color: '#000044', textAlign: "center" } ]}>Specialist Details</Text>
        </View>

        <View style = {styles.container9}>
            <View style={{marginTop:10,marginLeft:20}}>
              <Text  style={{fontSize:15,color:'#FFFFFF'}}>Patient ID: </Text>
                <TextInput style={[styles.inputStyle1, { color: '#39559E' }]} placeholder="ID"  disabled defaultValue={user?._id}/>
        </View>

            <View style={{marginTop:5,marginLeft:20}}>
              <Text  style={{fontSize:15,color:'#FFFFFF'}}>Full Name: </Text>
                <TextInput style={[styles.inputStyle1, { color: '#39559E' }]} placeholder="Enter Name" onChangeText={setName} defaultValue={user?.name}/>
            </View>
            <View style={{marginTop:5,marginLeft:20}}>
              <Text style={{fontSize:15,color:'#FFFFFF'}}>Email Address: </Text>
              <TextInput style={[styles.inputStyle1, { color: '#39559E' }]} placeholder="Enter Email" onChangeText={setEmail} defaultValue={user?.email}/>
            </View>
            <View style={{marginTop:5,marginLeft:20}}>
              <Text  style={{fontSize:15,color:'#FFFFFF'}}>Password: </Text> 
              <TextInput secureTextEntry={true} style={[styles.inputStyle1, { color: '#39559E' }]}  onChangeText={setPassword} placeholder="Enter password" defaultValue={user?.password}/>
            </View>
            <View style={{marginTop:5,marginLeft:20}}>
              <Text style={{fontSize:15,color:'#FFFFFF'}}>Speciality: </Text>
              <TextInput style={[styles.inputStyle1, { color: '#39559E' }]} placeholder="Enetr your field of specialization" onChangeText={setSpeciality} defaultValue={user?.speciality}/>
            </View>
            <View style={{marginTop:5,marginLeft:20}}>
              <Text style={{fontSize:15,color:'#FFFFFF'}}>Place of Work: </Text>
              <TextInput style={[styles.inputStyle1, { color: '#39559E' }]} placeholder="Enter your place of Work" onChangeText={setHospital} defaultValue={user?.hospital}/>
            </View>
            <View style={{marginTop:5,marginLeft:20}}>
              <Text style={{fontSize:15,color:'#FFFFFF'}}>Available Days: </Text>
              <TextInput style={[styles.inputStyle1, { color: '#39559E' }]} placeholder="Enter Availibity Days" onChangeText={setDays} defaultValue={user?.days}/>
            </View>
            <View style={{marginTop:5,marginLeft:20}}>
              <Text style={{fontSize:15,color:'#FFFFFF'}}>Available Time: </Text>
              <TextInput style={[styles.inputStyle1, { color: '#39559E' }]} placeholder="Enter Availibity Time" onChangeText={setTiming} defaultValue={user?.timing}/>
            </View>

            <View style={{flexDirection: "row", width: "100%", justifyContent: "center" }}>
              <TouchableOpacity style={{ backgroundColor: '#9DA990', width:'40%', paddingVertical: "3%",justifyContent: "center", alignItems: "center", marginTop: '2%' }}
              onPress={() => navigation.navigate(DoctorHomePage)}>
              <Text style={{ fontSize: 20, color: '#FFFFFF', textAlign: "left" }}>
                <Icon2 name="leftcircle" size={20} color="#FFFFFF" /> back</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: '#9DA990', width:'40%', paddingVertical: "3%",justifyContent: "center", alignItems: "center", marginTop: '2%', marginLeft:'2%' }}
              onPress={()=>{updateRec();alert("user Info Updated")}}>
              <Text style={{ fontSize: 20, color: '#FFFFFF', textAlign: "right" }}>
                <Icon name="update" size={20} color="#FFFFFF" /> Update</Text>
              </TouchableOpacity>
            </View>

            
                    

        </View>
          
      </SafeAreaView>
   

  );
}
