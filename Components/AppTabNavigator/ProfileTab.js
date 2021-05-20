//import liraries
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
} from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { width, height } = Dimensions.get("window");

const ProfileTab = () => {
  let username = "oldstone";

  const [userData, setUserData] = useState(null);
  const [followCount, setFollowCount] = useState(null);
  const [profile, setProfile] = useState(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const data = {
      id: 3,
      jsonrpc: "2.0",
      method: "call",
      params: ["database_api", "get_accounts", [[username]]],
    };
    fetch("https://api.steemit.com", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setUserData(res.result[0]);
        const { profile } = JSON.parse(res.result[0].json_metadata);
        setProfile(profile.profile_image);
      });

    const f_data = {
      id: 4,
      jsonrpc: "2.0",
      method: "call",
      params: ["follow_api", "get_follow_count", [username]],
    };
    fetch("https://api.steemit.com", {
      method: "POST",
      body: JSON.stringify(f_data),
    })
      .then((res) => res.json())
      .then((res) => setFollowCount(res.result));
  }, []);

  let images = [
    "https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525__480.jpg",
    "https://cdn.pixabay.com/photo/2018/11/11/16/51/ibis-3809147__480.jpg",
    "https://cdn.pixabay.com/photo/2018/11/23/14/19/forest-3833973__480.jpg",
    "https://cdn.pixabay.com/photo/2019/01/05/17/05/man-3915438__480.jpg",
    "https://cdn.pixabay.com/photo/2018/12/04/22/38/road-3856796__480.jpg",
    "https://cdn.pixabay.com/photo/2018/11/04/20/21/harley-davidson-3794909__480.jpg",
    "https://cdn.pixabay.com/photo/2018/12/25/21/45/crystal-ball-photography-3894871__480.jpg",
    "https://cdn.pixabay.com/photo/2018/12/29/23/49/rays-3902368__480.jpg",
    "https://cdn.pixabay.com/photo/2017/05/05/16/57/buzzard-2287699__480.jpg",
    "https://cdn.pixabay.com/photo/2018/08/06/16/30/mushroom-3587888__480.jpg",
    "https://cdn.pixabay.com/photo/2018/12/15/02/53/flower-3876195__480.jpg",
    "https://cdn.pixabay.com/photo/2018/12/16/18/12/open-fire-3879031__480.jpg",
    "https://cdn.pixabay.com/photo/2018/11/24/02/05/lichterkette-3834926__480.jpg",
    "https://cdn.pixabay.com/photo/2018/11/29/19/29/autumn-3846345__480.jpg",
  ];

  const renderSectionOne = () => {
    return images.map((image, index) => {
      return (
        <View key={index} style={{ width: width / 3, height: width / 3 }}>
          <Image
            source={{ url: image }}
            style={{ flex: 1, borderWidth: 1, borderColor: "black" }}
          />
        </View>
      );
    });
  };

  const renderSection = () => {
    switch (active) {
      case 0:
        return (
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {renderSectionOne()}
          </View>
        );
      case 1:
        return (
          <View>
            <Text>This is 2 section</Text>
          </View>
        );
      case 2:
        return (
          <View>
            <Text>This is 3 section</Text>
          </View>
        );
      case 3:
        return (
          <View>
            <Text>This is 4 section</Text>
          </View>
        );
    }
  };

  return (
    <Container style={{ flex: 1, backgroundColor: "white" }}>
      <Header>
        <Left style={{ flexDirection: "row" }}>
          <Text
            style={{ fontSize: 25, fontWeight: "bold", paddingHorizontal: 7 }}
          >
            {username}
          </Text>
          <Entypo name="chevron-down" size={20} style={{ paddingTop: 7 }} />
        </Left>
        <Right>
          <FontAwesome
            name="plus-square-o"
            style={{ fontSize: 30, paddingRight: 15 }}
          />
          <Icon
            name="md-person-add"
            style={{ paddingRight: 15, fontSize: 26, paddingBottom: 3 }}
          />
          <Entypo name="menu" style={{ fontSize: 32 }} />
        </Right>
      </Header>
      <Content>
        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={{ url: profile }}
              style={{
                width: 75,
                height: 75,
                borderRadius: 37.5,
                borderColor: "#D5D7D4",
                borderWidth: 2,
              }}
            />
          </View>
          <View
            style={{
              flex: 3,
              marginTop: 25,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontWeight: "bold" }}>
                  {userData.post_count}
                </Text>
                <Text style={{ fontSize: 10, color: "gray" }}>posts</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontWeight: "bold" }}>
                  {followCount.follower_count}
                </Text>
                <Text style={{ fontSize: 10, color: "gray" }}>follower</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontWeight: "bold" }}>
                  {followCount.following_count}
                </Text>
                <Text style={{ fontSize: 10, color: "gray" }}>following</Text>
              </View>
            </View>
          </View>
        </View>
        <Content
          style={{ paddingHorizontal: 10, marginRight: 10, marginTop: 5 }}
        >
          <View style={{ flexDirection: "row" }}>
            <Button
              bordered
              dark
              style={{
                flex: 4,
                marginLeft: 10,
                justifyContent: "center",
                height: 30,
                marginTop: 10,
              }}
            >
              <Text>Edit Profile</Text>
            </Button>
          </View>
        </Content>
        <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
          <Text style={{ fontWeight: "bold" }}>{userData.name}</Text>
          <Text>{userData.about}</Text>
          <Text>{userData.website}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            borderTopWidth: 1,
            borderTopColor: "#eae5e5",
          }}
        >
          <Button onPress={() => setActive(0)} transparent>
            <Icon
              name="ios-apps"
              style={active === 0 ? { color: "black" } : { color: "gray" }}
            />
          </Button>
          <Button onPress={() => setActive(1)} transparent>
            <Icon
              name="ios-list"
              style={active === 1 ? { color: "black" } : { color: "gray" }}
            />
          </Button>
          <Button onPress={() => setActive(2)} transparent>
            <Icon
              name="ios-people"
              style={active === 2 ? { color: "black" } : { color: "gray" }}
            />
          </Button>
          <Button onPress={() => setActive(3)} transparent>
            <Icon
              name="ios-bookmark"
              style={active === 3 ? { color: "black" } : { color: "gray" }}
            />
          </Button>
        </View>
        {renderSection()}
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
export default ProfileTab;
