import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert, ImageBackground, ScrollView, SafeAreaView,Modal } from 'react-native';
import { styles } from './styles';
import axios from "axios";


export default function DisplayResponse(item) {
    const [state,setState] = useState(false);
    const [response,setResponse] = useState();
    const displayModal = (show)=>{
        setState(show)
      };
    console.log("Hello from Display",item.obj);
    useEffect(()=>{
    axios.get("http://localhost:3000/doctor/"+item.obj).then((res) => {
          setResponse(res.data);
          console.log(res.data)
          displayModal(true);
        });
    },[]);
    return(
    <View style = { modalstyle.container }>
        <Modal
            animationType = {"slide"}
            transparent={false}
            visible={state}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');}}>
                <>
                    {response?.map((i)=>{
                      return(
                        <>
                        <View style = {{backgroundColor: '#9DA990'}}>
                        <View style={{backgroundColor: '#9DA990' ,alignItems: "center", marginTop:'10%'}}>
                          <Text style={{ fontSize: 20, color: '#FFFFFF'}}>Name:  {i?.name}</Text>
                          <Text style={{ fontSize: 20, color: '#FFFFFF'}}>Email: {i?.email}</Text>
                          <Text style={{ fontSize: 20, color: '#FFFFFF'}}>Speciality: {i?.speciality}</Text>
                          <Text style={{ fontSize: 20, color: '#FFFFFF'}}>Place of Work: {i?.hospital}</Text>
                          <Text style={{ fontSize: 20, color: '#FFFFFF'}}>Available Days: {i?.days}</Text>
                          <Text style={{ fontSize: 20, color: '#FFFFFF'}}>Available Time: {i?.timing}</Text>

                          
                          </View>
                          


                        </View>
                        
                        
                        </>
                       
                      )
                    }
                    
                    )}
                    </>
                    <View style = {{alignItems: "center"}}>
                        <TouchableOpacity style={{backgroundColor: '#808977', width:'50%', paddingVertical: "5%",justifyContent: "center", alignItems: "center", marginTop: '5%'}} >
                          <Text 
                            style={{fontSize: 15, color: '#FFFFFF', textAlign: "center" }}
                            onPress={() => {
                                item.setButtonClicked("");
                                item.setFlag(false);
                                displayModal(!state);

                              }}>Close Modal</Text>
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