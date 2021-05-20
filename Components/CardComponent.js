//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
} from "native-base";

// create a component
const CardComponent = ({ data }) => {
  const { image } = JSON.parse(data.json_metadata); // json_metadata에서 이미지 url을 파싱
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail
            style={{
              borderColor: "#D5D7D4",
              borderWidth: 2,
            }}
            source={{
              uri: `https://steemitimages.com/u/${data.author}/avatar`,
            }}
          />
          <Body>
            <Text>{data.author}</Text>
            <Text note>{new Date(data.created).toDateString()}</Text>
          </Body>
        </Left>
      </CardItem>
      {image && image.length ? (
        <CardItem cardBody>
          <Image
            source={{ uri: image[0] }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      ) : null}
      <CardItem style={{ height: 20 }}>
        <Text>{data.active_votes.length} likes</Text>
      </CardItem>
      <CardItem>
        <Text style={{ fontWeight: "900" }}>{data.title}</Text>
      </CardItem>
      <CardItem>
        <Text>
          {data.body_length > 200
            ? data.body.replace(/\n/g, " ").slice(0, 200) + "..."
            : data.body.replace(/\n/g, " ")}
        </Text>
      </CardItem>
      <CardItem style={{ height: 45 }}>
        <Left>
          <Button transparent>
            <Icon name="ios-heart" style={{ color: "black", marginRight: 5 }} />
            <Text>{data.active_votes.length}</Text>
          </Button>
          <Button transparent>
            <Icon
              name="ios-chatbubbles"
              style={{ color: "black", marginRight: 5 }}
            />
            <Text>{data.children}</Text>
          </Button>
          <Button transparent>
            <Icon name="ios-send" style={{ color: "black" }} />
          </Button>
        </Left>
        <Right>
          <Text>{data.pending_payout_value}</Text>
        </Right>
      </CardItem>
    </Card>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  text: {
    fontWeight: "bold",
  },
  container2: {
    // React Native Shadow Generator => https://ethercreative.github.io/react-native-shadow-generator/
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

//make this component available to the app
export default CardComponent;
