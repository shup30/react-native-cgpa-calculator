import React from "react";
import { Button, View, Text, StyleSheet, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.ts}>
      
      <Button style={styles.buttonContainer}
        title="CGPA to Percentage Calculator"
        onPress={() => navigation.navigate("Cgpa")}
        color="#005bf2"
      />
    </View>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  ts: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    margin: 20
  }
});