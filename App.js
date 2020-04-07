import React, { Component } from "react";
import { Spinner } from "native-base";

import RootNavigator from "./Components/Navigation";
import { NavigationContainer } from "@react-navigation/native";

export default class App extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="#132D4B" />;
    }
    return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    );
  }
}
