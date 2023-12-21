import React from "react";
import Footer from "./src/components/footer";
import Main from "./src/components/main";
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
        <Header />
        <Main />
        {/* <Footer /> */}
      </QueryClientProvider>
    </View>
  );
}
