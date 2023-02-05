import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,ImageBackground, SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';
import DoctorLogin from './DoctorLogin';
import PatientLogin from './PatientLogin';
import { styles } from './styles';

const image = require('../assets/background.jpg')

export default function MainScreen({navigation}) {
  return (
    <ImageBackground source={image} resizeMode = 'cover' style={styles.imageBackgroundContainer}>
      <SafeAreaView>
      <View style={{alignItems:'center', marginTop:130}}>
          <Text style={[styles.textStyle, {fontSize:70, color:'#88ACBE'} ]}>Smart e</Text>
        </View>

        <View style={{alignItems:'center'}}>
          <Text style={[styles.textStyle, {fontSize:70, color: '#88ACBE'} ]}>Pharmacist</Text>
        </View>
 
        <TouchableOpacity style={[styles.touchableStyle,{marginTop:100}]} onPress={()=>navigation.navigate(DoctorLogin)}>
          <Text style={{fontSize:22, color:'#39559E'}}>Specialist Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableStyle} onPress={()=>navigation.navigate(PatientLogin)}>
          <Text style={{fontSize:22, color:'#39559E'}}>Patient Login</Text>
        </TouchableOpacity>
      </SafeAreaView>

    </ImageBackground>
  );
}
