import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import { Main } from "./main";
import { MyTabBar } from "./bottomTabBar";
import { TopRatedMoviesList } from "./topRatedMovies";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: (isFocused) => (
            <Image
              source={require("../images/homeIcon.png")}
              style={{
                height: 30,
                width: 30,
                tintColor: isFocused ? "rgb(245,197,24)" : "white",
                alignSelf: "center",
              }}
            />
          ),
          headerShown: false,
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={TopRatedMoviesList}
        options={{
          tabBarIcon: (isFocused) => (
            <Image
              source={require("../images/star.png")}
              style={{
                height: 22,
                width: 22,
                tintColor: isFocused ? "rgb(245,197,24)" : "white",
              }}
            />
          ),
          headerShown: false,
          tabBarLabel: "Top-Rated",
        }}
      />
    </Tab.Navigator>
  );
}
export { MyTabs };
