//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";

// create a component
const HomeTab = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      TabBarIcon: () => <Icon name="ios-home" style={{ paddingLeft: 10 }} />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>HomeTab</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default HomeTab;
