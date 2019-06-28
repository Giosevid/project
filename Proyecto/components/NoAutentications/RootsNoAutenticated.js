import React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

const SignIn = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center'}}>
      <Text>SignIn</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
};

const SignUp = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center'}}>
      <Text>SignUp</Text>
      <Button title="Regreasar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const RootsNoAutenticated = createStackNavigator(
  {
    SignIn: { screen: SignIn }, //navigationOptions: {title: 'jhkhjdgf', header: null} },
    SignUp: { screen: SignUp } //navigationOptions: {title: 'SingnUp'} }
  }
  // {
  //   //Quita el HeaderheaderMode: "none" 
  //   //Titulo de navegacion por defecto navigationOptions: {title: 'Titullo dsfsdf'}
  // },
);

export default createAppContainer(RootsNoAutenticated);
