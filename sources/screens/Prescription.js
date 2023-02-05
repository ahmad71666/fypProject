import React, { useState } from 'react';
import { View, Button, Image, Text } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import TextDetector from 'react-native-text-detector';

const options = {
  title: 'Select Image',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const Prescription = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [detectedText, setDetectedText] = useState(null);

  const selectImage = async () => {
    const pickerResponse = await new Promise((resolve) => {
      ImagePicker.showImagePicker(options, (response) => {
        resolve(response);
      });
    });

    if (pickerResponse.didCancel) {
      console.log('User cancelled image picker');
    } else if (pickerResponse.error) {
      console.log('ImagePicker Error: ', pickerResponse.error);
    } else if (pickerResponse.customButton) {
      console.log('User tapped custom button: ', pickerResponse.customButton);
    } else {
      const source = { uri: pickerResponse.uri };
      setSelectedImage(source);

      try {
        const detected = await TextDetector.detectFromUri(pickerResponse.uri);
        setDetectedText(detected);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Select Image" onPress={selectImage} />
      {selectedImage && (
        <Image source={selectedImage} style={{ width: 300, height: 300 }} />
      )}
      {detectedText && (
        <View>
          {detectedText.map((block, index) => (
            <Text key={index} style={{ backgroundColor: 'pink' }}>
              {block.value}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};



export default Prescription;

/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity, Alert, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import Patient from './Patient';
import Icon3 from 'react-native-vector-icons/AntDesign';
const img_src = require('../assets/background.jpg')

export default function Prescription({navigation}) {
    return (
        <View style = {styles.MainContainer}>
        
            <View>
                <Text style={[styles.container2, {paddingTop:'13%',paddingBottom:50,fontSize:30, color:'#000044',alignSelf:'center'}]}>
                Upload Prescription</Text>
            </View>

            <View style={[styles.container7, {backgroundColor:'#808977'}]}>

                <Text style={{paddingTop:'10%',color: '#FFFFFF',fontSize:25,alignSelf:'center',fontFamily:'Iowan Old Style'}}>
                    How do you want to upload?
                </Text>

                <TouchableOpacity onPress={()=>{ Alert.alert('Work'); } }
                 style={{paddingTop:30,alignSelf:'center'}}>
                    <Icon name="camera" size={70} color="#FFFFFF" />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{ Alert.alert('Work'); } }
                style={{paddingTop:30,paddingLeft:100}} >
                        <Icon1 name="add-to-photos" size={93} color="#FFFFFF" />
                    </TouchableOpacity>

            </View>

            <Text style={{paddingTop:50,color: '#183E9F',fontSize:25,alignSelf:'center',fontFamily:'Iowan Old Style'}}>
                The Prescription upload guide:
            </Text>


            <Text style={{paddingTop:25,color: '#183E9F',fontSize:25,alignSelf:'center',fontFamily:'Iowan Old Style'}}>
                  * Do not crop any part of the Prescription picture
            </Text>

            <Text style={{paddingTop:10,color: '#183E9F',fontSize:25,alignSelf:'center',fontFamily:'Iowan Old Style'}}>
                  * Avoid uploading a blurred and unclear picture of Prescription
            </Text>            
            <View>
              <TouchableOpacity style={{ backgroundColor: '#9DA990', width:'120%', paddingVertical: "3%",justifyContent: "center", alignItems: "center", marginTop: '5%' }}
              onPress={() => navigation.navigate(Patient)}>
              <Text style={{ fontSize: 20, color: '#FFFFFF', textAlign: "left" }}>
                <Icon3 name="leftcircle" size={20} color="#FFFFFF" /> back</Text>
              </TouchableOpacity>
            </View>
        </View>
        
   
 );
}*/

