import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { PopularMoviesList, Main, UpcomingMovies } from "./main";
import { MyTabBar } from "./bottomTabBar";
import { TopRatedMoviesList } from "./topRatedMovies";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false, tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Settings"
        component={TopRatedMoviesList}
        options={{ headerShown: false, tabBarLabel: "Top-Rated" }}
      />
    </Tab.Navigator>
  );
}
export { MyTabs };
