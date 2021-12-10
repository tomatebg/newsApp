import React from "react";
import { Text } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const SearchScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text>Search Screen!!</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchScreen;