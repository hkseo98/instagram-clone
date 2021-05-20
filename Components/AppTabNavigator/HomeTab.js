//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  Container,
  Content,
  Icon,
  Thumbnail,
  Header,
  Left,
  Right,
  Body,
} from "native-base";
import CardComponent from "../CardComponent";

// create a component
const HomeTab = ({ navigation }) => {
  const [Feeds, setFeeds] = useState([]);
  const [Followers, setFollowers] = useState([]);

  React.useEffect(() => {
    const data = {
      // api => https://developers.steem.io/apidefinitions/#condenser_api.get_discussions_by_created
      jsonrpc: "2.0",
      method: "condenser_api.get_discussions_by_created",
      params: [{ tag: "photography", limit: 20, truncate_body: 0 }],
      id: 1,
    };
    fetch("https://api.steemit.com", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => setFeeds(res.result));

    const thumbnailData = {
      id: 2,
      jsonrpc: "2.0",
      method: "call",
      params: ["follow_api", "get_following", ["anpigon", "", "blog", 10]],
    };
    fetch("https://api.steemit.com", {
      method: "POST",
      body: JSON.stringify(thumbnailData),
    })
      .then((res) => res.json())
      .then((res) => setFollowers(res.result));
  }, []);

  return (
    <Container>
      <Header>
        <Left>
          <Icon name="ios-camera" style={{ paddingLeft: 10 }} />
        </Left>
        <Body>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Instagram</Text>
        </Body>
        <Right>
          <Icon name="ios-send" style={{ paddingRight: 10 }} />
        </Right>
      </Header>
      <Content>
        <View style={{ height: 90 }}>
          <View style={{ flex: 3 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                paddingStart: 5,
                paddingEnd: 5,
              }}
            >
              {Followers.map((following, idx) => (
                <Thumbnail
                  key={idx}
                  style={{
                    width: 71,
                    height: 71,
                    borderRadius: 50,
                    marginHorizontal: 5,
                    borderColor: "#D5D7D4",
                    borderWidth: 2,
                  }}
                  source={{
                    uri: `https://steemitimages.com/u/${following.following}/avatar`,
                  }}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        {Feeds.map((feed, idx) => (
          <CardComponent data={feed} key={idx} />
        ))}
      </Content>
    </Container>
  );
};

//make this component available to the app
export default HomeTab;
