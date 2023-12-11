import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddHugImage from "../AddHug/AddHugImage";
import TagHug from "../AddHug/TagHug";

const Stack = createNativeStackNavigator();

function AddHug({ state, descriptors, navigation }) {
  return (
    <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="AddHugImage"
          component={AddHugImage}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="TagHug"
          component={TagHug}
        />

      </Stack.Navigator>
  );
}


export default AddHug;