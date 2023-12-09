import React from "react";
import * as WebBrowser from "expo-web-browser";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../utils/useWarmUpBrowser";
import { Ionicons } from "@expo/vector-icons";
 
WebBrowser.maybeCompleteAuthSession();
 
const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
  return (
    <TouchableOpacity
          onPress={onPress}
          style={styles.loginButton}
        >
          <Ionicons name="logo-google" size={24} color="#000000" style={{paddingRight: 14}} />
          <Text style={styles.loginText}>Iniciar sesión con Google</Text>
        </TouchableOpacity>
  );
}
export default SignInWithOAuth;

const styles = StyleSheet.create({
  loginButton: {
    height: 50,
    flexDirection: "row",
    display: "flex",
    backgroundColor: "#0099FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 20,
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  }
});