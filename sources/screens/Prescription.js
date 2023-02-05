import React, { useState } from "react";
import { View, Text, SafeAreaView, Modal, ActivityIndicator, Alert, StyleSheet } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MlkitOcr from 'react-native-mlkit-ocr';
import TextDetector from 'react-native-text-detector';

export default function Prescription() {

  const [loading, setLoading] = useState(false)

  const onTakePhoto = () => launchCamera({ mediaType: 'photo' }, (img) => LaunchCameraGallery(img, setLoading));
  const onSelectImagePress = () => launchImageLibrary({ mediaType: 'photo' }, (img) => LaunchCameraGallery(img, setLoading));



  const LaunchCameraGallery = async (media, setLoading) => {

    let array = []

    try {

      if (!media.didCancel) {

        console.log("not canceld");
        console.log(media?.assets[0]?.uri);
        const detected = await TextDetector.detectFromUri("https://i.stack.imgur.com/i1Abv.png");
        console.log(detected, "detected");
        // const resultFromUri = await MlkitOcr.detectFromUri()
        // console.log(resultFromUri);
        // const result = await TextRecognition.recognize(media?.assets[0]?.uri);

        // for (let block of result.blocks) {

        //   for (let line of block.lines) {
        //     array.push(line.text)
        //   }

        // }

        // let printArray = array.map((i) => i + "\n")

        // Alert.alert('Recognized Text', printArray.toString(), [{ text: 'Upload', onPress: () => { uploadText(array, setLoading) }, style: 'cancel' }, { text: 'Cancel', onPress: () => { } },], { cancelable: true });

      }

    } catch (error) {
      console.log(error, "error");
    }

  };

  return (
    <View style={Theme.container}>
      <Text style={Theme.Heading}>Upload Prescription</Text>
      <View style={Theme.MidBox}>
        <Text style={Theme.HowText}>How do you want to upload?</Text>
        <Fontisto onPress={onTakePhoto} name="camera" size={60} color="#FFFFFF" />
        <MaterialIcons onPress={onSelectImagePress} name="add-to-photos" size={80} color="#FFFFFF" />
      </View>
      <View style={Theme.Bottom}>
        <Text style={Theme.bottomText}>The Prescription upload guide:</Text>
        <Text style={Theme.bottomText}>* Do not crop any part of the Prescription picture</Text>
        <Text style={Theme.bottomText}>* Avoid uploading a blurred and unclear picture of Prescription</Text>
      </View>
      <Modal transparent visible={loading}>
        <View style={Theme.loaderContainer}>
          <ActivityIndicator color="red" size="large" />
        </View>
      </Modal>
    </View>
  )

}

const Theme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey"
  },
  Heading: {
    fontSize: 22,
    textAlign: "center",
    marginVertical: 20,
    color: '#000044',
    fontWeight: "bold"
  },
  MidBox: {
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    marginHorizontal: 50,
    borderRadius: 20,
    rowGap: 30,
    marginTop: 20
  },
  HowText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  Bottom: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 20,
    rowGap: 20
  },
  bottomText: {
    color: 'grey',
    fontSize: 20
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})