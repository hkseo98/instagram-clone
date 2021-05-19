//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Container, Content } from "native-base";
import CardComponent from "../CardComponent";

// create a component
const HomeTab = ({ navigation }) => {
  const [Feeds, setFeeds] = useState([]);

  React.useEffect(() => {
    navigation.setOptions({
      TabBarIcon: () => <Icon name="ios-home" style={{ paddingLeft: 10 }} />,
    });

    const data = {
      id: 1,
      jsonrpc: "2.0",
      method: "call",
      params: [
        "database_api",
        "get_discussions_by_created",
        [{ tag: "kr", limit: 20 }],
      ],
    };
    fetch("https://api.steemit.com", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => setFeeds(res.result));
  }, []);

  return (
    <Container style={styles.container}>
      <Content>
        {Feeds.map((feed, idx) => (
          <CardComponent data={feed} key={idx} />
        ))}
      </Content>
    </Container>
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
