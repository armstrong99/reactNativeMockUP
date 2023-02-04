import "react-native-gesture-handler";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Icons from "react-native-heroicons/solid";

const Tab = createBottomTabNavigator();
const screenWidth = Dimensions.get("screen").width;

export type TTabBarLabel = "Home" | "Friends" | "Create" | "Decks" | "Profile";

const tabBarIconMap: {
  [key in TTabBarLabel]: React.ReactElement;
} = {
  Home: <Icons.HomeIcon color={"gray"} />,
  Friends: <Icons.UserGroupIcon color={"gray"} />,
  Create: <Icons.PlusIcon color={"gray"} />,
  Decks: <Icons.RectangleStackIcon color={"gray"} />,
  Profile: <Icons.UserIcon color={"gray"} />,
};

function MyTabBar({ state, descriptors, navigation }: any) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: screenWidth,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "transparent",
        height: 60,
        paddingBottom: 10
      }}
    >
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label: TTabBarLabel =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        if(index === 0) {
          return (
            <TouchableOpacity key={route.key}>
              <View
                style={{
                  backgroundColor: "tranparent",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {tabBarIconMap["Home"]}
                <Text style={{fontSize: 12 ,color: isFocused ? "gray" : "gray" }}>
                  {"Home"}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity key={route.key}>
            <View
              style={{
                backgroundColor: "tranparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {tabBarIconMap[label]}
              <Text style={{ color: isFocused ? "gray" : "gray" }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
       <Tab.Screen name="Friends" component={HomeScreen} />
       <Tab.Screen name="Create" component={HomeScreen} />
      <Tab.Screen name="Decks" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
  );
}
