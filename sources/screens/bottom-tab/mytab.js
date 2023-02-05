// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }

import Icons from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DoctorHomePage from '../DoctorHomePage';
import Patient from '../Patient';
import ContactDoc from '../ContactDoc';
import Icon from 'react-native-vector-icons/Ionicons';
import AddMedicalRecord from '../AddMedicalRecord';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Patientt"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: true,
        headerStyle: {
          backgroundColor: "#a1b6e5"
        },
        headerTitleAlign: 'center'
      }}
    >
      <Tab.Screen
        name="Patientt"
        component={Patient}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={"#FF6767"} size={30} />
          ),
          headerTitle: 'Home'
        }}
      />
      <Tab.Screen
        name="ContactDoc"
        component={ContactDoc}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <Icon name="chatbubble-sharp" color={"#FF6767"} size={30} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="AddMedicalRecord"
        component={AddMedicalRecord}
        options={{
          tabBarLabel: 'Medical',
          tabBarIcon: ({ color, size }) => (
            <Icons name="plus-circle" color={"#FF6767"} size={30} />
          ),
          headerShown: false
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={DoctorHomePage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}