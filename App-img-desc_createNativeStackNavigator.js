import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, View, Image } from "react-native";

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image style={styles.view1Image} source={require("./rover.jpg")} />
      <Button
        title="Voir la description"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
function DetailsScreen() {
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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Page d'accueil" }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  view1Image: {
    marginVertical: 30,
    width: "100%",
    height: 300,
    resizeMode: "center",
  },
});

export default App;

// const App = () => {
//   return (
//     <NavigationContainer>
//       {/* Rest of your app code */}
//       <View style={styles.container}>
//         <Text>Coucou</Text>
//         <StatusBar style="auto" />
//       </View>
//     </NavigationContainer>
//   );
// };
