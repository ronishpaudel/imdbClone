import React from "react";
import { Navigator } from "./src/components/navigator";
import Header from "./src/components/header";
import { View, StyleSheet } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  const queryClient = new QueryClient();
  return (
    <View style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <Navigator />
      </QueryClientProvider>
    </View>
  );
}
