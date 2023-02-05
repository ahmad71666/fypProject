import { NavigationContainer } from '@react-navigation/native'
import React, { component, useEffect, useState } from 'react'
import { SafeAreaView, Text, ScrollView, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Mainscreen from './sources/screens/Mainscreen'
//import MainScreen from './sources/screens/Mainscreen'
import DoctorLogin from './sources/screens/DoctorLogin'
import NewAccount from './sources/screens/NewAccount'
import Patient from './sources/screens/Patient'
import PatientLogin from './sources/screens/PatientLogin'
import Prescription from './sources/screens/Prescription'
import Ddi from './sources/screens/Ddi'
import Dfi from './sources/screens/Dfi'
import ContactDoc from './sources/screens/ContactDoc'
import CreatePatient from './sources/screens/CreatePatient'
import DoctorHomePage from './sources/screens/DoctorHomePage'
import DrugToDrugResult from './sources/screens/DrugToDrugResult'
import DrugToDrugResultTwo from './sources/screens/DrugToDrugResultTwo'
import DrugToDrugFood from './sources/screens/DrugToDrugFood'
import AddMedicalRecord from './sources/screens/AddMedicalRecord'
import MedicalRecord from './sources/screens/MedicalRecord'
// import MyTabs from './sources/screens/bottom-tab/mytab'
import MyTabs from './sources/screens/bottom-tab/mytab'
import MainScreen from './sources/screens/Mainscreen'
import SplashScreen from './sources/screens/splashscreen'
import DoctorTabs from './sources/screens/bottom-tab/doctortabs'
import PatientProfile from './sources/screens/PatientProfile'
import DisplayResponse from './sources/screens/DisplayResponse'
//import AccountInfoDoc from './sources/screens/accountInfoDoc'
import AccountInfoDoc from './sources/screens/AccountInfoDoc'
//import { RNCamera } from 'react-native-camera'


const Stack = createNativeStackNavigator()


const App = () => {

  const [showComponent, setshowComponent] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setshowComponent(!showComponent)
    }, 5000);
  }, []);

  return (
    <>
      {
        showComponent ? <SplashScreen /> :
          <NavigationContainer>
            <Stack.Navigator initialRouteName='MainScreen' >
              {/* <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} /> */}
              
              
              <Stack.Screen name="Mainscreen" component={Mainscreen}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false,
                }} />

              <Stack.Screen name="DoctorLogin" component={DoctorLogin}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} />

              <Stack.Screen name="PatientLogin" component={PatientLogin}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} />

              <Stack.Screen name="NewAccount" component={NewAccount}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} />


              <Stack.Screen name="Patient" component={MyTabs}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} />


              {/* <Stack.Screen name="Patient" component={Patient}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} /> */}

              <Stack.Screen name="Prescription" component={Prescription}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} />

              <Stack.Screen name="Ddi" component={Ddi}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} />
              <Stack.Screen name="Dfi" component={Dfi}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} />
              {/* <Stack.Screen name="ContactDoc" component={ContactDoc}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} /> */}
              <Stack.Screen name="CreatePatient" component={CreatePatient}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} />

              <Stack.Screen name="DoctorHomePage" component={DoctorTabs} options={{ headerShown: false }} />
              {/* <Stack.Screen name="DoctorHomePage" component={DoctorHomePage}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} /> */}

              <Stack.Screen name="DrugToDrugResult" component={DrugToDrugResult}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} />
              <Stack.Screen name="DrugToDrugResultTwo" component={DrugToDrugResultTwo}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} />
              <Stack.Screen name="DrugToDrugFood" component={DrugToDrugFood}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} />
              {/* <Stack.Screen name="AddMedicalRecord" component={AddMedicalRecord}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} /> */}
              <Stack.Screen name="MedicalRecord" component={MedicalRecord}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} />
                <Stack.Screen name="PatientProfile" component={PatientProfile}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} />
                <Stack.Screen name="AccountInfoDoc" component={AccountInfoDoc}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} />
                <Stack.Screen name="DisplayResponse" component={DisplayResponse}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 
            </Stack.Navigator >
          </NavigationContainer >
      }
    </>
  )
}
export default App;