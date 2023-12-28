import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import { Main, SearchMoviesList } from "./main";
import { MyTabBar } from "./bottomTabBar";
import { TopRatedMoviesList } from "./topRatedMovies";
import { useSnapshot } from "valtio";
import { searchStore } from "../../store/searchStore";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  const { searchQuery } = useSnapshot(searchStore);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0F0F0F",
      }}
    >
      {searchQuery ? <SearchMoviesList /> : <TopRatedMoviesList />}
    </View>
  );
}
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
        component={SettingsScreen}
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
