import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel-v4";
import { users } from "../utils/users";
import male from "../../assets/male.png"
import female from "../../assets/female.png"
import { colors } from "../utils/colors";
import UseAuthExample from "./useAuthExample";
import UseUserExample from "./useUserExample";

const dimensions = Dimensions.get("screen")

const data = [
  {
    id: "1",
    user: "ATO",
    image: "https://picsum.photos/id/231/200/300",
    likes: "44,686",
    caption: "The game in Japan was amazing and I want to share some photos",
  },
  {
    id: "2",
    user: "joshua_",
    image: "https://picsum.photos/id/232/200/300",
    likes: "44,686",
    caption: "The game in Japan was amazing and I want to share some photos",
  },
  {
    id: "3",
    user: "joshua_",
    image: "https://picsum.photos/id/233/200/300",
    likes: "44,686",
    caption: "The game in Japan was amazing and I want to share some photos",
  },
  // Add more posts as needed
];

const suggestedUsers = [
  {
    id: "s1",
    username: "user1",
    avatar: "https://picsum.photos/id/240/200/300",
  },
  {
    id: "s2",
    username: "user2",
    avatar: "https://picsum.photos/id/241/200/300",
  },
  {
    id: "s3",
    username: "user3",
    avatar: "https://picsum.photos/id/242/200/300",
  },
  // Add more suggested users as needed
];

const InstagramFeed = ({navigation}) => {
  const renderPost = ({ item }) => (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Image
          source={{
            uri: "https://picsum.photos/id/234/200/300",
          }}
          style={styles.userAvatar}
        />
        <Text>{item.user}</Text>
        <Ionicons name="ellipsis-vertical" size={24} color="black" />
      </View>
      <Image source={{ uri: item.image }} style={styles.postImage} />
      <View style={styles.postFooter}>
        <View style={styles.interactionIcons}>
          <Ionicons
            name="heart-outline"
            size={24}
            color="black"
            style={styles.iconSpacing}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            color="black"
            style={styles.iconSpacing}
          />
          <Ionicons name="paper-plane-outline" size={24} color="black" />
        </View>
        <Text>Liked by craig_love and {item.likes} others</Text>
        <Text>
          {item.user} | {item.caption}
        </Text>
      </View>
    </View>
  );
  const renderSuggestedUser = ({ item }) => (
    <TouchableOpacity style={styles.suggestedUser}>
      <Image source={item.gender == "male" ? male : female} style={styles.suggestedUserAvatar} />
      <Text style={styles.suggestedUsername}>{item.username}</Text>
      <TouchableOpacity style={styles.addFriendButton}>
        <Text style={styles.addFriendButtonText}>Añadir amigo</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Abraza</Text>
        <View style={styles.iconsTop}>
          <TouchableOpacity onPress={()=>navigation.navigate("Notifications")}>
            <Ionicons
              style={{ right: 10 }}
              name="heart-outline"
              size={28}
              color="black"
            />
          </TouchableOpacity>
          <AntDesign name="message1" size={24} color="black" />
        </View>
      </View>

      {/* <View style={styles.storiesContainer}>
        <UseAuthExample/>

        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => (
            <Image
              source={{
                uri: "https://picsum.photos/id/230/200/300",
              }}
              style={styles.story}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View> */}
      <View style={styles.bgContainer}>
        <Text>Sugeridos</Text>
        <View style={styles.suggestedContainer}>

        <Carousel
          data={users}
          renderItem={renderSuggestedUser}
          sliderWidth={dimensions.width}
          itemWidth={120}
          layout="default"
          loop
          />
          </View>
      </View>

      <FlatList
        data={data}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        style={styles.postsList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  storiesContainer: {
    flexDirection: "row",
    padding: 10,
  },
  story: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 5,
    borderColor: "pink",
    borderWidth: 2,
  },
  postsList: {
    flex: 1,
  },
  post: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postImage: {
    width: "100%",
    height: 300,
  },
  postFooter: {
    padding: 10,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  bottomAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  interactionIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconSpacing: {
    marginRight: 10,
  },
  iconsTop:{
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10, 
  },
  bgContainer:{
    backgroundColor: colors.gainsboro,
    paddingVertical: 10,
    paddingHorizontal: 0,
  }, 
  suggestedContainer:{
    backgroundColor: colors.white,
  }, 
  suggestedUser: {
    alignItems: "center",
    padding: 10,
  },
  suggestedUserAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  suggestedUsername: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  addFriendButton: {
    backgroundColor: "#3498db",
    padding: 5,
    borderRadius: 5,
  },
  addFriendButtonText: {
    color: "#fff",
  },
});

export default InstagramFeed;
