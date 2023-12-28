import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSnapshot } from "valtio";
import { searchStore } from "../../store/searchStore";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F0F0F",
  },
  anotherContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textWrapper: {
    backgroundColor: "rgb(245,197,24)",
    borderRadius: 5,
    marginLeft: "3%",
    alignSelf: "center",
  },
  text: {
    color: "black",
    fontWeight: "bold",
    padding: "2%",
    fontSize: 16,
  },
  box: {
    paddingLeft: "2%",
  },
  SearchContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  queryContainer: {
    backgroundColor: "rgb(245,197,24)",
    width: 300,
    borderRadius: 5,
    marginLeft: "4%",
    flexDirection: "row",
    padding: 9,
    paddingLeft: 20,
    paddingRight: 15,
    justifyContent: "center",
  },
  queryBox: {
    width: "95%",
  },
});

export default function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { searchQuery } = useSnapshot(searchStore);

  function onPressSearchBar() {
    setShowSearchBar(!showSearchBar);
  }
  function onPressCancel() {
    setShowSearchBar(false);
    searchStore.setSearchQuery("");
  }
  function onPressClear() {
    searchStore.setSearchQuery("");
    Keyboard.dismiss();
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {showSearchBar ? (
        <View style={styles.SearchContainer}>
          <View style={styles.queryContainer}>
            <TextInput
              style={styles.queryBox}
              placeholder="Search bar"
              value={searchQuery}
              onChangeText={(text) => searchStore.setSearchQuery(text)}
            ></TextInput>
            <TouchableOpacity onPress={onPressClear}>
              <Image
                source={require("../images/remove-icon.png")}
                resizeMode="center"
                style={{ width: 45, height: 20 }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={onPressCancel}
            style={{
              width: 60,
              padding: 3.5,
              // backgroundColor: "white",
            }}
          >
            <Text style={{ color: "white", alignSelf: "center" }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.anotherContainer}>
          <View style={styles.box}>
            <Pressable style={styles.textWrapper}>
              <Text style={styles.text}>ImdbClone</Text>
            </Pressable>
          </View>
          <TouchableOpacity onPress={onPressSearchBar}>
            <Image
              source={require("../images/search.png")}
              style={{
                height: 35,
                width: 40,
                marginRight: "5%",
                alignSelf: "center",
                borderRadius: 4,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
