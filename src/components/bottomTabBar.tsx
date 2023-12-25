import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function MyTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
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
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        console.log({ options });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            activeOpacity={1}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              backgroundColor: "#0F0F0F",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SafeAreaView
              edges={["bottom"]}
              style={{
                paddingTop: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{options?.tabBarIcon?.(isFocused)}</Text>
              <Text
                style={{
                  color: isFocused ? "yellow" : "white",
                  fontSize: 12,
                }}
              >
                {label}
              </Text>
            </SafeAreaView>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
