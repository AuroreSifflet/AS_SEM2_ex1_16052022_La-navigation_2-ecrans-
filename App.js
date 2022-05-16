import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image style={styles.view1Image} source={require("./rover.jpg")} />
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        Mars Exploration Rover (MER) est une mission double de la NASA lancée en
        2003 et composée de deux robots mobiles ayant pour objectif d'étudier la
        géologie de la planète Mars, en particulier le rôle joué par l'eau dans
        l'histoire de la planète.
      </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Page d'accueil",
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={SettingsScreen}
          options={{
            title: "Description",
            tabBarLabel: "Description",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="card-text-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Ionicons name="md-checkmark-circle" size={58} color="green" />
//     </View>
//   );
// }
const styles = StyleSheet.create({
  view1Image: {
    marginVertical: 30,
    width: "100%",
    height: 300,
    resizeMode: "center",
  },
});
