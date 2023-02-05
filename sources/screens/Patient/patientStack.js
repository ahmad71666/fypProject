import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Patient from './sources/screens/Patient'
import Prescription from './sources/screens/Prescription'
import Ddi from './sources/screens/Ddi'
import Dfi from './sources/screens/Dfi'
import ContactDoc from './sources/screens/ContactDoc'
import DrugToDrugResult from './sources/screens/DrugToDrugResult'
import DrugToDrugResultTwo from './sources/screens/DrugToDrugResultTwo'
import DrugToDrugFood from './sources/screens/DrugToDrugFood'
import AddMedicalRecord from './sources/screens/AddMedicalRecord'
import MedicalRecord from './sources/screens/MedicalRecord'
// import MyTabs from './sources/screens/bottom-tab/mytab'
import PatientProfile from '../PatientProfile'
import MainScreen from '../Mainscreen'
import DisplayResponse from '../DisplayResponse'
const Stack = createNativeStackNavigator()

const PatientStack = () =>{
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='MainScreen'>
          {/* <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown:false}}/> */}
          <Stack.Screen name="Mainscreen" component={MainScreen}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false,
                }} />
        <Stack.Screen name="Patient" component={Patient}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 

       <Stack.Screen name="Prescription" component={Prescription}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 

        <Stack.Screen name="Ddi" component={Ddi}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 
        <Stack.Screen name="Dfi" component={Dfi}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 
        <Stack.Screen name="ContactDoc" component={ContactDoc}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 
        
        
        <Stack.Screen name="DrugToDrugResult" component={DrugToDrugResult}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 
        <Stack.Screen name="DrugToDrugResultTwo" component={DrugToDrugResultTwo}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 
          <Stack.Screen name="DrugToDrugFood" component={DrugToDrugFood}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/>
          <Stack.Screen name="AddMedicalRecord" component={AddMedicalRecord}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 
          <Stack.Screen name="MedicalRecord" component={MedicalRecord}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 
          <Stack.Screen name="PatientProfile" component={PatientProfile}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 
          <Stack.Screen name="DisplayResponse" component={DisplayResponse}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default PatientStack;
