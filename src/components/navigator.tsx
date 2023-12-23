import * as React from "react";
import {
  CompositeScreenProps,
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Header from "./header";
import { TMovie } from "../../types/TMovie";
import { Details } from "./details";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { MyTabs } from "./tabBar";
import { DetailHeader } from "./detailHeader";

export type RootStackParamList = {
  Main: NavigatorScreenParams<HomeTabParamList>;
  Details: TMovie;
  MyTabs: any;
};

export type HomeTabParamList = {
  Popular: undefined;
  Latest: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyTabs"
          options={{ header: () => <Header /> }}
          component={MyTabs}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            header: () => <DetailHeader />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export { Navigator };
