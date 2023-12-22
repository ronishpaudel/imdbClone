import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { PopularMoviesList, Main, UpcomingMovies } from "./main";
import { MyTabBar } from "./bottomTabBar";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false, tabBarLabel: "asdasdsd" }}
      />
      <Tab.Screen
        name="Settings"
        component={UpcomingMovies}
        options={{ headerShown: false, tabBarLabel: "asd" }}
      />
    </Tab.Navigator>
  );
}
export { MyTabs };
