import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Or any other icon library you prefer

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>aleshfg</Text>
        <Icon name="ellipsis-vertical" size={25} />
      </View>

      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://picsum.photos/id/37/200/300",
          }}
        />
        <View style={styles.profileNumbers}>
          <Text style={styles.postCount}>49 </Text>
          <Text style={styles.followers}>Abrazos</Text>
        </View>
        <View style={styles.profileNumbers}>
          <Text style={styles.postCount}>4,142 </Text>
          <Text style={styles.followers}>Seguidores</Text>
        </View>
        <View style={styles.profileNumbers}>
          <Text style={styles.postCount}>1,131 </Text>
          <Text style={styles.following}>Seguidos</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Fokin bestia
      </Text>

      <TouchableOpacity style={styles.contactButton}>
        <Text>Contact</Text>
      </TouchableOpacity>

      <View style={styles.highlights}>
        {/* Add highlight circles here, for simplicity I added just one */}
        <View style={styles.highlight}>
          <Image
            style={styles.highlightImage}
            source={{
              uri: "https://picsum.photos/id/137/200/300",
            }}
          />
          <Text>Icy</Text>
        </View>
        <View style={styles.highlight}>
          <Image
            style={styles.highlightImage}
            source={{
              uri: "https://picsum.photos/id/235/200/300",
            }}
          />
          <Text>Nice</Text>
        </View>
     </View>

      <View style={styles.posts}>
        <Image
          style={styles.postImage}
          source={{
            uri: "https://picsum.photos/id/234/200/300",
          }}
        />
       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: "#E0E0E0",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileInfo: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileNumbers: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 26,
    marginVertical: 15,
  },
  postCount: {
    flex: 1,
    alignItems: "center",
  },
  followers: {
    flex: 1,
    alignItems: "center",
    fontWeight: "bold",
  },
  following: {
    flex: 1,
    alignItems: "center",
    fontWeight: "bold",
  },
  bio: {
    padding: 15,
    lineHeight: 20,
  },
  contactButton: {
    borderWidth: 0.5,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    margin: 15,
  },
  highlights: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: "#E0E0E0",
  },
  highlight: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 15,
  },
  highlightImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  posts: {
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  postImage: {
    width: "31%", // Approx. for 3 images per row with a little space in between
    aspectRatio: 1, // Square images
    marginBottom: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderTopWidth: 0.5,
    borderColor: "#E0E0E0",
  },
  footerProfileImage: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
});
