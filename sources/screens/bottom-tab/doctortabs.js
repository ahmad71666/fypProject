import Icons from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DoctorHomePage from '../DoctorHomePage';
import Patient from '../Patient';
import ContactDoc from '../ContactDoc';
import Icon from 'react-native-vector-icons/Ionicons';
import AddMedicalRecord from '../AddMedicalRecord';

const Tab = createBottomTabNavigator();

export default function DoctorTabs() {
    return (
        <Tab.Navigator
            initialRouteName="DoctorHome"
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
                name="DoctorHome"
                component={DoctorHomePage}
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