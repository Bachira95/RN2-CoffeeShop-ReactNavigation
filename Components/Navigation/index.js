import React from "react";
import creatStackNavigator, {
  createStackNavigator,
} from "@react-navigation/stack";
import { Icon } from "native-base";

// Components
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import CoffeeList from "../CoffeeList";
import CoffeeDetail from "../CoffeeDetail";
import CoffeeCart from "../CoffeeCart";

const { Navigator, Screen } = createStackNavigator();

export default function RootNavigator() {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgb(20,90,100)",
        },
        headerTintColor: "white",

        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Signup" component={Signup} />
      <Screen
        name="CoffeeList"
        component={CoffeeList}
        // we have to make options as function to be able to use navigation.navigate
        //we cann't receive navigation in line 14 like other components, because RootNavigator doesn't render in screen
        options={({ navigation }) => ({
          title: "Coffee List",
          headerRight: () => (
            <Icon
              name="md-cart"
              onPress={() => navigation.navigate("CoffeeCart")}
            />
          ), //We made the headerRight function, so it can give me back an object
        })}
      />
      <Screen
        name="CoffeeDetail"
        component={CoffeeDetail}
        options={({ navigation, route }) => ({
          title: route.params.coffeeshop.name,
          headerRight: () => (
            <Icon
              name="md-cart"
              onPress={() => navigation.navigate("CoffeeCart")}
            />
          ), //We made the headerRight function, so it can give me back an object
        })}
      />
      <Screen name="CoffeeCart" component={CoffeeCart} />
    </Navigator>
  );
}
