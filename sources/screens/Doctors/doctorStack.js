import { NavigationContainer } from '@react-navigation/native'
import React,{component} from 'react'
import { SafeAreaView, Text,ScrollView } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MainScreen from '../Mainscreen'
import ContactDoc from './sources/screens/ContactDoc'
import DoctorHomePage from './sources/screens/DoctorHomePage'
import MyTabs from './sources/screens/bottom-tab/mytab'
import DisplayResponse from '../DisplayResponse'
import AccountInfoDoc from '../AccountInfoDoc'


const Stack = createNativeStackNavigator()

const DoctorStack = () =>{
  return(
    <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown:false}}/> */}
          <Stack.Screen name="AccountInfoDoc" component={AccountInfoDoc}
                options={{
                  headerStyle: { backgroundColor: '#003D80' },
                  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
                  headerTitleAlign: 'left',
                  headerShown: false
                }} />
        
        <Stack.Screen name="ContactDoc" component={ContactDoc}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerShown:false}}/> 
        
        <Stack.Screen name="DoctorHomePage" component={DoctorHomePage}
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

export default DoctorStack;