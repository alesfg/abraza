import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateUsername from "../SignUp/CreateUsername";
import CreatePassword from "../SignUp/CreatePassword";
import FechaNacimiento from "../SignUp/FechaNacimiento";

const Stack = createNativeStackNavigator();

function SignUp({ state, descriptors, navigation }) {
  return (
    <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="CreateUsername"
          component={CreateUsername}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="CreatePassword"
          component={CreatePassword}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="FechaNacimiento"
          component={FechaNacimiento}
        />
      </Stack.Navigator>
  );
}


export default SignUp;