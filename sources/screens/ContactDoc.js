import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert, ImageBackground, ScrollView, SafeAreaView,Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import axios from 'axios';
import DisplayResponse from "./DisplayResponse";

const img_src = require('../assets/cdbackground.jpg')

export default function ContactDoc({ navigation }) {
  const [state,setState] = useState(false);
  const [flag,setFlag] = useState(false);
  const [buttonclicked,setButtonClicked] = useState();
  const displayModal = (show)=>{
    setState(show)
  };
  var response;
  const [isLoading,setIsLoading] = useState(true);


  function displayData(obj){
    setFlag(true);
    console.log("button Clicked",obj);
    setButtonClicked(obj)
    return(
      <>
      <DisplayResponse/>
      </>
    );
  }
 
  if(isLoading){
    return (
      //<ImageBackground source={img_src} style={{flex:1}}>
      <SafeAreaView style={styles.MainContainer}>
        <ScrollView>
          <View style={{ alignItems: 'center', marginTop: 50 }}>
            <Text style={[styles.textStyle, { fontSize: 48, color: '#000044', textAlign: "center" }]}>Contact Medical {'\n'}Specialist</Text>
          </View>
          <View style={{ marginTop: 25, flexDirection: "row", width: "100%", justifyContent: "center" }}>
            <TouchableOpacity style={[styles.touchableStyle2, { backgroundColor: '#9DA990', width: "50%" }]} onPress={()=>{displayData("physician")}}>
              <Text style={{ fontSize: 22, color: '#FFFFFF', textAlign: 'center', marginTop: 15 }} >Physicians</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={[styles.touchableStyle3, { backgroundColor: '#9DA990', width: "50%" }]} onPress={()=>{displayData("cardiologist")}}>
              <Text style={{ fontSize: 25, color: '#FFFFFF', textAlign: "center", marginTop: 15}}>Cardiologists</Text>
            </TouchableOpacity>
          </View>
  
          <View style={{ marginTop: 25, flexDirection: "row" }}>
            <TouchableOpacity style={[styles.touchableStyle2, { backgroundColor: '#89959A' }]} onPress={()=>{displayData("neurologist")}}>
              <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Neurologist</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={[styles.touchableStyle3, { backgroundColor: '#89959A' }]} onPress={()=>{displayData("orthopedic")}}>
              <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Orthopedics</Text>
            </TouchableOpacity>
          </View>
          {(flag)?(<DisplayResponse obj={buttonclicked} setButtonClicked={setButtonClicked} setFlag={setFlag}/>):("")} 
  
          <View style={{ marginTop: 25, flexDirection: "row" }}>
            <TouchableOpacity style={[styles.touchableStyle2, { backgroundColor: '#A68D80' }]} onPress={()=>{displayData("gynecologist")}}>
              <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Gynecologists</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={[styles.touchableStyle3, { backgroundColor: '#A68D80' }]} onPress={()=>{displayData("pediatricians")}}>
              <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Pediatricians</Text>
            </TouchableOpacity>
          </View>
  
          <View style={{ marginTop: 25, flexDirection: "row" }}>
            <TouchableOpacity style={[styles.touchableStyle2, { backgroundColor: '#808977' }]} onPress={()=>{displayData("pathologist")}}>
              <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Pathologists</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={[styles.touchableStyle3, { backgroundColor: '#808977' }]} onPress={()=>{displayData("radiologist")}}>
              <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Radiologists</Text>
            </TouchableOpacity>
          </View>
  
          <View style={{ marginTop: 25, flexDirection: "row" }}>
            <TouchableOpacity style={[styles.touchableStyle2, { backgroundColor: '#D4BD75' }]} onPress={()=>{displayData("dermatologist")}}>
              <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Dermatologists</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={[styles.touchableStyle3, { backgroundColor: '#D4BD75' }]} onPress={()=>{displayData("virologist")}}>
              <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Virologists</Text>
            </TouchableOpacity>
          </View>
  
          <View style={{ marginTop: 25, flexDirection: "row" }}>
            <TouchableOpacity style={[styles.touchableStyle2, { backgroundColor: '#C89090' }]} onPress={()=>{displayData("pharmacist")}}>
              <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Pharmacists</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={[styles.touchableStyle3, { backgroundColor: '#C89090' }]} onPress={()=>{displayData("physoclogist")}}>
              <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Physoclogists</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>{'\n'}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
  
  
  
  
  
  
  
  
  
      //</ImageBackground>
  
    );
  }
}