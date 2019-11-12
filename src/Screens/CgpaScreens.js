import React, { Component, useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Alert } from "react-native";

export default class CgpaScreens extends Component {
  constructor(props) {
    super(props);
    this.state = { f1: null, result: null };
  }

  handleValue = text => {
    this.setState({ f1: parseFloat(text) });
  };

  onPressButton = () => {
    var A = this.state.f1;
    var B = (7.1 * A ) + 11
    Alert.alert("Percentages: " + B.toString())
  }


  render() {
    var f1 = this.state.f1;
    const result = f1 ? f1 * 7.1 + 11 : null;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>CGPA CALCUALTOR</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Enter Your CGPA!"
            keyboardType='numeric'
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.handleValue}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this.onPressButton}
            title="Calculate Your CGPA"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 30
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  buttonContainer: {
    margin: 20
  }
});