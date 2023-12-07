import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import InstagramFeed from "../Home";
import Search from "../Search";
import Map from "../Map";
import Profile from "../Profile";
import Reels from "../Reels";

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        let iconName;
        if (route.name === "Feed") {
          iconName = isFocused ? "home" : "home-outline";
        } else if (route.name === "Search") {
          iconName = isFocused ? "search" : "search-outline";
        } else if (route.name === "Map") {
          iconName = isFocused ? "add-circle" : "add-circle-outline";
        } else if (route.name === "Reels") {
          iconName = isFocused ? "videocam" : "videocam-outline";
        } else if (route.name === "Profile") {
          iconName = isFocused ? "person-circle" : "person-circle-outline";
        }

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tabButton}
          >
            <Ionicons
              name={iconName}
              size={24}
              color={isFocused ? "#000" : "#222"}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomTabs = () => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Feed"
        component={InstagramFeed}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Search"
        component={Search}
      />
      <Tab.Screen options={{ headerShown: false }} name="Map" component={Map} />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Reels"
        component={Reels}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 0.5,
    borderTopColor: "lightgray",
    paddingBottom: 30,
    paddingTop: 5,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 5,
  },
  profileIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 7,
  },
  profileIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});
