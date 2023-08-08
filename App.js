import react from "react";
import { Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppContacts from "./src/pages/AppContacts";
import Contacts from "./src/pages/Contacts";
import Iformation from "./src/pages/Iformation";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AppContacts" component={AppContacts} />
      <Tab.Screen name="Contacts" component={Contacts} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppContacts" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Iformation" component={Iformation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}